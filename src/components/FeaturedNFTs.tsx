
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Eye, ArrowRight } from "lucide-react";
import NFTCard from "./NFTCard";
import { mockNFTs } from "../data/mockNFTs";

interface FeaturedNFTsProps {
  isWalletConnected: boolean;
}

const FeaturedNFTs = ({ isWalletConnected }: FeaturedNFTsProps) => {
  const navigate = useNavigate();

  // Get first 3 NFTs to ensure consistency
  const featuredNFTs = useMemo(() => {
    return mockNFTs.slice(0, 3);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Sports NFTs
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
            Discover exclusive digital moments from legendary athletes
          </p>
        </div>

        {/* Featured NFTs Grid - 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 mb-12 max-w-6xl mx-auto">
          {featuredNFTs.map((nft) => (
            <NFTCard 
              key={nft.id} 
              nft={nft} 
              isWalletConnected={isWalletConnected}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-400/30 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Explore Our Complete Collection
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Browse through hundreds of exclusive sports NFTs with advanced filtering options. 
              Find NFTs by sport, event, country, and rarity level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/marketplace')}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base"
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Marketplace
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-4 text-gray-400 text-sm">
              <span className="mr-2">🎯</span>
              <span>{mockNFTs.length}+ NFTs available</span>
              <span className="mx-2">•</span>
              <span>Filter by sport, event & rarity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNFTs;
