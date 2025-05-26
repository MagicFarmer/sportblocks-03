
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, Crown, Award, Sparkles } from "lucide-react";

const PotentialResultsSection = () => {
  const results = [
    {
      title: "For Athletes",
      content: "Sustainable direct income. Own voice. Active community. Global visibility."
    },
    {
      title: "For Fans", 
      content: "Real connection. Unique experiences. Participation in decisions. Simple Web3 education."
    },
    {
      title: "For Social Causes",
      content: "New sources of transparent funding. Communities mobilized by sport."
    },
    {
      title: "For Sport Blocks",
      content: "Positioning as a benchmark in sports innovation, social impact, and user-friendly Web3 technology."
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Trophy className="text-amber-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">5. POTENTIAL RESULTS</h2>
        </div>
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop" 
            alt="Diverse group of athletes celebrating success and achievement together"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <p className="text-xl text-amber-400 font-semibold mb-6 text-center">
          Hearts Won. Causes Supported. Heroes Empowered.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {results.map((result, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
              <h3 className="text-lg font-bold text-white mb-3">{result.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{result.content}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Cannes Recognition */}
        <div className="relative bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-amber-900/40 rounded-2xl p-10 border-2 border-amber-400/50 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Sparkles className="text-amber-400 w-8 h-8 animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Crown className="text-amber-400 w-6 h-6 animate-pulse" />
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Star className="text-amber-400 w-4 h-4 animate-pulse" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="text-amber-400 w-12 h-12 mr-3" />
                <h3 className="text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text">
                  And yes… multiple Lions at Cannes
                </h3>
                <Crown className="text-amber-400 w-12 h-12 ml-3" />
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="bg-amber-500 rounded-full p-2">
                    <Star className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-200 font-medium">Creative use of blockchain technology</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="bg-purple-500 rounded-full p-2">
                    <Award className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-200 font-medium">Measurable social impact initiatives</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="bg-pink-500 rounded-full p-2">
                    <Sparkles className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-200 font-medium">Values-centered experience design</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <div className="bg-blue-500 rounded-full p-2">
                    <Trophy className="text-white w-5 h-5" />
                  </div>
                  <span className="text-gray-200 font-medium">Content and gamification strategy</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 shadow-xl border border-purple-400/30">
                <div className="flex items-center justify-center mb-3">
                  <Crown className="text-amber-400 w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text">
                    And maybe… the Grand Prix for Good
                  </span>
                  <Crown className="text-amber-400 w-8 h-8 ml-2" />
                </div>
                <p className="text-purple-200 text-lg italic">
                  "Where creativity meets purpose, legends are born"
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotentialResultsSection;
