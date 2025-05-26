
import { useState } from "react";
import { ShoppingCart, Heart, Eye, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useStarkNet } from "@/hooks/useStarkNet";
import { MarketplaceNFT } from "@/hooks/useMarketplace";
import { purchaseNFTFromContract } from "@/utils/nftUtils";
import { Account } from 'starknet';

interface MarketplaceNFTCardProps {
  nft: MarketplaceNFT;
  onPurchaseSuccess: () => void;
}

const MarketplaceNFTCard = ({ nft, onPurchaseSuccess }: MarketplaceNFTCardProps) => {
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { wallet, userData } = useStarkNet();
  const { toast } = useToast();

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "legendary": return "from-yellow-400 to-orange-500";
      case "epic": return "from-purple-400 to-pink-500";
      case "rare": return "from-blue-400 to-cyan-500";
      case "common": return "from-gray-400 to-gray-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "legendary": return "Legendaria";
      case "epic": return "Épica";
      case "rare": return "Rara";
      case "common": return "Común";
      default: return rarity;
    }
  };

  const handlePurchase = async () => {
    if (!wallet.isConnected || !userData) {
      toast({
        title: "Wallet no conectada",
        description: "Por favor conecta tu wallet para comprar NFTs",
        variant: "destructive"
      });
      return;
    }

    if (!wallet.account) {
      toast({
        title: "Account no disponible",
        description: "Por favor reconecta tu wallet",
        variant: "destructive"
      });
      return;
    }

    if (!nft.is_minted || nft.minted_copies <= 0) {
      toast({
        title: "NFT no disponible",
        description: "Este NFT no está disponible para compra",
        variant: "destructive"
      });
      return;
    }

    setIsPurchasing(true);

    try {
      console.log('Purchasing NFT from blockchain:', {
        nft: nft,
        buyerWallet: wallet.address
      });

      // Purchase NFT from StarkNet contract
      const userAccount = wallet.account as Account;
      const txHash = await purchaseNFTFromContract(
        nft,
        1, // Amount to purchase
        userAccount,
        wallet.address || ''
      );

      console.log('Purchase completed with tx hash:', txHash);

      toast({
        title: "¡Compra Exitosa!",
        description: `Has comprado "${nft.name}" por $${nft.price} USD`,
      });

      onPurchaseSuccess();

    } catch (error: any) {
      console.error('Purchase error:', error);
      toast({
        title: "Error en la Compra",
        description: error.message || "No se pudo completar la compra",
        variant: "destructive"
      });
    } finally {
      setIsPurchasing(false);
    }
  };

  const remainingCopies = nft.minted_copies;
  const isAvailable = remainingCopies > 0 && nft.is_minted;

  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={nft.media_url || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"} 
          alt={nft.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Rarity Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getRarityColor(nft.rarity)}`}>
          {getRarityLabel(nft.rarity)}
        </div>

        {/* Country Flag */}
        <div className="absolute top-4 right-12 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md">
          <div className="flex items-center space-x-1">
            <Flag size={14} className="text-white" />
            <span className="text-xs text-white">{nft.user.country}</span>
          </div>
        </div>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-200"
        >
          <Heart 
            size={16} 
            className={`${isLiked ? 'text-red-500 fill-current' : 'text-white'} transition-colors duration-200`}
          />
        </button>

        {/* Availability Overlay */}
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <div className="text-white text-center">
              <p className="text-xl font-bold">AGOTADO</p>
            </div>
          </div>
        )}

        {/* View Details Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200">
            <Eye size={18} />
            <span>Ver Detalles</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{nft.name}</h3>
          <p className="text-blue-400 font-medium">{nft.user.name}</p>
          <p className="text-gray-400 text-sm">{nft.user.sport}</p>
          {nft.description && (
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">{nft.description}</p>
          )}
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          <span>Disponibles: {remainingCopies}</span>
          <span>Total: {nft.total_copies}</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Precio</p>
            <p className="text-xl font-bold text-white">${nft.price} USD</p>
          </div>
          
          <Button
            onClick={handlePurchase}
            disabled={isPurchasing || !isAvailable || !wallet.isConnected}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              isPurchasing
                ? 'bg-gray-500 cursor-not-allowed'
                : !isAvailable
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : wallet.isConnected
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isPurchasing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Comprando...</span>
              </>
            ) : !isAvailable ? (
              <span>Agotado</span>
            ) : !wallet.isConnected ? (
              <span>Conectar Wallet</span>
            ) : (
              <>
                <ShoppingCart size={18} />
                <span>Comprar</span>
              </>
            )}
          </Button>
        </div>

        {/* Beneficiary Project */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400">Beneficia a:</p>
          <p className="text-sm text-blue-300">{nft.beneficiary_project}</p>
        </div>

        {/* Blockchain Info */}
        {nft.contract_address && nft.token_id && (
          <div className="mt-2 pt-2 border-t border-white/10">
            <p className="text-xs text-gray-400">Token ID: {nft.token_id}</p>
            <p className="text-xs text-gray-400 truncate">Contrato: {nft.contract_address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceNFTCard;
