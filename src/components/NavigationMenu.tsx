
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, BarChart3, Image, Trophy, ShoppingBag, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useStarkNet } from "@/hooks/useStarkNet";

const NavigationMenu = () => {
  const location = useLocation();
  const { wallet, userData, isInitialized } = useStarkNet();

  const isActive = (path: string) => location.pathname === path;

  const publicItems = [
    { name: "Inicio", path: "/", icon: BarChart3 },
    { name: "Galería", path: "/gallery", icon: Image },
    { name: "Marketplace", path: "/marketplace", icon: ShoppingBag },
    { name: "Atletas", path: "/athletes", icon: Trophy },
  ];

  const authenticatedItems = (wallet.isConnected && userData && isInitialized) ? [
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Crear NFT", path: "/create-nft", icon: Plus },
  ] : [];

  const allItems = [...publicItems, ...authenticatedItems];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white hover:bg-white/10 border border-white/20"
        >
          <Menu size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 bg-black/90 backdrop-blur-lg border-white/20 text-white"
      >
        {allItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem key={item.path} asChild>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 cursor-pointer ${
                  isActive(item.path)
                    ? "bg-blue-500/20 text-blue-400"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigationMenu;
