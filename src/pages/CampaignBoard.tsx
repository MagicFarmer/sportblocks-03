
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/CampaignBoard/HeroSection";
import ProblemSection from "@/components/CampaignBoard/ProblemSection";
import InsightsSection from "@/components/CampaignBoard/InsightsSection";
import BigIdeaSection from "@/components/CampaignBoard/BigIdeaSection";
import ExecutionSection from "@/components/CampaignBoard/ExecutionSection";
import PotentialResultsSection from "@/components/CampaignBoard/PotentialResultsSection";

const CampaignBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <HeroSection />
        <ProblemSection />
        <InsightsSection />
        <BigIdeaSection />
        <ExecutionSection />
        <PotentialResultsSection />

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Movement
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignBoard;
