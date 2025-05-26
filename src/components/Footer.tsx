
const Footer = () => {
  return (
    <footer className="relative px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <span className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SportBlocks
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The premier marketplace for sports NFTs on StarkNet. Collect legendary moments 
              from your favorite athletes and own a piece of sports history.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <span className="text-lg">📺</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <span className="text-lg">💬</span>
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-white font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Browse NFTs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Featured Athletes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Trending Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Activity</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Platform Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Bug Bounty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SportBlocks. Built on StarkNet. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">StarkNet Mainnet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
