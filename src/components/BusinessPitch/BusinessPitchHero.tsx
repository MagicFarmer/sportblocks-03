
import { TrendingUp, Target } from "lucide-react";

const BusinessPitchHero = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl shadow-2xl mr-4">
          <TrendingUp className="text-white w-12 h-12" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white mb-2">💼 Business Pitch</h1>
          <p className="text-2xl text-green-400 font-semibold">Sport Blocks Investment Opportunity</p>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6">What is Sport Blocks?</h2>
        <p className="text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
          Sport Blocks is a Web3 platform that enables elite athletes to create their digital legacy, 
          monetize their story, and channel funds to social causes—all through the power of blockchain technology. 
          Through interactive Legacy Cards, fans around the world can directly support their idols, 
          learn about Web3, and become an active part of sport's social impact.
        </p>
      </div>
    </div>
  );
};

export default BusinessPitchHero;
