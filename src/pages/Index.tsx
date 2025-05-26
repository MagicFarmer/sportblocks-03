
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WalletConnect />
      <NFTGallery isWalletConnected={isWalletConnected} />
      <Footer />
    </div>
  );
};

export default Index;
