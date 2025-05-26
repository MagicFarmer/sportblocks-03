
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
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Dark gradient background */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Hero />
      </div>
      
      {/* Wallet Connect Section - Light blue gradient */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-16">
        <WalletConnect />
      </div>
      
      {/* NFT Gallery Section - Dark blue to purple gradient */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900">
        <NFTGallery isWalletConnected={isWalletConnected} />
      </div>
      
      {/* Footer Section - Dark gradient */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
