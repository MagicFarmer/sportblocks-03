
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Crown, Medal } from "lucide-react";

const MeetGreetsSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Star className="text-amber-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">3. Tiered Meet & Greets and Commemorative Badges</h2>
        </div>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop" 
            alt="Meet and greet interactions"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          A structured system for unique fan-athlete interactions based on engagement levels, 
          with exclusive access tiers and commemorative NFT badges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <Trophy className="text-cyan-400 w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold text-white">Level 1: Legacy Voter</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              For users who have registered and voted in at least one fan-driven project. 
              Access through general raffles for virtual and occasional physical Meet & Greets.
            </p>
            <div className="bg-blue-400/20 rounded-lg p-3">
              <p className="text-sm text-blue-200">Basic Access • General Raffles • Virtual Events</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <Medal className="text-pink-400 w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold text-white">Level 2: Legacy Builder</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              For holders of athlete Legacy Cards. Access includes exclusive raffles 
              with higher chances, smaller virtual group sessions, and premium content.
            </p>
            <div className="bg-purple-400/20 rounded-lg p-3">
              <p className="text-sm text-purple-200">Intermediate Access • Exclusive Raffles • Premium Content</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
            <div className="flex items-center mb-4">
              <Crown className="text-orange-400 w-8 h-8 mr-3" />
              <h3 className="text-xl font-bold text-white">Level 3: Impact Visionary</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              For fans with significant contributions. Guaranteed access to physical, 
              intimate Meet & Greets, including rare one-on-one interactions.
            </p>
            <div className="bg-amber-400/20 rounded-lg p-3">
              <p className="text-sm text-amber-200">Elite Access • Guaranteed Events • One-on-One Sessions</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
          <div className="flex items-center mb-4">
            <Medal className="text-emerald-400 w-6 h-6 mr-3" />
            <h3 className="text-xl font-bold text-white">Meet & Greet Badge (NFT)</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            Each attendee receives a unique, personalized NFT badge as immutable proof of participation. 
            Contains metadata including date, athlete(s), access level, and links to exclusive content. 
            These badges unlock future benefits and additional Engagement Points.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetGreetsSection;
