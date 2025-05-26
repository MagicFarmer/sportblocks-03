
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Heart, Users, Zap } from "lucide-react";

const BigIdeaSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Rocket className="text-purple-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">3. THE BIG IDEA</h2>
        </div>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=400&fit=crop" 
            alt="Athletes and community members working together for social impact"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-purple-400 mb-4">"Sport Blocks: Building Athletes' Legacy"</h3>
          <p className="text-xl text-white mb-6">It's not just a dApp. It's a movement.</p>
        </div>
        
        {/* Visual Concept Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl p-6 border border-purple-400/40 text-center">
            <Heart className="text-pink-400 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">Emotional Connection</h4>
            <p className="text-gray-200 text-sm">Each Sport Block creates deep emotional bonds between athletes and fans</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl p-6 border border-blue-400/40 text-center">
            <Users className="text-cyan-400 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">Community Building</h4>
            <p className="text-gray-200 text-sm">Fans become active participants in their hero's journey</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-500/30 to-orange-500/30 rounded-xl p-6 border border-amber-400/40 text-center">
            <Zap className="text-orange-400 w-12 h-12 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">Social Impact</h4>
            <p className="text-gray-200 text-sm">Every interaction creates measurable positive change</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30">
          <p className="text-gray-200 leading-relaxed mb-4">
            Each Sport Block is a living fragment of an athlete's legacy: collectible, shareable, and functional. 
            Each block tells a story, funds their career and their cause, and allows you to be a part of it.
          </p>
          <p className="text-gray-200 leading-relaxed mb-4">
            A bridge between fans and athletes. A new sports and social economy. A smooth and educational entry into the Web3 universe.
          </p>
          <p className="text-2xl font-bold text-purple-400 text-center">
            Your hero. Your impact. Your legacy too.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BigIdeaSection;
