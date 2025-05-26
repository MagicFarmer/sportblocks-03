
import { Image, Coins, Users, Calendar } from "lucide-react";

interface NFT {
  id: string;
  name: string;
  description: string;
  media_url: string;
  rarity: string;
  price: number;
  total_copies: number;
  minted_copies: number;
  is_minted: boolean;
  created_at: string;
}

interface UserNFTHistoryProps {
  nfts: NFT[];
}

const UserNFTHistory = ({ nfts }: UserNFTHistoryProps) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">Mis NFTs Creados</h3>
      
      {nfts.length === 0 ? (
        <div className="text-center py-12">
          <Image className="text-gray-600 mx-auto mb-4" size={48} />
          <p className="text-gray-400 mb-4">No has creado ningún NFT aún</p>
        </div>
      ) : (
        <div className="space-y-4">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all">
              <div className="flex gap-4">
                {nft.media_url && (
                  <img 
                    src={nft.media_url} 
                    alt={nft.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg mb-2">{nft.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{nft.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Coins className="text-green-400" size={16} />
                      <span className="text-green-400">${nft.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Users className="text-blue-400" size={16} />
                      <span className="text-white">{nft.minted_copies}/{nft.total_copies}</span>
                    </div>
                    
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      nft.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      nft.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                      nft.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {nft.rarity}
                    </span>
                    
                    <span className={`px-2 py-1 rounded text-xs ${nft.is_minted ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {nft.is_minted ? 'Minteado' : 'Draft'}
                    </span>
                    
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar size={16} />
                      <span>{new Date(nft.created_at).toLocaleDateString()}</span>
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

export default UserNFTHistory;
