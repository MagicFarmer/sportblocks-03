
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, RefreshCw, Palette, Building, Handshake } from "lucide-react";

const BusinessModelSection = () => {
  const revenueStreams = [
    {
      icon: DollarSign,
      title: "Legacy Card Sales",
      description: "Primary revenue from NFT sales and resales",
      revenue: "5-15% commission"
    },
    {
      icon: RefreshCw,
      title: "P2P Marketplace",
      description: "Transaction fees on peer-to-peer card exchanges",
      revenue: "2.5% per transaction"
    },
    {
      icon: Palette,
      title: "Brand Activations",
      description: "Co-branded cards and sponsored content",
      revenue: "$10K-100K per campaign"
    },
    {
      icon: Building,
      title: "B2B Services",
      description: "Platform services for federations and municipalities",
      revenue: "$5K-50K per client"
    },
    {
      icon: Handshake,
      title: "Project Commissions",
      description: "Fees from fan-funded social impact projects",
      revenue: "3-5% of project funds"
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          💸 <span className="ml-3">Business Model</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Multiple revenue streams ensuring sustainability and growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {revenueStreams.map((stream, index) => {
          const Icon = stream.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-500/20 p-3 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="text-green-400 w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{stream.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 leading-relaxed">{stream.description}</p>
                  <div className="bg-amber-500/20 rounded-lg p-2">
                    <span className="text-amber-400 font-bold text-sm">{stream.revenue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue Projection Chart */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl p-8 border border-green-400/30">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Revenue Projection</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-2">Year 1</h4>
            <p className="text-3xl font-bold text-green-400 mb-2">$500K</p>
            <p className="text-gray-200 text-sm">MVP Launch & Pilot</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-2">Year 2</h4>
            <p className="text-3xl font-bold text-green-400 mb-2">$2.5M</p>
            <p className="text-gray-200 text-sm">Regional Expansion</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-lg font-bold text-white mb-2">Year 3</h4>
            <p className="text-3xl font-bold text-green-400 mb-2">$10M</p>
            <p className="text-gray-200 text-sm">Global Platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModelSection;
