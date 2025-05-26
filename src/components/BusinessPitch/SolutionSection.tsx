
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Zap, HandHeart, Vote, GraduationCap, Shield } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Evolutionary NFTs",
      description: "Interactive Legacy Cards with exclusive athlete content that evolve over time."
    },
    {
      icon: HandHeart,
      title: "Direct Social Funding",
      description: "Transparent funding for social causes chosen by the athlete."
    },
    {
      icon: Vote,
      title: "Athlete DAOs",
      description: "Fans vote on key projects and decisions through decentralized governance."
    },
    {
      icon: GraduationCap,
      title: "Web3 Education",
      description: "Integrated, accessible, and optional Web3 learning experience."
    },
    {
      icon: Shield,
      title: "Starknet Integration",
      description: "Fast, secure, and low-cost transactions on Ethereum's Layer 2."
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          💡 <span className="ml-3">Our Solution</span>
        </h2>
        <p className="text-xl text-green-400 max-w-3xl mx-auto font-semibold">
          Sport Blocks combines cutting-edge technology with human-centered design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="text-green-400 w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Technology Stack Diagram */}
      <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-400/30">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Technology Stack</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="bg-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <Shield className="text-blue-400 w-8 h-8 mx-auto mb-2" />
            <span className="text-white font-semibold">Starknet</span>
          </div>
          <div className="text-white text-2xl">+</div>
          <div className="bg-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <Zap className="text-purple-400 w-8 h-8 mx-auto mb-2" />
            <span className="text-white font-semibold">Flutter</span>
          </div>
          <div className="text-white text-2xl">+</div>
          <div className="bg-white/20 rounded-xl p-4 text-center min-w-[120px]">
            <Vote className="text-green-400 w-8 h-8 mx-auto mb-2" />
            <span className="text-white font-semibold">DAO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
