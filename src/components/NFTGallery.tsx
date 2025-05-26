
import { useState } from "react";
import NFTCard from "./NFTCard";

interface NFTGalleryProps {
  isWalletConnected: boolean;
}

const NFTGallery = ({ isWalletConnected }: NFTGalleryProps) => {
  const [selectedSport, setSelectedSport] = useState("All");

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
      description: "Historic goal from the 2022 World Cup Final"
    },
    {
      id: 2,
      name: "LeBron's Dunk",
      athlete: "LeBron James",
      sport: "Basketball",
      price: "0.3 ETH",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rarity: "Epic",
      description: "Iconic slam dunk from the playoffs"
    },
    {
      id: 3,
      name: "Serena's Ace",
      athlete: "Serena Williams",
      sport: "Tennis",
      price: "0.4 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Rare",
      description: "Match-winning ace at Wimbledon"
    },
    {
      id: 4,
      name: "Brady's Touchdown",
      athlete: "Tom Brady",
      sport: "Football",
      price: "0.6 ETH",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400",
      rarity: "Legendary",
      description: "Super Bowl winning touchdown pass"
    },
    {
      id: 5,
      name: "Curry's Three-Pointer",
      athlete: "Stephen Curry",
      sport: "Basketball",
      price: "0.35 ETH",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400",
      rarity: "Epic",
      description: "Record-breaking three-point shot"
    },
    {
      id: 6,
      name: "Ronaldo's Bicycle Kick",
      athlete: "Cristiano Ronaldo",
      sport: "Soccer",
      price: "0.7 ETH",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400",
      rarity: "Legendary",
      description: "Spectacular bicycle kick goal"
    }
  ];

  const filteredNFTs = selectedSport === "All" 
    ? mockNFTs 
    : mockNFTs.filter(nft => nft.sport === selectedSport);

  return (
    <section id="gallery" className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Sports NFTs
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover and collect exclusive digital moments from the world's greatest athletes
          </p>
        </div>

        {/* Sport Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-gray-400 text-lg">No NFTs found for {selectedSport}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NFTGallery;
