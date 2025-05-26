
import { useState } from "react";
import NFTCard from "./NFTCard";
import FilterButtons from "./Gallery/FilterButtons";
import AlbumHeader from "./Gallery/AlbumHeader";
import MarketplaceBanner from "./Gallery/MarketplaceBanner";
import { mockNFTs } from "../data/mockNFTs";
import { generateAlbumName, filterNFTs } from "../utils/galleryUtils";

interface NFTGalleryProps {
  isWalletConnected: boolean;
}

const NFTGallery = ({ isWalletConnected }: NFTGalleryProps) => {
  const [filters, setFilters] = useState({
    sport: "All",
    event: "All", 
    country: "All",
    rarity: "All"
  });

  // Filter NFTs based on selected filters
  const filteredNFTs = filterNFTs(mockNFTs, filters);

  // Generate dynamic album name based on active filters
  const albumName = generateAlbumName(filters);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      sport: "All",
      event: "All",
      country: "All",
      rarity: "All"
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== "All");

  return (
    <section id="gallery" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Sports NFTs
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4">
            Discover and collect exclusive digital moments from the world's greatest athletes
          </p>
          
          <MarketplaceBanner />
        </div>

        <AlbumHeader albumName={albumName} nftCount={filteredNFTs.length} />

        <FilterButtons
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearAllFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {filteredNFTs.map((nft) => (
            <NFTCard 
              key={nft.id} 
              nft={nft} 
              isWalletConnected={isWalletConnected}
            />
          ))}
        </div>

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-base sm:text-lg mb-4">
              No NFTs found for the selected filters
            </p>
            <button
              onClick={clearAllFilters}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Clear all filters to show all NFTs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NFTGallery;
