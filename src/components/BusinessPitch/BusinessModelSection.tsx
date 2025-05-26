
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, RefreshCw, Handshake, Building2, TrendingUp } from "lucide-react";

const BusinessModelSection = () => {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: "Legacy Card Sales",
      description: "Primary revenue from sale and resale of Legacy Cards, creating income for both athletes and the platform."
    },
    {
      icon: RefreshCw,
      title: "P2P Marketplace",
      description: "Commission-based peer-to-peer marketplace where fans can trade and exchange Legacy Cards."
    },
    {
      icon: Handshake,
      title: "Brand Activations",
      description: "Co-branded Legacy Cards and sponsored content partnerships with sports brands and organizations."
    },
    {
      icon: Building2,
      title: "B2B Services",
      description: "White-label solutions for federations, municipalities, and sports organizations seeking digital engagement."
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          💸 <span className="ml-3">Business Model</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Sustainable revenue streams that benefit athletes, fans, and the platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {revenueStreams.map((stream, index) => {
          const Icon = stream.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <Icon className="text-purple-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{stream.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{stream.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-8 border border-purple-400/30">
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
            alt="Business analytics and growth charts"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-white mb-6">Revenue Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <TrendingUp className="text-green-400 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-200">To Athletes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Handshake className="text-blue-400 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-gray-200">Platform Operations</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <DollarSign className="text-purple-400 w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-400 mb-2">15%</div>
              <div className="text-gray-200">Social Impact Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
