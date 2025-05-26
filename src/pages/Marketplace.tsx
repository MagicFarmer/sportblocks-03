
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Marketplace</h1>
          <p className="text-gray-400 text-lg">Buy and sell sports NFTs</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Marketplace Coming Soon</h2>
          <p className="text-gray-400">
            The marketplace feature is currently under development. Stay tuned for updates!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
