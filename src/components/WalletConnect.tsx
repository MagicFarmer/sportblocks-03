
import { useState } from "react";
import { Wallet, ChevronDown } from "lucide-react";

interface WalletConnectProps {
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

const WalletConnect = ({ isConnected, onConnect, onDisconnect }: WalletConnectProps) => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const walletOptions = [
    { name: "Argent X", icon: "🦊", supported: true },
    { name: "Braavos", icon: "🔷", supported: true },
    { name: "Other Wallets", icon: "🔗", supported: false }
  ];

  const handleConnect = async (walletName: string) => {
    if (walletName === "Other Wallets") return;
    
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      onConnect();
      setIsConnecting(false);
      setShowWalletOptions(false);
    }, 2000);
  };

  if (isConnected) {
    return (
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <Wallet className="text-green-400 mr-2" size={24} />
              <span className="text-white text-xl font-semibold">Wallet Connected</span>
            </div>
            <p className="text-gray-400 mb-6">
              Address: 0x1234...5678 (StarkNet)
            </p>
            <button
              onClick={onDisconnect}
              className="px-6 py-3 bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl hover:bg-red-500/30 transition-all duration-200"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      </section>
    );
  }

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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Wallet className="mr-2" size={20} />
              Connect Wallet
              <ChevronDown className="ml-2" size={20} />
            </button>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Choose Your Wallet</h3>
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.name}
                  onClick={() => handleConnect(wallet.name)}
                  disabled={!wallet.supported || isConnecting}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                    wallet.supported
                      ? 'border-white/20 hover:border-blue-400 hover:bg-white/5 text-white'
                      : 'border-gray-600 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{wallet.icon}</span>
                    <span className="font-medium">{wallet.name}</span>
                  </div>
                  {!wallet.supported && (
                    <span className="text-sm text-gray-500">Coming Soon</span>
                  )}
                  {isConnecting && wallet.supported && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
              ))}
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
};

export default WalletConnect;
