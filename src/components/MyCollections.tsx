
import { useState, useEffect } from "react";
import { useStarkNet } from "@/hooks/useStarkNet";
import { supabase } from "@/integrations/supabase/client";
import NFTCard from "./NFTCard";
import { Package, Coins } from "lucide-react";

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
  const { wallet, userData } = useStarkNet();
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSport, setSelectedSport] = useState("All");

  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball"];

  useEffect(() => {
    if (wallet.isConnected && userData) {
      fetchUserPurchases();
    }
  }, [wallet.isConnected, userData]);

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
          // Add mock data for demo purposes since we don't have athlete/sport data in DB
          athlete: "Unknown Athlete",
          sport: sports[Math.floor(Math.random() * (sports.length - 1)) + 1], // Random sport except "All"
          date: new Date(purchase.timestamp).toLocaleDateString(),
          edition: "1 of 100",
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

  // Filter purchases by sport
  const filteredPurchases = selectedSport === "All" 
    ? purchases 
    : purchases.filter(purchase => purchase.nfts.sport === selectedSport);

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

  if (!wallet.isConnected || !userData) {
    return (
      <div className="text-center py-12">
        <Package className="text-gray-600 mx-auto mb-4" size={48} />
        <p className="text-gray-400 text-lg mb-4">Connect your wallet to view your collections</p>
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Collections
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4">
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
            {nftsFromPurchases.length === 0 ? (
              <div className="text-center py-12">
                <Package className="text-gray-600 mx-auto mb-4" size={48} />
                <p className="text-gray-400 text-base sm:text-lg mb-4">
                  {selectedSport === "All" 
                    ? "You haven't collected any NFTs yet" 
                    : `No ${selectedSport} NFTs in your collection`}
                </p>
                <p className="text-gray-500 text-sm">
                  Browse the Featured NFTs to start your collection
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
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
    </section>
  );
};

export default MyCollections;
