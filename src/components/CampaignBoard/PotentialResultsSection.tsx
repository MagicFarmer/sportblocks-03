
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=400&fit=crop" 
            alt="Success and achievement celebration"
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

        {/* Cannes Recognition */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">🏆 And yes… multiple Lions at Cannes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Star className="text-amber-400 w-4 h-4" />
                <span className="text-gray-200 text-sm">Creative use of blockchain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-amber-400 w-4 h-4" />
                <span className="text-gray-200 text-sm">Measurable social impact</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Star className="text-amber-400 w-4 h-4" />
                <span className="text-gray-200 text-sm">Values-centered experience design</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-amber-400 w-4 h-4" />
                <span className="text-gray-200 text-sm">Content and gamification strategy</span>
              </div>
            </div>
          </div>
          <p className="text-center text-xl font-bold text-purple-400">
            And maybe… the Grand Prix for Good.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PotentialResultsSection;
