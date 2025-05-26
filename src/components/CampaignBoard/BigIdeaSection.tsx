
import { Card, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";

const BigIdeaSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Rocket className="text-purple-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">3. THE BIG IDEA</h2>
        </div>
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop" 
            alt="Sport Blocks vision"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-purple-400 mb-4">"Sport Blocks: Building Athletes' Legacy"</h3>
          <p className="text-xl text-white mb-6">It's not just a dApp. It's a movement.</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30 mb-6">
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
