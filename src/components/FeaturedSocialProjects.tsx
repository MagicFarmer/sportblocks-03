
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Heart, ArrowRight, Target } from "lucide-react";
import SocialProjectCard from "./SocialProjectCard";
import { mockSocialProjects } from "../data/mockSocialProjects";

interface FeaturedSocialProjectsProps {
  isWalletConnected: boolean;
}

const FeaturedSocialProjects = ({ isWalletConnected }: FeaturedSocialProjectsProps) => {
  const navigate = useNavigate();

  // Get first 3 social projects to ensure consistency
  const featuredProjects = useMemo(() => {
    return mockSocialProjects.slice(0, 3);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Social Projects
          </h2>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4 font-medium">
            Support meaningful projects that create lasting impact through sports
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 mb-12 max-w-6xl mx-auto">
          {featuredProjects.map((project) => (
            <SocialProjectCard 
              key={project.id} 
              project={project} 
              isWalletConnected={isWalletConnected}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/30 to-emerald-600/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-green-400/40 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Explore All Social Projects
            </h3>
            <p className="text-gray-100 mb-6 text-sm sm:text-base font-medium">
              Discover projects making real impact in communities worldwide. 
              Filter by cause, location, funding status, and UN SDG goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/social-projects')}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base shadow-lg"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View All Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-4 text-gray-200 text-sm">
              <span className="mr-2">🌍</span>
              <span className="font-medium">{mockSocialProjects.length}+ active projects</span>
              <span className="mx-2">•</span>
              <span className="font-medium">Real impact tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSocialProjects;
