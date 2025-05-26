
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import CardsMenu from "./CardsMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* Greek Spiral Icon */}
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-amber-400 rounded-lg flex items-center justify-center shadow-lg">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path
                  d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-slate-900">Sport</span>
              <span className="text-amber-500">Blocks</span>
            </div>
          </Link>

          {/* Right side menus */}
          <div className="flex items-center space-x-4">
            <NavigationMenu />
            <CardsMenu />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
