
import { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";

interface NFT {
  id: number;
  name: string;
  athlete: string;
  sport: string;
  price: string;
  image: string;
  rarity: string;
  description: string;
}

interface NFTCardProps {
  nft: NFT;
  isWalletConnected: boolean;
}

const NFTCard = ({ nft, isWalletConnected }: NFTCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "from-yellow-400 to-orange-500";
      case "Epic": return "from-purple-400 to-pink-500";
      case "Rare": return "from-blue-400 to-cyan-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const handlePurchase = async () => {
    if (!isWalletConnected) {
      alert("Please connect your wallet first!");
      return;
    }

    setIsPurchasing(true);
    // Simulate purchase transaction
    setTimeout(() => {
      setIsPurchasing(false);
      alert(`Successfully purchased ${nft.name}!`);
    }, 3000);
  };

  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={nft.image} 
          alt={nft.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Rarity Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getRarityColor(nft.rarity)}`}>
          {nft.rarity}
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-200"
        >
          <Heart 
            size={18} 
            className={`${isLiked ? 'text-red-500 fill-current' : 'text-white'} transition-colors duration-200`}
          />
        </button>

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200">
            <Eye size={18} />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{nft.name}</h3>
          <p className="text-gray-400">{nft.athlete} • {nft.sport}</p>
          <p className="text-gray-500 text-sm mt-2">{nft.description}</p>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Price</p>
            <p className="text-xl font-bold text-white">{nft.price}</p>
          </div>
          
          <button
            onClick={handlePurchase}
            disabled={isPurchasing}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              isPurchasing
                ? 'bg-gray-500 cursor-not-allowed'
                : isWalletConnected
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isPurchasing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Buying...</span>
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                <span>Buy Now</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
