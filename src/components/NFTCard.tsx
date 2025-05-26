
import { useState } from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { formatPrice, convertEthToStrk } from "@/utils/priceUtils";

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
      case "Legendary": return "from-amber-400 to-yellow-500";
      case "Epic": return "from-purple-400 to-pink-500";
      case "Rare": return "from-blue-400 to-cyan-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const handlePurchase = async () => {
    if (!isWalletConnected) {
      alert("¡Por favor conecta tu wallet primero!");
      return;
    }

    setIsPurchasing(true);
    // Simulate purchase transaction
    setTimeout(() => {
      setIsPurchasing(false);
      alert(`¡${nft.name} comprado exitosamente!`);
    }, 3000);
  };

  // Convert ETH price to STRK
  const strkPrice = convertEthToStrk(nft.price);
  const priceInfo = formatPrice(strkPrice);

  return (
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
          {nft.rarity === "Legendary" ? "Legendario" : 
           nft.rarity === "Epic" ? "Épico" : 
           nft.rarity === "Rare" ? "Raro" : nft.rarity}
        </div>

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
          <button className="flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200">
            <Eye size={20} />
            <span className="font-medium">Ver Detalles</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{nft.name}</h3>
          <p className="text-gray-600 font-medium">{nft.athlete} • {nft.sport}</p>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">{nft.description}</p>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">Precio</p>
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
                <span>Comprando...</span>
              </>
            ) : (
              <>
                <ShoppingCart size={18} />
                <span>Comprar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
