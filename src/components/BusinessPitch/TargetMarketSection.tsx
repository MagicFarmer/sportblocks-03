
import { Card, CardContent } from "@/components/ui/card";
import { Target, Trophy, Users, Globe, MapPin } from "lucide-react";

const TargetMarketSection = () => {
  const markets = [
    {
      icon: Trophy,
      title: "Elite Athletes",
      description: "Olympic, world-class, and emerging athletes without sponsors or with active communities seeking sustainable income.",
      size: "50K+ globally"
    },
    {
      icon: Users,
      title: "Digital Sports Fans",
      description: "Young, engaged sports fans seeking authentic connection and purpose beyond passive consumption.",
      size: "500M+ worldwide"
    },
    {
      icon: Globe,
      title: "Sports Organizations",
      description: "Federations, brands, and media outlets seeking measurable impact and authenticity in their initiatives.",
      size: "10K+ organizations"
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🎯 <span className="ml-3">Target Market</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Addressing the needs of a global, engaged, and underserved market
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {markets.map((market, index) => {
          const Icon = market.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500/20 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Icon className="text-blue-400 w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{market.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{market.description}</p>
                <div className="bg-amber-500/20 rounded-lg p-2">
                  <span className="text-amber-400 font-bold">{market.size}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Geographic Focus */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-purple-400/30">
        <div className="text-center mb-6">
          <MapPin className="text-purple-400 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Geographic Strategy</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-3">Initial Focus</h4>
            <p className="text-gray-200">Latin America - Starting with Costa Rica pilot program</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-3">Global Expansion</h4>
            <p className="text-gray-200">Scaling to North America, Europe, and Asia-Pacific</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMarketSection;
