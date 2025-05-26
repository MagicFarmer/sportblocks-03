
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogIn, LogOut, Settings, UserPlus, Languages, Focus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useStarkNet } from "@/hooks/useStarkNet";
import { useFocusMode } from "@/contexts/FocusMode";

const UserMenu = () => {
  const navigate = useNavigate();
  const { wallet, userData, isInitialized, connectWallet, disconnectWallet } = useStarkNet();
  const { isFocusMode, toggleFocusMode } = useFocusMode();
  
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTranslateClick = () => {
    // Scroll to bottom anchor
    const bottomElement = document.getElementById('_bottom');
    if (bottomElement) {
      bottomElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isInitialized) {
    return (
      <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="text-slate-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 w-12 h-12 rounded-full overflow-hidden"
        >
          {wallet.isConnected && userData ? (
            <Avatar className="w-full h-full">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">
                {userData.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ) : (
            <User size={20} />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-white border-gray-200 shadow-xl rounded-lg p-2"
      >
        {wallet.isConnected && userData ? (
          <>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userData.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userData.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link
                to="/profile"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <User size={16} />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                to="/dashboard"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <Settings size={16} />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                to="/my-collections"
                onClick={handleLinkClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <User size={16} />
                <span>My Collections</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                onClick={toggleFocusMode}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 w-full text-left ${
                  isFocusMode ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                <Focus size={16} />
                <span>{isFocusMode ? 'Exit Focus Mode' : 'Focus Mode'}</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={handleTranslateClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 w-full text-left"
              >
                <Languages size={16} />
                <span>Translate Website</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                onClick={disconnectWallet}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-red-600 w-full text-left"
              >
                <LogOut size={16} />
                <span>Disconnect Wallet</span>
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel>Get Started</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <button
                onClick={connectWallet}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 w-full text-left"
              >
                <LogIn size={16} />
                <span>Connect Wallet</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button
                onClick={toggleFocusMode}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 w-full text-left ${
                  isFocusMode ? 'text-amber-600' : 'text-gray-700'
                }`}
              >
                <Focus size={16} />
                <span>{isFocusMode ? 'Exit Focus Mode' : 'Focus Mode'}</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button
                onClick={handleTranslateClick}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 w-full text-left"
              >
                <Languages size={16} />
                <span>Translate Website</span>
              </button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
