
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Users, GraduationCap, Zap } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Heart,
      title: "Evolutionary NFTs",
      description: "Interactive Legacy Cards with exclusive athlete content that evolve based on achievements and fan engagement."
    },
    {
      icon: Users,
      title: "Direct Social Impact Funding",
      description: "Direct funding for social causes chosen by athletes, creating transparent impact pathways."
    },
    {
      icon: GraduationCap,
      title: "Athlete DAOs",
      description: "Decentralized governance where fans vote on key projects and decisions alongside their favorite athletes."
    },
    {
      icon: Zap,
      title: "Accessible Web3 Education",
      description: "Integrated, accessible, and optional Web3 education that makes blockchain technology approachable for everyone."
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          💡 <span className="ml-3">Our Solution</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Sport Blocks combines cutting-edge technology with meaningful social impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-xl">
                    <Icon className="text-green-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-8 border border-green-400/30 text-center">
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
            alt="Athletes training and using technology"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">Powered by StarkNet</h3>
        <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Built on StarkNet for fast, secure, and low-cost transactions that make Web3 accessible to sports fans worldwide.
        </p>
        <div className="text-2xl font-bold text-white mb-4">
          🚀 Fast • 🔒 Secure • 💰 Low-Cost
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
