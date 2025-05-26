
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
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
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <span className="text-xl">📺</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Marketplace</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Explore NFTs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Featured Athletes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Trending Collections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Activity</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Platform Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Bug Bounty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm sm:text-base text-center md:text-left">
            © 2024 SportBlocks. Built on StarkNet. All rights reserved.
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
