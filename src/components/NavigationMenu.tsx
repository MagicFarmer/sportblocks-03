
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, Info, FileText, Target, Zap, TrendingUp, Mail } from "lucide-react";
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

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const publicItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Executive Summary", path: "/executive-summary", icon: FileText },
    { name: "Project Evolution", path: "/project-evolution", icon: Zap },
    { name: "Business Pitch", path: "/business-pitch", icon: TrendingUp },
    { name: "Campaign Board", path: "/campaign-board", icon: Target },
  ];

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
                onClick={handleLinkClick}
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

        {/* Contact */}
        <DropdownMenuItem asChild>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
              isActive("/contact")
                ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                : "hover:bg-gray-50 text-slate-700"
            }`}
          >
            <Mail size={20} />
            <span className="font-medium">Contact</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationMenu;
