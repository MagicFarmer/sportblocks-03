
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStarkNet } from "@/hooks/useStarkNet";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProfileInfo from "@/components/Profile/UserProfileInfo";
import UserNFTHistory from "@/components/Profile/UserNFTHistory";
import UserPurchaseHistory from "@/components/Profile/UserPurchaseHistory";
import SportsRecords from "@/components/Profile/SportsRecords";

const Profile = () => {
  const navigate = useNavigate();
  const { wallet, userData, isInitialized } = useStarkNet();
  const [nfts, setNfts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for initialization before checking auth
    if (!isInitialized) return;
    
    if (!wallet.isConnected || !userData) {
      navigate('/');
      return;
    }
    
    fetchUserData();
  }, [wallet.isConnected, userData, isInitialized, navigate]);

  const fetchUserData = async () => {
    if (!userData?.id) return;
    
    try {
      // Fetch user's NFTs
      const { data: nftData, error: nftError } = await supabase
        .from('nfts')
        .select('*')
        .eq('user_id', userData.id)
        .order('created_at', { ascending: false });

      if (nftError) {
        console.error('Error fetching NFTs:', nftError);
      } else {
        setNfts(nftData || []);
      }

      // For fans, skip purchases since the table doesn't exist yet
      if (userData.user_type === 'fan') {
        setPurchases([]);
      }

    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while initializing
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

  // Redirect if not authenticated
  if (!wallet.isConnected || !userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
            <p className="text-gray-400">Personal information and SportBlocks activity</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading profile...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <UserProfileInfo userData={userData} onUpdate={fetchUserData} />
                {userData.user_type === 'athlete' && (
                  <div className="mt-6">
                    <SportsRecords userData={userData} onUpdate={fetchUserData} />
                  </div>
                )}
              </div>

              {/* Activity History */}
              <div className="lg:col-span-2 space-y-8">
                {userData.user_type === 'athlete' ? (
                  <UserNFTHistory nfts={nfts} />
                ) : (
                  <UserPurchaseHistory purchases={purchases} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
