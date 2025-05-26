
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CreateNFTLayoutProps {
  children: React.ReactNode;
}

const CreateNFTLayout = ({ children }: CreateNFTLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white mb-4"
            >
              <ArrowLeft className="mr-2" size={16} />
              Back to Dashboard
            </Button>
            <h1 className="text-4xl font-bold text-white mb-2">Create NFT</h1>
            <p className="text-gray-400">Create and mint your sports NFT</p>
          </div>

          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateNFTLayout;
