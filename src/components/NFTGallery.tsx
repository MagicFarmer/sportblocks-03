
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NFTCard from "./NFTCard";
import { Button } from "./ui/button";
import { Store } from "lucide-react";

interface NFTGalleryProps {
  isWalletConnected: boolean;
}

const NFTGallery = ({ isWalletConnected }: NFTGalleryProps) => {
  const [selectedSport, setSelectedSport] = useState("All");
  const navigate = useNavigate();

  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball"];

  const mockNFTs = [
    {
      id: 1,
      name: "Messi's Golden Goal",
      athlete: "Lionel Messi",
      sport: "Soccer",
      price: "0.5 ETH",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
      rarity: "Legendary",
      description: "Historic goal from the 2022 World Cup Final that sealed Argentina's victory",
      date: "December 18, 2022",
      edition: "1 of 100",
      totalSupply: 100,
      minted: 87,
      attributes: {
        category: "Goal Moment",
        achievement: "World Cup Final",
        location: "Lusail Stadium, Qatar",
        season: "2022-23"
      }
    },
    {
      id: 2,
      name: "LeBron's Championship Dunk",
      athlete: "LeBron James",
      sport: "Basketball",
      price: "0.3 ETH",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rarity: "Epic",
      description: "Iconic slam dunk from the NBA Finals that energized the crowd",
      date: "June 12, 2023",
      edition: "1 of 250",
      totalSupply: 250,
      minted: 203,
      attributes: {
        category: "Dunk Highlight",
        achievement: "NBA Finals Game 5",
        location: "Crypto.com Arena",
        season: "2022-23"
      }
    },
    {
      id: 3,
      name: "Serena's Match Point Ace",
      athlete: "Serena Williams",
      sport: "Tennis",
      price: "0.4 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Rare",
      description: "Match-winning ace that secured her 23rd Grand Slam title at Wimbledon",
      date: "July 15, 2023",
      edition: "1 of 150",
      totalSupply: 150,
      minted: 134,
      attributes: {
        category: "Serve Moment",
        achievement: "Wimbledon Final",
        location: "Centre Court, Wimbledon",
        season: "2023"
      }
    },
    {
      id: 4,
      name: "Brady's Record Touchdown",
      athlete: "Tom Brady",
      sport: "Football",
      price: "0.6 ETH",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400",
      rarity: "Legendary",
      description: "Super Bowl winning touchdown pass that broke multiple NFL records",
      date: "February 12, 2023",
      edition: "1 of 50",
      totalSupply: 50,
      minted: 48,
      attributes: {
        category: "Touchdown Pass",
        achievement: "Super Bowl LVII",
        location: "State Farm Stadium",
        season: "2022-23"
      }
    },
    {
      id: 5,
      name: "Curry's Logo Three",
      athlete: "Stephen Curry",
      sport: "Basketball",
      price: "0.35 ETH",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400",
      rarity: "Epic",
      description: "Record-breaking three-point shot from the logo that became legendary",
      date: "April 3, 2023",
      edition: "1 of 200",
      totalSupply: 200,
      minted: 156,
      attributes: {
        category: "Three-Point Shot",
        achievement: "NBA Regular Season",
        location: "Chase Center",
        season: "2022-23"
      }
    },
    {
      id: 6,
      name: "Ronaldo's Bicycle Kick",
      athlete: "Cristiano Ronaldo",
      sport: "Soccer",
      price: "0.7 ETH",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400",
      rarity: "Legendary",
      description: "Spectacular bicycle kick goal that defied physics and amazed the world",
      date: "March 25, 2023",
      edition: "1 of 75",
      totalSupply: 75,
      minted: 71,
      attributes: {
        category: "Bicycle Kick",
        achievement: "Champions League",
        location: "Old Trafford",
        season: "2022-23"
      }
    }
  ];

  const filteredNFTs = selectedSport === "All" 
    ? mockNFTs 
    : mockNFTs.filter(nft => nft.sport === selectedSport);

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
          
          {/* Call to Action for Real Marketplace */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-blue-400/30 mb-6 sm:mb-8 mx-4 sm:mx-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Marketplace Available!</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Buy real NFTs created by verified athletes on our platform
            </p>
            <Button
              onClick={() => navigate('/marketplace')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
            >
              <Store className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Go to Real Marketplace
            </Button>
          </div>
        </div>

        {/* Sport Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base ${
                selectedSport === sport
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

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
            <p className="text-gray-400 text-base sm:text-lg">No NFTs found for {selectedSport}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NFTGallery;
