import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AlbumHeader from '@/components/Gallery/AlbumHeader';
import FilterButtons from '@/components/Gallery/FilterButtons';
import MarketplaceBanner from '@/components/Gallery/MarketplaceBanner';
import NFTGallery from '@/components/NFTGallery';
import { useStarkNet } from '@/hooks/useStarkNet';
import PunchLines from '@/components/PunchLines';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const { wallet } = useStarkNet();
  const isWalletConnected = wallet.isConnected;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <AlbumHeader />
        
        {/* Punch Lines */}
        <div className="mb-8">
          <PunchLines style="subtle" className="mx-auto max-w-3xl" />
        </div>
        
        <FilterButtons 
          currentCategory={currentCategory} 
          setCurrentCategory={setCurrentCategory} 
        />
        <MarketplaceBanner />
        <NFTGallery 
          searchTerm={searchTerm}
          currentCategory={currentCategory}
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
