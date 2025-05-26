
import { useState } from "react";
import Hero from "@/components/Hero";
import WalletConnect from "@/components/WalletConnect";
import NFTGallery from "@/components/NFTGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useStarkNet } from "@/hooks/useStarkNet";

const Index = () => {
  const { wallet, userData } = useStarkNet();
  const isWalletConnected = wallet.isConnected && userData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <WalletConnect />
          <NFTGallery isWalletConnected={isWalletConnected} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
