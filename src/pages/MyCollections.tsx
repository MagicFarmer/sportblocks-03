
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStarkNet } from "@/hooks/useStarkNet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTCard from "@/components/NFTCard";
import { Package, Coins, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Purchase {
  id: string;
  nft_id: string;
  amount_paid: number;
  timestamp: string;
  nfts: {
    id: string;
    name: string;
    description: string;
    media_url: string;
    rarity: string;
    price: number;
    athlete?: string;
    sport?: string;
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
  };
}

const MyCollections = () => {
  const navigate = useNavigate();
  const { wallet, userData, isInitialized } = useStarkNet();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball"];
  const rarities = ["All", "common", "rare", "epic", "legendary"];

  useEffect(() => {
    if (!isInitialized) return;
    
    if (!wallet.isConnected || !userData) {
      navigate('/');
      return;
    }
    
    fetchUserPurchases();
  }, [wallet.isConnected, userData, isInitialized, navigate]);

  const fetchUserPurchases = async () => {
    if (!userData?.id) return;

    try {
      const { data, error } = await supabase
        .from('purchases')
        .select(`
          id,
          nft_id,
          amount_paid,
          timestamp,
          nfts (
            id,
            name,
            description,
            media_url,
            rarity,
            price
          )
        `)
        .eq('buyer_wallet', wallet.address)
        .order('timestamp', { ascending: false });

      if (error) {
        console.error('Error fetching purchases:', error);
        return;
      }

      // Transform the data to match NFTCard interface
      const transformedPurchases = data?.map(purchase => ({
        ...purchase,
        nfts: {
          ...purchase.nfts,
          athlete: "Professional Athlete",
          sport: sports[Math.floor(Math.random() * (sports.length - 1)) + 1],
          date: new Date(purchase.timestamp).toLocaleDateString(),
          edition: "Limited Edition",
          totalSupply: 100,
          minted: Math.floor(Math.random() * 100) + 1,
          attributes: {
            category: "Sports Moment",
            achievement: "Professional Achievement",
            location: "Sports Arena",
            season: "2023-24"
          }
        }
      })) || [];

      setPurchases(transformedPurchases);
    } catch (error) {
      console.error('Error fetching user purchases:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter purchases by sport and rarity
  const filteredPurchases = purchases.filter(purchase => {
    const sportMatch = selectedSport === "All" || purchase.nfts.sport === selectedSport;
    const rarityMatch = selectedRarity === "All" || purchase.nfts.rarity === selectedRarity;
    return sportMatch && rarityMatch;
  });

  // Transform purchases to NFT format for NFTCard
  const nftsFromPurchases = filteredPurchases.map(purchase => ({
    id: parseInt(purchase.nfts.id),
    name: purchase.nfts.name,
    athlete: purchase.nfts.athlete || "Unknown Athlete",
    sport: purchase.nfts.sport || "Sports",
    price: `${purchase.nfts.price} STRK`,
    image: purchase.nfts.media_url || "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    rarity: purchase.nfts.rarity,
    description: purchase.nfts.description,
    date: purchase.nfts.date,
    edition: purchase.nfts.edition,
    totalSupply: purchase.nfts.totalSupply,
    minted: purchase.nfts.minted,
    attributes: purchase.nfts.attributes
  }));

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navbar />
        <div className="container mx-auto px-6 py-12">
          <div className="text-center py-12">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-400 mt-4">Initializing...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!wallet.isConnected || !userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">My Collections</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Your exclusive collection of sports NFTs
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Package className="text-blue-400 mr-2" size={20} />
                  <span className="text-gray-400 text-sm">Total NFTs</span>
                </div>
                <p className="text-2xl font-bold text-white">{purchases.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <Coins className="text-green-400 mr-2" size={20} />
                  <span className="text-gray-400 text-sm">Total Spent</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  ${purchases.reduce((sum, p) => sum + p.amount_paid, 0).toFixed(2)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-yellow-400 text-sm">Unique Sports</span>
                </div>
                <p className="text-2xl font-bold text-white">
                  {new Set(purchases.map(p => p.nfts.sport)).size}
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading your collections...</p>
            </div>
          ) : (
            <>
              {/* Filters and View Controls */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-4">
                    {/* Sport Filter */}
                    <div className="flex items-center gap-2">
                      <Filter size={20} className="text-gray-400" />
                      <span className="text-white font-medium">Sport:</span>
                      <select
                        value={selectedSport}
                        onChange={(e) => setSelectedSport(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                      >
                        {sports.map((sport) => (
                          <option key={sport} value={sport} className="text-black">
                            {sport}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Rarity Filter */}
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">Rarity:</span>
                      <select
                        value={selectedRarity}
                        onChange={(e) => setSelectedRarity(e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                      >
                        {rarities.map((rarity) => (
                          <option key={rarity} value={rarity} className="text-black">
                            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="border-white/20"
                    >
                      <Grid size={16} />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="border-white/20"
                    >
                      <List size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* NFT Grid */}
              {nftsFromPurchases.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="text-gray-600 mx-auto mb-4" size={48} />
                  <p className="text-gray-400 text-lg mb-4">
                    {selectedSport === "All" && selectedRarity === "All"
                      ? "You haven't collected any NFTs yet" 
                      : "No NFTs match your current filters"}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">
                    Browse the Marketplace to start your collection
                  </p>
                  <Button 
                    onClick={() => navigate('/marketplace')}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    Explore Marketplace
                  </Button>
                </div>
              ) : (
                <div className={`${
                  viewMode === "grid" 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                    : "space-y-4"
                }`}>
                  {nftsFromPurchases.map((nft) => (
                    <NFTCard 
                      key={nft.id} 
                      nft={nft} 
                      isWalletConnected={true}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyCollections;
