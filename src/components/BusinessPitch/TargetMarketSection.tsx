
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Building, Globe } from "lucide-react";

const TargetMarketSection = () => {
  const markets = [
    {
      icon: Target,
      title: "Elite Athletes",
      description: "Olympic, world-class, and emerging athletes without sponsors or with active communities seeking sustainable monetization."
    },
    {
      icon: Users,
      title: "Digital Sports Fans",
      description: "Young, digital-native sports fans seeking authentic connection, purpose, and meaningful participation in their idols' journeys."
    },
    {
      icon: Building,
      title: "Sports Organizations",
      description: "Federations, brands, and media outlets seeking measurable impact, authenticity, and innovative fan engagement solutions."
    },
    {
      icon: Globe,
      title: "Global Expansion",
      description: "Initially focused on Latin America with validated partnerships, scaling globally through proven engagement models."
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🎯 <span className="ml-3">Target Market</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Connecting athletes, fans, and organizations in the evolving sports ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {markets.map((market, index) => {
          const Icon = market.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-xl">
                    <Icon className="text-blue-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{market.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{market.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-400/30 text-center">
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
            alt="Diverse group of athletes training together"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <h3 className="text-3xl font-bold text-white mb-6">Market Opportunity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">$50B+</div>
            <div className="text-gray-200">Global Sports Market</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">2.3B</div>
            <div className="text-gray-200">Sports Fans Worldwide</div>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">Growing</div>
            <div className="text-gray-200">Web3 Adoption</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMarketSection;
