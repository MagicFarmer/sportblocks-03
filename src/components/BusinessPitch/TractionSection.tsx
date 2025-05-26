
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, CheckCircle, Users, Trophy, Globe } from "lucide-react";

const TractionSection = () => {
  const milestones = [
    {
      icon: CheckCircle,
      title: "Functional MVP",
      description: "A Web3 Cairo StarkNet MVP with core functionality developed and tested"
    },
    {
      icon: Trophy,
      title: "Olympic Partnerships",
      description: "Pilot testing initiated with Olympic athletes and sports federations"
    },
    {
      icon: Globe,
      title: "Regional Validation",
      description: "Initial partnerships established in Costa Rica with expansion roadmap"
    },
    {
      icon: Users,
      title: "Sports Coverage",
      description: "Validated list of 50+ sports with structured thematic digital albums"
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🔧 <span className="ml-3">5. Traction & Roadmap</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Proven progress and clear path to market leadership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-amber-400/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/20 p-3 rounded-xl">
                    <Icon className="text-amber-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-3xl p-8 border border-amber-400/30">
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
            alt="Development progress and team collaboration"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <div className="text-center">
          <Rocket className="text-amber-400 w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">Development Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-amber-400">Completed</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Core platform architecture</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Legacy Card minting system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Fan projects governance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Community governance structure</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-amber-400">Next Milestones</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Rocket className="text-amber-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Beta launch with athletes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="text-amber-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Mobile app deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="text-amber-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">Partnership expansion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Rocket className="text-amber-400 w-4 h-4" />
                  <span className="text-gray-200 text-sm">International scaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
