
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, ShoppingBag, GraduationCap, Smartphone, Globe } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop" 
            alt="Diverse group of people collaborating and engaging in sports activities"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          SportBlocks aims to provide diverse interaction avenues for fans, athletes, and collaborators 
          through innovative engagement mechanisms.
        </p>

        {/* Interactive Flow Diagram */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-4">
              <Smartphone className="text-white w-8 h-8" />
            </div>
            <div className="text-white text-2xl">→</div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4">
              <GraduationCap className="text-white w-8 h-8" />
            </div>
            <div className="text-white text-2xl">→</div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4">
              <Globe className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="text-center text-gray-300 text-sm">
            Mobile Access → Web3 Learning → Global Community
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-cyan-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Free Registration & Exploration</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Users can create free accounts, explore athlete profiles, discover Legacy Cards, 
              and learn about social impact projects without needing a Web3 wallet.
            </p>
            <div className="bg-cyan-400/20 rounded-lg p-3">
              <p className="text-sm text-cyan-200 font-medium">🎓 Includes "Web3 Learning Mode" for beginners</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <ShoppingBag className="text-pink-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Legacy Card Acquisition</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Fans can purchase Legacy Cards using traditional payment methods or crypto, 
              making Web3 accessible to everyone regardless of technical knowledge.
            </p>
            <div className="bg-pink-400/20 rounded-lg p-3">
              <p className="text-sm text-pink-200 font-medium">💳 Traditional & Crypto Payment Options</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FanEngagementSection;
