
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AlbumHeader from '@/components/Gallery/AlbumHeader';
import FilterButtons from '@/components/Gallery/FilterButtons';
import MarketplaceBanner from '@/components/Gallery/MarketplaceBanner';
import NFTGallery from '@/components/NFTGallery';
import { useStarkNet } from '@/hooks/useStarkNet';
import PunchLines from '@/components/PunchLines';
import { Trophy } from 'lucide-react';

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState('All');
  const { wallet } = useStarkNet();
  const isWalletConnected = wallet.isConnected;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-2xl mr-4">
              <Trophy className="text-white w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Athletes NFT Collection</h1>
              <p className="text-2xl text-blue-300 font-semibold">Exclusive Digital Sports Moments</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover and collect rare digital moments from your favorite athletes. Each NFT represents a unique piece of sports history.
          </p>

          {/* Punch Lines */}
          <div className="mt-8">
            <PunchLines style="highlight" className="text-white" />
          </div>
        </div>
        
        <FilterButtons 
          currentCategory={currentCategory} 
          setCurrentCategory={setCurrentCategory} 
        />
        <MarketplaceBanner />
        <NFTGallery 
          isWalletConnected={isWalletConnected}
        />
      </div>
      
      {/* Punch Lines Banner */}
      <div className="my-12">
        <PunchLines style="banner" />
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;
