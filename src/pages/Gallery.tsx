
import { useState } from "react";
import { useStarkNet } from "@/hooks/useStarkNet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTGallery from "@/components/NFTGallery";
import MyCollections from "@/components/MyCollections";
import FeaturedNFTs from "@/components/FeaturedNFTs";

const Gallery = () => {
  const { wallet, userData, isInitialized } = useStarkNet();
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">NFT Gallery</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore and collect exclusive digital moments from the world's greatest athletes
          </p>
        </div>

        {/* Featured NFTs Section */}
        <FeaturedNFTs isWalletConnected={wallet.isConnected && !!userData} />

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "featured"
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              All NFTs
            </button>
            {wallet.isConnected && userData && (
              <button
                onClick={() => setActiveTab("collections")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ml-2 ${
                  activeTab === "collections"
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                My Collections
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        {activeTab === "featured" ? (
          <NFTGallery isWalletConnected={wallet.isConnected && !!userData} />
        ) : (
          <MyCollections />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
