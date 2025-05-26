
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Store } from "lucide-react";

const MarketplaceBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-blue-400/30 mb-6 sm:mb-8 mx-4 sm:mx-0">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Marketplace Available!</h3>
      <p className="text-gray-300 mb-4 text-sm sm:text-base">
        Buy real NFTs created by verified athletes on our platform
      </p>
      <Button
        onClick={() => navigate('/marketplace')}
        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
      >
        <Store className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Go to Real Marketplace
      </Button>
    </div>
  );
};

export default MarketplaceBanner;
