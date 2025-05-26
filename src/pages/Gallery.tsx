
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NFTGallery from "@/components/NFTGallery";
import { useStarkNet } from "@/hooks/useStarkNet";

const Gallery = () => {
  const { wallet, userData } = useStarkNet();
  const isWalletConnected = wallet.isConnected && userData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">NFT Gallery</h1>
          <p className="text-gray-400 text-lg">Discover amazing sports NFTs from athletes around the world</p>
        </div>
        
        <NFTGallery isWalletConnected={isWalletConnected} />
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
