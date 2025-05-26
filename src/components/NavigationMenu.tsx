
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Image, Trophy, ShoppingBag, Info, Users, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useStarkNet } from "@/hooks/useStarkNet";

const NavigationMenu = () => {
  const location = useLocation();
  const { wallet, userData, isInitialized } = useStarkNet();

  const isActive = (path: string) => location.pathname === path;

  const publicItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Marketplace", path: "/marketplace", icon: ShoppingBag },
  ];

  const galleryItems = [
    { name: "Athletes NFTs", path: "/gallery", icon: Trophy },
    { name: "Social Projects", path: "/social-projects", icon: Heart },
    { name: "Sports Professionals", path: "/fans-gallery", icon: Users },
  ];

  // Add My Collections for authenticated users
  const authenticatedItems = (wallet.isConnected && userData && isInitialized) ? [
    { name: "My Collections", path: "/my-collections", icon: Image },
  ] : [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="text-slate-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 w-12 h-12"
        >
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white border-gray-200 shadow-xl rounded-lg p-2"
      >
        {/* Public Pages */}
        {publicItems.map((item) => {
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

        {authenticatedItems.length > 0 && (
          <>
            <DropdownMenuSeparator className="bg-gray-200 my-1" />
            {authenticatedItems.map((item) => {
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
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationMenu;
