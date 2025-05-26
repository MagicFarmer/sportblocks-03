
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

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      const connection = await connect({ 
        webWalletUrl: "https://web.argent.xyz",
        argentMobileOptions: {
          dappName: "SportBlocks",
          url: window.location.hostname,
        }
      });

      if (connection && connection.wallet) {
        // Check if wallet is connected by trying to get the account
        try {
          const account = await connection.wallet.request({
            type: "wallet_requestAccounts"
          });
          
          if (account && account.length > 0) {
            const address = account[0];
            setWallet({
              account: connection.wallet,
              address: address,
              isConnected: true
            });

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
      await disconnect();
      setWallet({ isConnected: false });
      setUserData(null);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  const checkUserExists = async (walletAddress: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('wallet_address', walletAddress)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking user:', error);
        return;
      }

      setUserData(data);
    } catch (error) {
      console.error('Error checking user exists:', error);
    }
  };

  const handleRegistrationComplete = (newUserData: any) => {
    setUserData(newUserData);
  };

  useEffect(() => {
    // Try to reconnect on page load
    const tryReconnect = async () => {
      try {
        const connection = await connect({ modalMode: "neverAsk" });
        if (connection && connection.wallet) {
          try {
            const account = await connection.wallet.request({
              type: "wallet_requestAccounts"
            });
            
            if (account && account.length > 0) {
              const address = account[0];
              setWallet({
                account: connection.wallet,
                address: address,
                isConnected: true
              });
              await checkUserExists(address);
            }
          } catch (accountError) {
            // Silent fail for auto-reconnect
          }
        }
      } catch (error) {
        // Silent fail for auto-reconnect
      }
    };

    tryReconnect();
  }, []);

  return {
    wallet,
    userData,
    isLoading,
    connectWallet,
    disconnectWallet,
    handleRegistrationComplete
  };
};
