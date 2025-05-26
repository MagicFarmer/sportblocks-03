
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Users, Target, Calendar, MapPin, TrendingUp, Lock, DollarSign } from "lucide-react";
import { SocialProject } from "../data/mockSocialProjects";
import { useStarkNet } from "@/hooks/useStarkNet";

interface SocialProjectCardProps {
  project: SocialProject;
  isWalletConnected?: boolean;
}

const SocialProjectCard = ({ project, isWalletConnected }: SocialProjectCardProps) => {
  const { connectWallet } = useStarkNet();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/30 border border-green-400/50';
      case 'active': return 'text-blue-400 bg-blue-400/30 border border-blue-400/50';
      case 'planning': return 'text-yellow-400 bg-yellow-400/30 border border-yellow-400/50';
      case 'paused': return 'text-orange-400 bg-orange-400/30 border border-orange-400/50';
      default: return 'text-gray-400 bg-gray-400/30 border border-gray-400/50';
    }
  };

  const handleConnectWallet = () => {
    connectWallet();
  };

  const handleViewDetails = () => {
    if (!isWalletConnected) {
      handleConnectWallet();
      return;
    }
    // Show project details modal or navigate to details page
    alert(`Viewing details for ${project.name} - Detailed view coming soon!`);
  };

  const handleSupport = () => {
    if (!isWalletConnected) {
      handleConnectWallet();
      return;
    }
    // Simulate donation process
    alert(`Supporting ${project.name} - Donation feature coming soon!`);
  };

  const fundingPercentage = Math.round((project.fundingRaised / project.fundingGoal) * 100);

  return (
    <Card className={`transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm ${
      isWalletConnected 
        ? 'bg-gradient-to-br from-green-900/80 to-emerald-900/80 border-green-400/60 hover:border-green-400/90' 
        : 'bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-400/30 hover:border-green-400/50 opacity-75'
    }`}>
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
        <div className={`absolute top-3 left-3 backdrop-blur-sm px-3 py-1 rounded-full border ${
          isWalletConnected 
            ? 'bg-green-600/95 border-green-400/50' 
            : 'bg-green-600/60 border-green-400/30'
        }`}>
          <span className="text-white text-xs font-bold">SOCIAL PROJECT</span>
        </div>
        {!isWalletConnected && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] rounded-t-lg flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2">
              <Lock className="w-4 h-4 text-white mx-auto mb-1" />
              <span className="text-white text-xs font-medium">Connect Wallet</span>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.name}</h3>
          <p className="text-gray-200 text-sm mb-3 line-clamp-2">{project.description}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <MapPin size={14} className="text-green-400" />
            <span>{project.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Calendar size={14} className="text-green-400" />
            <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-200 font-medium">Funding Progress</span>
            <span className={`text-sm font-bold ${isWalletConnected ? 'text-green-300' : 'text-green-400/70'}`}>
              {fundingPercentage}%
            </span>
          </div>
          <div className="w-full bg-gray-700/70 rounded-full h-3 border border-gray-600/50">
            <div 
              className={`h-3 rounded-full transition-all duration-300 shadow-lg ${
                isWalletConnected 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-400' 
                  : 'bg-gradient-to-r from-green-500/60 to-emerald-400/60'
              }`}
              style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-300 mt-1">
            <span className="font-medium">${project.fundingRaised.toLocaleString()}</span>
            <span className="font-medium">${project.fundingGoal.toLocaleString()}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className={`backdrop-blur-sm rounded-lg p-3 text-center border ${
            isWalletConnected ? 'bg-white/15 border-white/30' : 'bg-white/8 border-white/15'
          }`}>
            <Users className={`w-5 h-5 mx-auto mb-1 ${isWalletConnected ? 'text-green-400' : 'text-green-400/60'}`} />
            <div className="text-lg font-bold text-white">{project.supportersCount}</div>
            <div className="text-xs text-gray-300">Supporters</div>
          </div>
          <div className={`backdrop-blur-sm rounded-lg p-3 text-center border ${
            isWalletConnected ? 'bg-white/15 border-white/30' : 'bg-white/8 border-white/15'
          }`}>
            <Target className={`w-5 h-5 mx-auto mb-1 ${isWalletConnected ? 'text-emerald-400' : 'text-emerald-400/60'}`} />
            <div className="text-lg font-bold text-white">{project.category}</div>
            <div className="text-xs text-gray-300">Category</div>
          </div>
        </div>

        {/* Impact */}
        <div className={`mb-4 p-3 rounded-lg border ${
          isWalletConnected 
            ? 'bg-green-500/25 border-green-400/40' 
            : 'bg-green-500/15 border-green-400/25'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className={`w-4 h-4 ${isWalletConnected ? 'text-green-300' : 'text-green-300/70'}`} />
            <span className={`text-sm font-bold ${isWalletConnected ? 'text-green-300' : 'text-green-300/70'}`}>
              Impact Achieved
            </span>
          </div>
          <p className="text-xs text-gray-200">{project.impact}</p>
        </div>

        {/* SDG Goals */}
        <div className="mb-4">
          <div className="text-xs text-gray-300 mb-2 font-medium">UN SDG Goals:</div>
          <div className="flex flex-wrap gap-1">
            {project.sdgGoals.map((goal, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-xs rounded-full border ${
                  isWalletConnected 
                    ? 'bg-blue-500/30 text-blue-200 border-blue-400/30' 
                    : 'bg-blue-500/20 text-blue-200/70 border-blue-400/20'
                }`}
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button 
            onClick={handleViewDetails}
            className={`font-bold transition-all duration-200 ${
              isWalletConnected 
                ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg" 
                : "bg-gray-600/50 text-gray-300 cursor-pointer border border-gray-500/30 hover:bg-gray-600/70"
            }`}
          >
            <Heart className="w-4 h-4 mr-2" />
            {isWalletConnected ? "View Details" : "Connect Wallet"}
          </Button>
          
          <Button 
            onClick={handleSupport}
            className={`font-bold transition-all duration-200 ${
              isWalletConnected 
                ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg" 
                : "bg-gray-600/50 text-gray-300 cursor-pointer border border-gray-500/30 hover:bg-gray-600/70"
            }`}
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Support Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialProjectCard;
