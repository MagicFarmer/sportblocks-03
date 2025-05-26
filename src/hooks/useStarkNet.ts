
import { useState, useEffect } from 'react';
import { connect, disconnect } from 'starknetkit';
import { supabase } from "@/integrations/supabase/client";

export interface StarkNetWallet {
  account?: any;
  address?: string;
  isConnected: boolean;
}

export const useStarkNet = () => {
  const [wallet, setWallet] = useState<StarkNetWallet>({ isConnected: false });
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      console.log('Attempting to connect wallet...');
      const connection = await connect({ 
        webWalletUrl: "https://web.argent.xyz",
        argentMobileOptions: {
          dappName: "SportBlocks",
          url: window.location.hostname,
        }
      });

      if (connection && connection.wallet) {
        try {
          const account = await connection.wallet.request({
            type: "wallet_requestAccounts"
          });
          
          if (account && account.length > 0) {
            const address = account[0];
            console.log('Wallet connected with address:', address);
            
            const walletData = {
              account: connection.wallet,
              address: address,
              isConnected: true
            };
            
            setWallet(walletData);
            
            // Persist wallet connection state
            localStorage.setItem('starknet-wallet-connected', 'true');
            localStorage.setItem('starknet-wallet-address', address);

            // Check if user exists in database
            await checkUserExists(address);
          }
        } catch (accountError) {
          console.error('Failed to get account:', accountError);
        }
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      console.log('Disconnecting wallet...');
      await disconnect();
      setWallet({ isConnected: false });
      setUserData(null);
      
      // Clear persisted state
      localStorage.removeItem('starknet-wallet-connected');
      localStorage.removeItem('starknet-wallet-address');
      localStorage.removeItem('starknet-user-data');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const checkUserExists = async (walletAddress: string) => {
    try {
      console.log('Checking if user exists for wallet:', walletAddress);
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('wallet_address', walletAddress)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking user:', error);
        return;
      }

      if (data) {
        console.log('User found:', data);
        setUserData(data);
        // Persist user data
        localStorage.setItem('starknet-user-data', JSON.stringify(data));
      } else {
        console.log('User not found, registration needed');
        // Clear user data if not found
        localStorage.removeItem('starknet-user-data');
      }
    } catch (error) {
      console.error('Error checking user exists:', error);
    }
  };

  const handleRegistrationComplete = (newUserData: any) => {
    console.log('Registration completed for user:', newUserData);
    setUserData(newUserData);
    // Persist user data
    localStorage.setItem('starknet-user-data', JSON.stringify(newUserData));
  };

  useEffect(() => {
    const initializeWallet = async () => {
      setIsLoading(true);
      
      try {
        console.log('Initializing wallet...');
        // Check if wallet was previously connected
        const wasConnected = localStorage.getItem('starknet-wallet-connected');
        const savedAddress = localStorage.getItem('starknet-wallet-address');
        const savedUserData = localStorage.getItem('starknet-user-data');

        if (wasConnected === 'true' && savedAddress) {
          console.log('Found saved wallet connection for:', savedAddress);
          
          // Try to restore user data first
          if (savedUserData) {
            try {
              const parsedUserData = JSON.parse(savedUserData);
              console.log('Restored user data:', parsedUserData);
              setUserData(parsedUserData);
            } catch (e) {
              console.error('Error parsing saved user data:', e);
              localStorage.removeItem('starknet-user-data');
            }
          }

          // Try to reconnect wallet
          try {
            const connection = await connect({ modalMode: "neverAsk" });
            if (connection && connection.wallet) {
              try {
                const account = await connection.wallet.request({
                  type: "wallet_requestAccounts"
                });
                
                if (account && account.length > 0 && account[0] === savedAddress) {
                  console.log('Wallet reconnected successfully');
                  setWallet({
                    account: connection.wallet,
                    address: savedAddress,
                    isConnected: true
                  });

                  // Verify user data is still valid
                  if (!savedUserData) {
                    await checkUserExists(savedAddress);
                  }
                } else {
                  console.log('Address mismatch, clearing stored data');
                  // Address mismatch, clear stored data
                  localStorage.removeItem('starknet-wallet-connected');
                  localStorage.removeItem('starknet-wallet-address');
                  localStorage.removeItem('starknet-user-data');
                }
              } catch (accountError) {
                console.log('Could not restore wallet connection');
                // Clear stored data if restoration fails
                localStorage.removeItem('starknet-wallet-connected');
                localStorage.removeItem('starknet-wallet-address');
                localStorage.removeItem('starknet-user-data');
              }
            }
          } catch (error) {
            console.log('Auto-reconnect failed, user needs to connect manually');
          }
        }
      } catch (error) {
        console.error('Error during wallet initialization:', error);
      } finally {
        setIsLoading(false);
        setIsInitialized(true);
        console.log('Wallet initialization complete');
      }
    };

    initializeWallet();
  }, []);

  return {
    wallet,
    userData,
    isLoading,
    isInitialized,
    connectWallet,
    disconnectWallet,
    handleRegistrationComplete
  };
};
