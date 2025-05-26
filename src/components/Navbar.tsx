
import { Link } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            SportBlocks
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
