
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut, Circle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useStarkNet } from "@/hooks/useStarkNet";

const UserMenu = () => {
  const { wallet, userData, isInitialized, disconnectWallet } = useStarkNet();

  const handleDisconnect = async () => {
    await disconnectWallet();
  };

  const isConnected = wallet.isConnected && userData && isInitialized;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-white hover:bg-white/10 border border-white/20 relative"
        >
          <User size={20} />
          {/* Connection status indicator */}
          <Circle 
            size={8} 
            className={`absolute -top-1 -right-1 ${
              isConnected 
                ? "text-green-400 fill-green-400" 
                : "text-red-400 fill-red-400"
            }`} 
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 bg-black/90 backdrop-blur-lg border-white/20 text-white"
      >
        {/* Connection Status */}
        <div className="px-3 py-2 text-sm">
          <div className="flex items-center space-x-2">
            <Circle 
              size={8} 
              className={isConnected 
                ? "text-green-400 fill-green-400" 
                : "text-red-400 fill-red-400"
              } 
            />
            <span className="text-gray-300">
              {isConnected ? "Conectado" : "Desconectado"}
            </span>
          </div>
          {isConnected && userData && (
            <div className="mt-1 text-xs text-gray-400 truncate">
              {userData.name || "Usuario"}
            </div>
          )}
        </div>

        {isConnected && (
          <>
            <DropdownMenuSeparator className="bg-white/20" />
            
            <DropdownMenuItem asChild>
              <Link
                to="/profile"
                className="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-white/10"
              >
                <User size={16} />
                <span>Mi Perfil</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-white/20" />

            <DropdownMenuItem 
              onClick={handleDisconnect}
              className="flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-white/10 text-red-400"
            >
              <LogOut size={16} />
              <span>Desconectar</span>
            </DropdownMenuItem>
          </>
        )}

        {!isConnected && (
          <>
            <DropdownMenuSeparator className="bg-white/20" />
            <div className="px-3 py-2 text-sm text-gray-400">
              Conecta tu wallet para acceder a más funciones
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
