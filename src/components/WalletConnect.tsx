
import { useState } from "react";
import { Wallet, ChevronDown } from "lucide-react";
import { useStarkNet } from "@/hooks/useStarkNet";
import UserRegistrationForm from "./UserRegistrationForm";

const WalletConnect = () => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const { 
    wallet, 
    userData, 
    isLoading, 
    connectWallet, 
    disconnectWallet, 
    handleRegistrationComplete 
  } = useStarkNet();

  // Show registration form if wallet is connected but no user data
  if (wallet.isConnected && !userData) {
    return (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <UserRegistrationForm 
            walletAddress={wallet.address || ''} 
            onRegistrationComplete={handleRegistrationComplete}
          />
        </div>
      </section>
    );
  }

  // Show wallet connection interface if not connected
  if (!wallet.isConnected) {
    return (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <Wallet className="text-blue-400 mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold text-white mb-4">Connect Your StarkNet Wallet</h2>
            <p className="text-gray-400 mb-8">
              Connect your wallet to start collecting and trading sports NFTs
            </p>

            {!showWalletOptions ? (
              <button
                onClick={() => setShowWalletOptions(true)}
                disabled={isLoading}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                <Wallet className="mr-2" size={20} />
                {isLoading ? "Connecting..." : "Connect Wallet"}
                <ChevronDown className="ml-2" size={20} />
              </button>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Choose Your Wallet</h3>
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-white/20 hover:border-blue-400 hover:bg-white/5 text-white transition-all duration-200 disabled:opacity-50"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🦊</span>
                    <span className="font-medium">Argent X</span>
                  </div>
                  {isLoading && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-white/20 hover:border-blue-400 hover:bg-white/5 text-white transition-all duration-200 disabled:opacity-50"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔷</span>
                    <span className="font-medium">Braavos</span>
                  </div>
                  {isLoading && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
                <button
                  onClick={() => setShowWalletOptions(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 mt-4"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // If connected and has user data, show nothing (other pages will handle display)
  return null;
};

export default WalletConnect;
