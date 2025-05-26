
import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut, Circle, LayoutDashboard, Plus, Wallet, Focus, Image, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useStarkNet } from "@/hooks/useStarkNet";
import { useFocusMode } from "@/contexts/FocusMode";

const UserMenu = () => {
  const { wallet, userData, isInitialized, connectWallet, disconnectWallet } = useStarkNet();
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  const handleConnect = async () => {
    await connectWallet();
  };

  const handleDisconnect = async () => {
    await disconnectWallet();
  };

  const handleTranslate = () => {
    // Initialize Google Translate
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    // Define the callback function
    (window as any).googleTranslateElementInit = function() {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,pt,fr,de,it,zh,ja,ko,ar',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL
      }, 'google_translate_element');
    };

    // Create the translate element if it doesn't exist
    if (!document.getElementById('google_translate_element')) {
      const translateDiv = document.createElement('div');
      translateDiv.id = 'google_translate_element';
      translateDiv.style.position = 'fixed';
      translateDiv.style.top = '100px';
      translateDiv.style.right = '20px';
      translateDiv.style.zIndex = '9999';
      translateDiv.style.backgroundColor = 'white';
      translateDiv.style.padding = '10px';
      translateDiv.style.borderRadius = '8px';
      translateDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      document.body.appendChild(translateDiv);
    }
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

        {/* Focus Mode Toggle */}
        <DropdownMenuItem 
          onClick={toggleFocusMode}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
        >
          <Focus size={18} />
          <span className="font-medium">
            {isFocusMode ? "Exit Focus Mode" : "Focus Mode"}
          </span>
          <div className={`ml-auto w-2 h-2 rounded-full ${isFocusMode ? "bg-green-500" : "bg-gray-300"}`} />
        </DropdownMenuItem>

        {/* Google Translate */}
        <DropdownMenuItem 
          onClick={handleTranslate}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
        >
          <Languages size={18} />
          <span className="font-medium">Translate Page</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-200 my-1" />

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
                to="/my-collections"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-50 text-slate-700 transition-all duration-200"
              >
                <Image size={18} />
                <span className="font-medium">My Collections</span>
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
          <>
            <DropdownMenuItem 
              onClick={handleConnect}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-50 text-blue-600 transition-all duration-200"
            >
              <Wallet size={18} />
              <span className="font-medium">Connect Wallet</span>
            </DropdownMenuItem>
            
            <div className="px-4 py-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect your wallet to access all SportBlocks features
              </p>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
