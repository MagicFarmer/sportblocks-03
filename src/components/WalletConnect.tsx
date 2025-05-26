
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
    isInitialized,
    connectWallet, 
    disconnectWallet, 
    handleRegistrationComplete 
  } = useStarkNet();

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        {/* Background Image - Ancient Olympia */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=1080&fit=crop" 
            alt="Ancient Olympia, Greece" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-200">Initializing connection...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show registration form if wallet is connected but no user data
  if (wallet.isConnected && !userData) {
    return (
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        {/* Background Image - Ancient Olympia */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=1080&fit=crop" 
            alt="Ancient Olympia, Greece" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center">
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
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        {/* Background Image - Ancient Olympia */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-indigo-900/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&h=1080&fit=crop" 
            alt="Ancient Olympia, Greece" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <Wallet className="text-blue-300 mx-auto mb-4 drop-shadow-lg" size={48} />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 drop-shadow-md">Connect Your StarkNet Wallet</h2>
            <p className="text-gray-200 mb-6 sm:mb-8 drop-shadow-sm text-sm sm:text-base">
              Connect your wallet to start collecting and trading sports NFTs
            </p>

            {!showWalletOptions ? (
              <button
                onClick={() => setShowWalletOptions(true)}
                disabled={isLoading}
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 text-sm sm:text-base"
              >
                <Wallet className="mr-2" size={20} />
                {isLoading ? "Connecting..." : "Connect Wallet"}
                <ChevronDown className="ml-2" size={20} />
              </button>
            ) : (
              <div className="space-y-4">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-4 drop-shadow-sm">Choose Your Wallet</h3>
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border border-white/30 hover:border-blue-400 hover:bg-white/10 text-white transition-all duration-200 disabled:opacity-50 backdrop-blur-sm text-sm sm:text-base"
                >
                  <div className="flex items-center">
                    <span className="text-xl sm:text-2xl mr-3">🦊</span>
                    <span className="font-medium">Argent X</span>
                  </div>
                  {isLoading && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
                <button
                  onClick={connectWallet}
                  disabled={isLoading}
                  className="w-full flex items-center justify-between p-3 sm:p-4 rounded-xl border border-white/30 hover:border-blue-400 hover:bg-white/10 text-white transition-all duration-200 disabled:opacity-50 backdrop-blur-sm text-sm sm:text-base"
                >
                  <div className="flex items-center">
                    <span className="text-xl sm:text-2xl mr-3">🔷</span>
                    <span className="font-medium">Braavos</span>
                  </div>
                  {isLoading && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
                <button
                  onClick={() => setShowWalletOptions(false)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 mt-4 text-sm sm:text-base"
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
