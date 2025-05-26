
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut, Circle, LayoutDashboard, Plus } from "lucide-react";
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
          variant="outline" 
          size="icon"
          className="text-slate-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 w-12 h-12 relative"
        >
          <User size={20} />
          {/* Connection status indicator */}
          <Circle 
            size={8} 
            className={`absolute -top-1 -right-1 ${
              isConnected 
                ? "text-green-500 fill-green-500" 
                : "text-red-500 fill-red-500"
            }`} 
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-72 bg-white border-gray-200 shadow-xl rounded-lg p-2"
      >
        {/* Connection Status */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <Circle 
              size={10} 
              className={isConnected 
                ? "text-green-500 fill-green-500" 
                : "text-red-500 fill-red-500"
              } 
            />
            <div>
              <div className="font-semibold text-slate-900">
                {isConnected ? "Connected" : "Disconnected"}
              </div>
              {isConnected && userData && (
                <div className="text-sm text-gray-600 truncate">
                  {userData.name || "User"}
                </div>
              )}
            </div>
          </div>
        </div>

        {isConnected && (
          <>
            <DropdownMenuItem asChild>
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
              >
                <LayoutDashboard size={18} />
                <span className="font-medium">Dashboard</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/create-nft"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
              >
                <Plus size={18} />
                <span className="font-medium">Create NFT</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/profile"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
              >
                <User size={18} />
                <span className="font-medium">My Profile</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-gray-200 my-1" />

            <DropdownMenuItem 
              onClick={handleDisconnect}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-red-50 text-red-600 transition-all duration-200"
            >
              <LogOut size={18} />
              <span className="font-medium">Disconnect</span>
            </DropdownMenuItem>
          </>
        )}

        {!isConnected && (
          <div className="px-4 py-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              Connect your wallet to access all SportBlocks features
            </p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
