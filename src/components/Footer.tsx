
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-400 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div className="text-3xl font-bold">
                <span className="text-white">Sport</span>
                <span className="text-amber-400">Blocks</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
              La plataforma premier para NFTs deportivos en StarkNet. Colecciona momentos legendarios 
              de tus atletas favoritos y posee una pieza de la historia deportiva.
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
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Explorar NFTs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Atletas Destacados</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Colecciones Trending</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Actividad</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Recursos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Estado de la Plataforma</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Socios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-base">Bug Bounty</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-base mb-4 md:mb-0">
            © 2024 SportBlocks. Construido en StarkNet. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-base transition-colors duration-200">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-base transition-colors duration-200">
              Términos de Servicio
            </a>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-base text-gray-400">StarkNet Mainnet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
