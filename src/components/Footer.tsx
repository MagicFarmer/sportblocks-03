
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-400 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                <span className="text-white">Sport</span>
                <span className="text-amber-400">Blocks</span>
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-md">
              The premier platform for sports NFTs on StarkNet. Collect legendary moments 
              from your favorite athletes and own a piece of sports history.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <Link to="/contact" className="w-12 h-12 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Main Navigation */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">About</Link></li>
              <li><Link to="/executive-summary" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Executive Summary</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Marketplace</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Gallery</h4>
            <ul className="space-y-4">
              <li><Link to="/gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Athletes NFTs</Link></li>
              <li><Link to="/social-projects" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Social Projects</Link></li>
              <li><Link to="/fans-gallery" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Sports Professionals</Link></li>
              <li><Link to="/campaign-board" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Campaign Board</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Important Links</h4>
            <ul className="space-y-4">
              <li><a href="https://www.starknet.io/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">StarkNet Foundation</a></li>
              <li><a href="https://olympics.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Olympics.com</a></li>
              <li><a href="https://www.worldolympians.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">World Olympians</a></li>
              <li><a href="https://www.paralympic.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Paralympic Committee</a></li>
              <li><a href="https://wikimediafoundation.org/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Wikimedia Foundation</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
            © 2025 SportBlocks. Built on StarkNet. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm sm:text-base transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm sm:text-base transition-colors duration-200">
              Terms of Service
            </a>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm sm:text-base text-gray-400">StarkNet Mainnet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
