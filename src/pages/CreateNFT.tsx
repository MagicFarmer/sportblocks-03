
import { useNavigate } from "react-router-dom";
import { useStarkNet } from "@/hooks/useStarkNet";
import CreateNFTLayout from "@/components/CreateNFT/CreateNFTLayout";
import NFTForm from "@/components/CreateNFT/NFTForm";

const CreateNFT = () => {
  const navigate = useNavigate();
  const { wallet, userData, isInitialized } = useStarkNet();

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <CreateNFTLayout>
        <div className="text-center py-12">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-400 mt-4">Initializing...</p>
        </div>
      </CreateNFTLayout>
    );
  }

  // Redirect if not authenticated
  if (!wallet.isConnected || !userData) {
    navigate('/');
    return null;
  }

  return (
    <CreateNFTLayout>
      <NFTForm />
    </CreateNFTLayout>
  );
};

export default CreateNFT;
