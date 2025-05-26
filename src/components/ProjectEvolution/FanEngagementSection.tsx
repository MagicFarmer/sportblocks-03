
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, ShoppingBag, GraduationCap } from "lucide-react";

const FanEngagementSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Users className="text-blue-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">1. Enhanced Fan Interaction and Engagement</h2>
        </div>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop" 
            alt="Fan engagement and community"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          SportBlocks aims to provide diverse interaction avenues for fans, athletes, and collaborators 
          through innovative engagement mechanisms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-cyan-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Free Registration & Exploration</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Users can create free accounts, explore athlete profiles, discover Legacy Cards, 
              and learn about social impact projects without needing a Web3 wallet. 
              A "Web3 Learning Mode" helps users understand key concepts.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <ShoppingBag className="text-pink-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Legacy Card Acquisition</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Fans can purchase Legacy Cards using traditional payment methods or cryptocurrencies. 
              These cards grant access to premium content, geolocated experiences, 
              and accumulate Engagement Points (CP).
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center mb-4">
              <Users className="text-emerald-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Peer-to-Peer Exchange</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              The platform facilitates a marketplace for fans to exchange Legacy Cards directly, 
              fostering community interaction and strategic collecting.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
            <div className="flex items-center mb-4">
              <Award className="text-orange-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Legacy Badges (NFTs)</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Non-transferable Legacy Badges awarded for platform milestones, 
              such as first purchases, visiting athlete profiles, referring friends, 
              and physically visiting historical athlete locations.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FanEngagementSection;
