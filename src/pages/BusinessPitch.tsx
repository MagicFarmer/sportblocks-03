
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BusinessPitchHero from "@/components/BusinessPitch/BusinessPitchHero";
import ProblemSection from "@/components/BusinessPitch/ProblemSection";
import SolutionSection from "@/components/BusinessPitch/SolutionSection";
import TargetMarketSection from "@/components/BusinessPitch/TargetMarketSection";
import BusinessModelSection from "@/components/BusinessPitch/BusinessModelSection";
import TractionSection from "@/components/BusinessPitch/TractionSection";
import WhyNowSection from "@/components/BusinessPitch/WhyNowSection";

const BusinessPitch = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <BusinessPitchHero />
        <ProblemSection />
        <SolutionSection />
        <TargetMarketSection />
        <BusinessModelSection />
        <TractionSection />
        <WhyNowSection />

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/marketplace')}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Investment Journey
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessPitch;
