
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">SB</span>
            </div>
            <div className="text-3xl font-bold">
              <span className="text-slate-900">Sport</span>
              <span className="text-amber-500">Blocks</span>
            </div>
          </Link>

          {/* Right side menus */}
          <div className="flex items-center space-x-4">
            <NavigationMenu />
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
