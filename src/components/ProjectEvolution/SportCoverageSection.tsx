
import { Card, CardContent } from "@/components/ui/card";
import { Globe, MapPin, Camera, Users } from "lucide-react";

const SportCoverageSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Globe className="text-cyan-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">4. Comprehensive Sport Coverage and Athlete Profiles</h2>
        </div>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
            alt="Global sports diversity and athletic achievements"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          SportBlocks aims to encompass a wide range of sports for themed albums and collections, 
          with innovative GPS-integrated athlete profiles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <Globe className="text-purple-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Diverse Sports Inclusion</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              The platform includes an extensive list of team and individual sports 
              for thematic albums like "Heroes' Album" (achievements), "Origins' Album" 
              (personal stories), and "Impact Album" (social projects).
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-200">50+ Sports Disciplines</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Thematic Album Collections</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Individual & Team Sports</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center mb-4">
              <MapPin className="text-cyan-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">GPS-Integrated Profiles</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Athlete profiles detail origins, milestones, and triumphs in iconic locations. 
              Legacy Card holders receive GPS-activated notifications when near historical sites, 
              unlocking exclusive content.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Location-Based Unlocks</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Historical Site Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-sm text-gray-200">Exclusive Content Access</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
          <div className="flex items-center mb-4">
            <Camera className="text-orange-400 w-6 h-6 mr-3" />
            <h3 className="text-xl font-bold text-white">Community Gallery & Contributions</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            Users can upload their own media from historical locations, earning a "Legacy Contribution" NFT. 
            Their content is added to a "Community Gallery" that enriches athlete profiles with 
            social impact projects and inspirational messages.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportCoverageSection;
