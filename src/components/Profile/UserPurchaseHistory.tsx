
import { ShoppingBag, Calendar, Coins } from "lucide-react";

interface Purchase {
  id: string;
  purchase_price: number;
  purchased_at: string;
  quantity: number;
  nfts: {
    id: string;
    name: string;
    description: string;
    media_url: string;
    rarity: string;
    price: number;
  };
}

interface UserPurchaseHistoryProps {
  purchases: Purchase[];
}

const UserPurchaseHistory = ({ purchases }: UserPurchaseHistoryProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">Mis Compras de NFTs</h3>
      
      {purchases.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="text-gray-600 mx-auto mb-4" size={48} />
          <p className="text-gray-400 mb-4">No has comprado ningún NFT aún</p>
        </div>
      ) : (
        <div className="space-y-4">
          {purchases.map((purchase) => (
            <div key={purchase.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex gap-4">
                {purchase.nfts.media_url && (
                  <img 
                    src={purchase.nfts.media_url} 
                    alt={purchase.nfts.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg mb-2">{purchase.nfts.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{purchase.nfts.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Coins className="text-green-400" size={16} />
                      <span className="text-green-400">${purchase.purchase_price}</span>
                    </div>
                    
                    <span className="text-white">Cantidad: {purchase.quantity}</span>
                    
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      purchase.nfts.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      purchase.nfts.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                      purchase.nfts.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {purchase.nfts.rarity}
                    </span>
                    
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar size={16} />
                      <span>{new Date(purchase.purchased_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPurchaseHistory;
