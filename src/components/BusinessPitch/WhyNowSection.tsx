
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Heart, TrendingUp, Globe } from "lucide-react";

const WhyNowSection = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Post-COVID Sports Evolution",
      description: "Sports industry seeks new, sustainable models after pandemic disruption"
    },
    {
      icon: Heart,
      title: "Fan Experience Demand",
      description: "Fans want more meaningful, interactive experiences beyond passive consumption"
    },
    {
      icon: Zap,
      title: "Web3 Mainstream Adoption",
      description: "Web3 needs real, accessible, and purposeful use cases for mass adoption"
    },
    {
      icon: Globe,
      title: "Athlete Empowerment",
      description: "Athletes are ready to own their story and control their digital legacy"
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🔥 <span className="ml-3">Why Now?</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Perfect timing for a revolutionary sports technology platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-xl">
                    <Icon className="text-orange-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Value Proposition Summary */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl p-8 border border-orange-400/30 text-center">
        <Clock className="text-orange-400 w-16 h-16 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-white mb-6">The Opportunity</h3>
        <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Sport Blocks is the first ecosystem that unites Web3, elite sport, and social impact in a single click.
        </p>
        <div className="text-2xl font-bold text-white mb-4">
          🚀 Invest • 🤝 Collaborate • ✨ Create
        </div>
        <p className="text-lg text-orange-400 font-semibold">
          Because an athlete's legacy can also be yours.
        </p>
      </div>
    </div>
  );
};

export default WhyNowSection;
