
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CreditCard, ShoppingBag, Trophy, Heart, Users } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const CardsMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const galleryItems = [
    { name: "Athletes NFTs", path: "/gallery", icon: Trophy },
    { name: "Social Projects", path: "/social-projects", icon: Heart },
    { name: "Sports Professionals", path: "/fans-gallery", icon: Users },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="text-slate-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 w-12 h-12"
        >
          <CreditCard size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white border-gray-200 shadow-xl rounded-lg p-2"
      >
        {/* Marketplace - Featured */}
        <DropdownMenuItem asChild>
          <Link
            to="/marketplace"
            className={`flex items-center space-x-3 px-4 py-4 rounded-lg cursor-pointer transition-all duration-200 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 hover:border-amber-300 ${
              isActive("/marketplace")
                ? "from-amber-100 to-orange-100 border-amber-400"
                : ""
            }`}
          >
            <div className="p-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
              <ShoppingBag size={18} className="text-white" />
            </div>
            <div>
              <span className="font-bold text-amber-700">🔥 Marketplace</span>
              <div className="text-xs text-amber-600">Discover & Trade NFTs</div>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-200 my-1" />

        {/* Gallery Section */}
        <DropdownMenuLabel className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Gallery
        </DropdownMenuLabel>
        {galleryItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem key={item.path} asChild>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                    : "hover:bg-gray-50 text-slate-700"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CardsMenu;
