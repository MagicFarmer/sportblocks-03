
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Heart, Users, Target, Calendar, MapPin, TrendingUp } from "lucide-react";
import { SocialProject } from "../data/mockSocialProjects";

interface SocialProjectCardProps {
  project: SocialProject;
  isWalletConnected?: boolean;
}

const SocialProjectCard = ({ project, isWalletConnected }: SocialProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'active': return 'text-blue-400 bg-blue-400/20';
      case 'planning': return 'text-yellow-400 bg-yellow-400/20';
      case 'paused': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const fundingPercentage = Math.round((project.fundingRaised / project.fundingGoal) * 100);

  return (
    <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(project.status)}`}>
            {project.status.toUpperCase()}
          </span>
        </div>
        <div className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-white text-xs font-bold">SOCIAL PROJECT</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{project.name}</h3>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Calendar size={14} />
            <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Funding Progress</span>
            <span className="text-sm font-bold text-green-400">{fundingPercentage}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>${project.fundingRaised.toLocaleString()}</span>
            <span>${project.fundingGoal.toLocaleString()}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center">
            <Users className="text-green-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">{project.supportersCount}</div>
            <div className="text-xs text-gray-400">Supporters</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center">
            <Target className="text-emerald-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">{project.category}</div>
            <div className="text-xs text-gray-400">Category</div>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-4 p-3 bg-green-500/10 rounded-lg border border-green-400/20">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-green-400 w-4 h-4" />
            <span className="text-sm font-bold text-green-400">Impact Achieved</span>
          </div>
          <p className="text-xs text-gray-300">{project.impact}</p>
        </div>

        {/* SDG Goals */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">UN SDG Goals:</div>
          <div className="flex flex-wrap gap-1">
            {project.sdgGoals.map((goal, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold"
          disabled={!isWalletConnected}
        >
          <Heart className="w-4 h-4 mr-2" />
          {isWalletConnected ? "Support Project" : "Connect Wallet to Support"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialProjectCard;
