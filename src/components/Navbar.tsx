
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useStarkNet } from "@/hooks/useStarkNet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wallet, userData } = useStarkNet();

  const isWalletConnected = wallet.isConnected && userData;

  return (
    <nav className="relative z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">SB</span>
          </div>
          <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SportBlocks
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
            Gallery
          </a>
          <a href="#athletes" className="text-gray-300 hover:text-white transition-colors duration-200">
            Athletes
          </a>
          <a href="#marketplace" className="text-gray-300 hover:text-white transition-colors duration-200">
            Marketplace
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
            About
          </a>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isWalletConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="text-sm text-gray-300">
              {isWalletConnected ? `Connected as ${userData?.name}` : 'Not Connected'}
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors duration-200">
              Gallery
            </a>
            <a href="#athletes" className="block text-gray-300 hover:text-white transition-colors duration-200">
              Athletes
            </a>
            <a href="#marketplace" className="block text-gray-300 hover:text-white transition-colors duration-200">
              Marketplace
            </a>
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors duration-200">
              About
            </a>
            <div className="flex items-center space-x-2 pt-2">
              <div className={`w-2 h-2 rounded-full ${isWalletConnected ? 'bg-green-400' : 'bg-red-400'}`}></div>
              <span className="text-sm text-gray-300">
                {isWalletConnected ? `Connected as ${userData?.name}` : 'Wallet Not Connected'}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
