
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Users, ArrowRight, Star } from "lucide-react";
import FanCard from "./FanCard";
import { mockFans } from "../data/mockFans";

interface FeaturedFansProps {
  isWalletConnected: boolean;
}

const FeaturedFans = ({ isWalletConnected }: FeaturedFansProps) => {
  const navigate = useNavigate();

  // Get first 3 fans to ensure consistency
  const featuredFans = useMemo(() => {
    return mockFans.slice(0, 3);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Sports Professionals
          </h2>
          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4 font-medium">
            Meet the dedicated professionals supporting athletes and sports communities
          </p>
        </div>

        {/* Featured Fans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0 mb-12 max-w-6xl mx-auto">
          {featuredFans.map((fan) => (
            <FanCard 
              key={fan.id} 
              fan={fan} 
              isWalletConnected={isWalletConnected}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/30 to-blue-600/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-400/40 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Explore Sports Professional Community
            </h3>
            <p className="text-gray-100 mb-6 text-sm sm:text-base font-medium">
              Connect with nutritionists, coaches, therapists, and other sports professionals. 
              Filter by specialty, experience, and contributions to the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/fans-gallery')}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base shadow-lg"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View All Professionals
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center mt-4 text-gray-200 text-sm">
              <span className="mr-2">⭐</span>
              <span className="font-medium">{mockFans.length}+ professionals</span>
              <span className="mx-2">•</span>
              <span className="font-medium">Various specialties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFans;
