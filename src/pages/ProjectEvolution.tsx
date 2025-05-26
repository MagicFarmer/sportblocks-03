
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProjectEvolutionHero from "@/components/ProjectEvolution/ProjectEvolutionHero";
import FanEngagementSection from "@/components/ProjectEvolution/FanEngagementSection";
import FanProjectsSection from "@/components/ProjectEvolution/FanProjectsSection";
import MeetGreetsSection from "@/components/ProjectEvolution/MeetGreetsSection";
import SportCoverageSection from "@/components/ProjectEvolution/SportCoverageSection";
import TransparencySection from "@/components/ProjectEvolution/TransparencySection";

const ProjectEvolution = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <ProjectEvolutionHero />
        <FanEngagementSection />
        <FanProjectsSection />
        <MeetGreetsSection />
        <SportCoverageSection />
        <TransparencySection />

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Evolution
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectEvolution;
