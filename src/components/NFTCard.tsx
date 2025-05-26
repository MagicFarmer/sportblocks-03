
import { useState } from "react";
import { Heart, ShoppingCart, Eye, X, Calendar, Trophy, Target, Users, MapPin, Star } from "lucide-react";
import { formatPrice, convertEthToStrk } from "@/utils/priceUtils";

interface NFT {
  id: number;
  name: string;
  athlete: string;
  sport: string;
  event?: string;
  country?: string;
  price: string;
  image: string;
  rarity: string;
  description: string;
  date?: string;
  edition?: string;
  totalSupply?: number;
  minted?: number;
  attributes?: {
    category: string;
    achievement: string;
    location: string;
    season: string;
  };
}

interface NFTCardProps {
  nft: NFT;
  isWalletConnected: boolean;
}

const NFTCard = ({ nft, isWalletConnected }: NFTCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "from-amber-400 to-yellow-500";
      case "Epic": return "from-purple-400 to-pink-500";
      case "Rare": return "from-blue-400 to-cyan-500";
      case "Common": return "from-gray-400 to-gray-500";
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
      alert(`${nft.name} purchased successfully!`);
    }, 3000);
  };

  // Convert ETH price to STRK
  const strkPrice = convertEthToStrk(nft.price);
  const priceInfo = formatPrice(strkPrice);

  return (
    <>
      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={nft.image} 
            alt={nft.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Rarity Badge */}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${getRarityColor(nft.rarity)} shadow-lg`}>
            {nft.rarity}
          </div>

          {/* Edition Badge */}
          {nft.edition && (
            <div className="absolute top-4 right-16 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium">
              {nft.edition}
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-lg"
          >
            <Heart 
              size={20} 
              className={`${isLiked ? 'text-red-500 fill-current' : 'text-gray-600'} transition-colors duration-200`}
            />
          </button>

          {/* View Details Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button 
              onClick={() => setShowDetails(true)}
              className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
            >
              <Eye size={20} />
              <span className="font-medium">View Details</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{nft.name}</h3>
            <p className="text-gray-600 font-medium">{nft.athlete} • {nft.sport}</p>
            {nft.event && (
              <div className="flex items-center mt-1 text-gray-500 text-sm">
                <Star size={14} className="mr-1" />
                <span>{nft.event}</span>
              </div>
            )}
            {nft.country && (
              <div className="flex items-center mt-1 text-gray-500 text-sm">
                <MapPin size={14} className="mr-1" />
                <span>{nft.country}</span>
              </div>
            )}
            {nft.date && (
              <p className="text-gray-500 text-sm mt-1">{nft.date}</p>
            )}
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{nft.description}</p>
          </div>

          {/* Supply Info */}
          {nft.totalSupply && (
            <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-gray-500" />
                <span className="text-sm text-gray-600">Supply</span>
              </div>
              <span className="text-sm font-medium text-gray-900">
                {nft.minted || 0}/{nft.totalSupply}
              </span>
            </div>
          )}

          {/* Price and Actions */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Price</p>
              <p className="text-lg font-bold text-slate-900">{priceInfo.strk}</p>
              <p className="text-sm text-gray-500">{priceInfo.usd}</p>
            </div>
            
            <button
              onClick={handlePurchase}
              disabled={isPurchasing}
              className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                isPurchasing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : isWalletConnected
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isPurchasing ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  <span>Purchasing...</span>
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

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img 
                src={nft.image} 
                alt={nft.name}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200"
              >
                <X size={20} className="text-gray-600" />
              </button>
              <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${getRarityColor(nft.rarity)} shadow-lg`}>
                {nft.rarity}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{nft.name}</h2>
                <p className="text-xl text-gray-600 font-medium">{nft.athlete} • {nft.sport}</p>
                {nft.event && (
                  <div className="flex items-center mt-2 text-gray-500">
                    <Star size={16} className="mr-2" />
                    <span>{nft.event}</span>
                  </div>
                )}
                {nft.country && (
                  <div className="flex items-center mt-2 text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{nft.country}</span>
                  </div>
                )}
                {nft.date && (
                  <div className="flex items-center mt-2 text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{nft.date}</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{nft.description}</p>
              </div>

              {/* Attributes */}
              {nft.attributes && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Attributes</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Trophy size={16} className="text-amber-500 mr-2" />
                        <span className="text-sm font-medium text-gray-500">Category</span>
                      </div>
                      <p className="font-medium text-gray-900">{nft.attributes.category}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Target size={16} className="text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-gray-500">Achievement</span>
                      </div>
                      <p className="font-medium text-gray-900">{nft.attributes.achievement}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-gray-500">Location</span>
                      </div>
                      <p className="font-medium text-gray-900">{nft.attributes.location}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-gray-500">Season</span>
                      </div>
                      <p className="font-medium text-gray-900">{nft.attributes.season}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Supply Info */}
              {nft.totalSupply && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Supply Information</h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Users size={20} className="text-gray-500" />
                      <span className="font-medium text-gray-700">Total Supply</span>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {nft.minted || 0}/{nft.totalSupply}
                    </span>
                  </div>
                </div>
              )}

              {/* Price and Purchase */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 font-medium">Current Price</p>
                    <p className="text-2xl font-bold text-slate-900">{priceInfo.strk}</p>
                    <p className="text-gray-500">{priceInfo.usd}</p>
                  </div>
                  
                  <button
                    onClick={handlePurchase}
                    disabled={isPurchasing}
                    className={`flex items-center space-x-3 px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      isPurchasing
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isWalletConnected
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isPurchasing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                        <span>Purchasing...</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={20} />
                        <span>Buy Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NFTCard;
