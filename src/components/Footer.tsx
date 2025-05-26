
import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Github, Mail, Languages } from "lucide-react";
import PunchLines from "./PunchLines";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleTranslate = () => {
    // Initialize Google Translate
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    // Define the callback function
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,pt,fr,de,it,zh,ja,ko,ar',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL
      }, 'google_translate_element');
    };

    // Create the translate element if it doesn't exist
    if (!document.getElementById('google_translate_element')) {
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      translateDiv.style.position = 'fixed';
      translateDiv.style.top = '100px';
      translateDiv.style.right = '20px';
      translateDiv.style.zIndex = '9999';
      translateDiv.style.backgroundColor = 'white';
      translateDiv.style.padding = '10px';
      translateDiv.style.borderRadius = '8px';
      translateDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      document.body.appendChild(translateDiv);
    }
  };

  return (
    <footer className="pt-12 pb-6 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              {/* Greek Spiral Icon */}
              <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-amber-400 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="white" />
                </svg>
              </div>
              <div className="text-xl font-bold">
                <span className="text-white">Sport</span>
                <span className="text-amber-400">Blocks</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-4 max-w-sm">
              Revolutionizing the relationship between athletes, fans, and social impact through Web3 technology on StarkNet.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              <a 
                href="https://github.com/MagicFarmer/sportblocks-03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
              <Link 
                to="/contact"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail size={20} className="text-white" />
              </Link>
            </div>
            
            <PunchLines style="subtle" className="border-l-blue-400 bg-blue-900/20" />
          </div>

          {/* Navigation Menu */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-400">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/executive-summary" className="text-gray-400 hover:text-white transition-colors">Executive Summary</Link>
              </li>
              <li>
                <Link to="/project-evolution" className="text-gray-400 hover:text-white transition-colors">Project Evolution</Link>
              </li>
              <li>
                <Link to="/business-pitch" className="text-gray-400 hover:text-white transition-colors">Business Pitch</Link>
              </li>
              <li>
                <Link to="/campaign-board" className="text-gray-400 hover:text-white transition-colors">Campaign Board</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Cards Menu */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-400">Cards</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/marketplace" className="text-gray-400 hover:text-white transition-colors">Marketplace</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Athletes NFTs</Link>
              </li>
              <li>
                <Link to="/social-projects" className="text-gray-400 hover:text-white transition-colors">Social Projects</Link>
              </li>
              <li>
                <Link to="/fans-gallery" className="text-gray-400 hover:text-white transition-colors">Sports Professionals</Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-amber-400">Important Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://starkware.co/starknet/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  StarkNet Foundation
                </a>
              </li>
              <li>
                <a 
                  href="https://sdgs.un.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UN SDG Goals
                </a>
              </li>
              <li>
                <a 
                  href="https://olympics.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Olympics.com
                </a>
              </li>
              <li>
                <a 
                  href="https://olympians.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  World Olympian Association
                </a>
              </li>
              <li>
                <a 
                  href="https://paralympic.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  International Paralympic Committee
                </a>
              </li>
              <li>
                <a 
                  href="https://wikimediafoundation.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Wikimedia Foundation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Translate Section */}
        <div className="mb-8 text-center">
          <div className="border-t border-gray-800 pt-8">
            <h3 className="font-bold text-lg mb-4 text-amber-400">Translate This Page</h3>
            <button
              onClick={handleTranslate}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <Languages size={20} />
              <span>Translate Page</span>
            </button>
            <p className="text-gray-400 text-sm mt-2">
              Translate this website into your preferred language
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} SportBlocks. All rights reserved.
              </p>
              <a 
                id="_bottom"
                href="https://github.com/MagicFarmer/sportblocks-03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 text-sm hover:text-white transition-colors flex items-center space-x-1"
              >
                <Github size={14} />
                <span>View Source</span>
              </a>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
