
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { User, Trophy, Heart, MapPin, Star, TrendingUp } from "lucide-react";
import { Fan } from "../data/mockFans";

interface FanCardProps {
  fan: Fan;
  isWalletConnected?: boolean;
}

const FanCard = ({ fan, isWalletConnected }: FanCardProps) => {
  const getRoleColor = (role: string) => {
    const colors = {
      'Sports Nutritionist': 'from-purple-600 to-pink-600',
      'Basketball Coach': 'from-orange-600 to-red-600',
      'Sports Psychologist': 'from-indigo-600 to-purple-600',
      'Physical Therapist': 'from-teal-600 to-cyan-600',
      'Strength & Conditioning Coach': 'from-red-600 to-orange-600',
      'Team Physician': 'from-blue-600 to-indigo-600',
      'Swimming Coach': 'from-cyan-600 to-blue-600',
      'Athletic Trainer': 'from-green-600 to-teal-600',
      'Sports Scientist': 'from-violet-600 to-purple-600',
      'Equipment Specialist': 'from-gray-600 to-slate-600',
      'Recovery Specialist': 'from-emerald-600 to-green-600',
      'Tactical Analyst': 'from-yellow-600 to-orange-600',
      'Mental Performance Coach': 'from-pink-600 to-rose-600',
      'Biomechanics Engineer': 'from-blue-600 to-cyan-600',
      'Youth Development Coordinator': 'from-lime-600 to-green-600'
    };
    return colors[role as keyof typeof colors] || 'from-gray-600 to-slate-600';
  };

  return (
    <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm">
      <div className="relative">
        <img 
          src={fan.image} 
          alt={fan.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-3 bg-purple-600/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-white text-xs font-bold">SPECIAL FAN</span>
        </div>
        <div className="absolute top-3 right-3 bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-bold">PRO</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">{fan.name}</h3>
          <div className={`bg-gradient-to-r ${getRoleColor(fan.role)} text-white px-2 py-1 rounded-full text-xs font-bold mb-2 inline-block`}>
            {fan.role}
          </div>
          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{fan.description}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <MapPin size={14} />
            <span>{fan.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
            <Trophy size={14} />
            <span>{fan.yearsExperience} years experience</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center">
            <Heart className="text-purple-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">{fan.projectsHelped}</div>
            <div className="text-xs text-gray-400">Projects Helped</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 text-center">
            <TrendingUp className="text-blue-400 w-5 h-5 mx-auto mb-1" />
            <div className="text-lg font-bold text-white">${fan.totalDonated.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Total Donated</div>
          </div>
        </div>

        {/* Specialty */}
        <div className="mb-4 p-3 bg-purple-500/10 rounded-lg border border-purple-400/20">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-purple-400 w-4 h-4" />
            <span className="text-sm font-bold text-purple-400">Specialty</span>
          </div>
          <p className="text-xs text-gray-300">{fan.specialty}</p>
        </div>

        {/* Expertise Tags */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Expertise:</div>
          <div className="flex flex-wrap gap-1">
            {fan.expertise.slice(0, 3).map((expertise, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
              >
                {expertise}
              </span>
            ))}
          </div>
        </div>

        {/* Favorite Athletes */}
        <div className="mb-4">
          <div className="text-xs text-gray-400 mb-2">Supports:</div>
          <div className="text-xs text-gray-300">
            {fan.favoriteAthletes.slice(0, 2).join(", ")}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold"
          disabled={!isWalletConnected}
        >
          <User className="w-4 h-4 mr-2" />
          {isWalletConnected ? "View Fan Profile" : "Connect Wallet to View"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FanCard;
