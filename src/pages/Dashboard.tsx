
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Image, Coins, Users } from "lucide-react";
import { useStarkNet } from "@/hooks/useStarkNet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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

const Dashboard = () => {
  const navigate = useNavigate();
  const { wallet, userData } = useStarkNet();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wallet.isConnected || !userData) {
      navigate('/');
      return;
    }
    fetchUserNFTs();
  }, [wallet.isConnected, userData, navigate]);

  const fetchUserNFTs = async () => {
    try {
      const { data, error } = await supabase
        .from('nfts')
        .select('*')
        .eq('user_id', userData.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setNfts(data || []);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!wallet.isConnected || !userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Manage your NFTs and track your collection</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total NFTs</p>
                <p className="text-2xl font-bold text-white">{nfts.length}</p>
              </div>
              <Image className="text-blue-400" size={24} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Minted NFTs</p>
                <p className="text-2xl font-bold text-white">{nfts.filter(nft => nft.is_minted).length}</p>
              </div>
              <Coins className="text-green-400" size={24} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Copies</p>
                <p className="text-2xl font-bold text-white">{nfts.reduce((sum, nft) => sum + nft.total_copies, 0)}</p>
              </div>
              <Users className="text-purple-400" size={24} />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <Button 
              onClick={() => navigate('/create-nft')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Plus className="mr-2" size={16} />
              Create NFT
            </Button>
          </div>
        </div>

        {/* NFTs Grid */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">My NFTs</h2>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading your NFTs...</p>
            </div>
          ) : nfts.length === 0 ? (
            <div className="text-center py-12">
              <Image className="text-gray-600 mx-auto mb-4" size={48} />
              <p className="text-gray-400 mb-4">You haven't created any NFTs yet</p>
              <Button 
                onClick={() => navigate('/create-nft')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Create Your First NFT
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nfts.map((nft) => (
                <div key={nft.id} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all">
                  {nft.media_url && (
                    <img 
                      src={nft.media_url} 
                      alt={nft.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-white font-semibold text-lg mb-2">{nft.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{nft.description}</p>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      nft.rarity === 'legendary' ? 'bg-yellow-500/20 text-yellow-400' :
                      nft.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                      nft.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {nft.rarity}
                    </span>
                    <span className="text-green-400 font-semibold">${nft.price}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Copies: {nft.minted_copies}/{nft.total_copies}</span>
                    <span className={nft.is_minted ? 'text-green-400' : 'text-yellow-400'}>
                      {nft.is_minted ? 'Minted' : 'Draft'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
