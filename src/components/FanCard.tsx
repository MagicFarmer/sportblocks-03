
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { User, Trophy, Heart, MapPin, Star, TrendingUp, Lock } from "lucide-react";
import { Fan } from "../data/mockFans";
import { useStarkNet } from "@/hooks/useStarkNet";

interface FanCardProps {
  fan: Fan;
  isWalletConnected?: boolean;
}

const FanCard = ({ fan, isWalletConnected }: FanCardProps) => {
  const { connectWallet } = useStarkNet();

  const handleConnectWallet = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await connectWallet();
  };

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
    <Card className={`transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm ${
      isWalletConnected 
        ? 'bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-400/60 hover:border-purple-400/90' 
        : 'bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-purple-400/30 hover:border-purple-400/50 opacity-75'
    }`}>
      <div className="relative">
        <img 
          src={fan.avatar} 
          alt={fan.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className={`absolute top-3 left-3 backdrop-blur-sm px-3 py-1 rounded-full border ${
          isWalletConnected 
            ? 'bg-purple-600/95 border-purple-400/50' 
            : 'bg-purple-600/60 border-purple-400/30'
        }`}>
          <span className="text-white text-xs font-bold">SPORTS PROFESSIONAL</span>
        </div>
        <div className={`absolute top-3 right-3 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border ${
          isWalletConnected 
            ? 'bg-yellow-500/95 border-yellow-400/50' 
            : 'bg-yellow-500/60 border-yellow-400/30'
        }`}>
          <Star className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-bold">PRO</span>
        </div>
        {!isWalletConnected && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] rounded-t-lg flex items-center justify-center">
            <Button
              onClick={handleConnectWallet}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-white text-xs font-medium hover:bg-white/30 transition-all duration-200"
            >
              <Lock className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-1">{fan.name}</h3>
          <div className={`bg-gradient-to-r ${getRoleColor(fan.role)} text-white px-3 py-1 rounded-full text-xs font-bold mb-2 inline-block shadow-lg`}>
            {fan.role}
          </div>
          <p className="text-gray-200 text-sm mb-3 line-clamp-2">{fan.bio}</p>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <MapPin size={14} className="text-purple-400" />
            <span>{fan.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
            <Trophy size={14} className="text-purple-400" />
            <span>{fan.yearsExperience} years experience</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className={`backdrop-blur-sm rounded-lg p-3 text-center border ${
            isWalletConnected ? 'bg-white/15 border-white/30' : 'bg-white/8 border-white/15'
          }`}>
            <Heart className={`w-5 h-5 mx-auto mb-1 ${isWalletConnected ? 'text-purple-400' : 'text-purple-400/60'}`} />
            <div className="text-lg font-bold text-white">{fan.projectsHelped}</div>
            <div className="text-xs text-gray-300">Projects Helped</div>
          </div>
          <div className={`backdrop-blur-sm rounded-lg p-3 text-center border ${
            isWalletConnected ? 'bg-white/15 border-white/30' : 'bg-white/8 border-white/15'
          }`}>
            <TrendingUp className={`w-5 h-5 mx-auto mb-1 ${isWalletConnected ? 'text-blue-400' : 'text-blue-400/60'}`} />
            <div className="text-lg font-bold text-white">${fan.totalDonated.toLocaleString()}</div>
            <div className="text-xs text-gray-300">Total Donated</div>
          </div>
        </div>

        {/* Specialties */}
        <div className={`mb-4 p-3 rounded-lg border ${
          isWalletConnected 
            ? 'bg-purple-500/25 border-purple-400/40' 
            : 'bg-purple-500/15 border-purple-400/25'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <Star className={`w-4 h-4 ${isWalletConnected ? 'text-purple-300' : 'text-purple-300/70'}`} />
            <span className={`text-sm font-bold ${isWalletConnected ? 'text-purple-300' : 'text-purple-300/70'}`}>
              Specialties
            </span>
          </div>
          <p className="text-xs text-gray-200">{fan.specialties.join(", ")}</p>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <div className="text-xs text-gray-300 mb-2 font-medium">Achievements:</div>
          <div className="flex flex-wrap gap-1">
            {fan.achievements.slice(0, 2).map((achievement, index) => (
              <span 
                key={index}
                className={`px-2 py-1 text-xs rounded-full border ${
                  isWalletConnected 
                    ? 'bg-blue-500/30 text-blue-200 border-blue-400/30' 
                    : 'bg-blue-500/20 text-blue-200/70 border-blue-400/20'
                }`}
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-4">
          <div className="text-xs text-gray-300 mb-2 font-medium">Current Projects:</div>
          <div className="text-xs text-gray-200">
            {fan.currentProjects.slice(0, 2).join(", ")}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={isWalletConnected ? () => alert(`Viewing ${fan.name}'s profile - Feature coming soon!`) : handleConnectWallet}
          className={`w-full font-bold transition-all duration-200 ${
            isWalletConnected 
              ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg" 
              : "bg-gray-600/50 text-gray-300 cursor-pointer border border-gray-500/30 hover:bg-gray-600/70"
          }`}
        >
          <User className="w-4 h-4 mr-2" />
          {isWalletConnected ? "View Professional Profile" : "Connect Wallet for Details"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FanCard;
