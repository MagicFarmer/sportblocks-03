
import { useNavigate } from "react-router-dom";
import { useStarkNet } from "@/hooks/useStarkNet";
import CreateNFTLayout from "@/components/CreateNFT/CreateNFTLayout";
import NFTForm from "@/components/CreateNFT/NFTForm";

const CreateNFT = () => {
  const navigate = useNavigate();
  const { wallet, userData } = useStarkNet();

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
