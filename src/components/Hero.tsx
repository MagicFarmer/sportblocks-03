
import { Button } from "./ui/button";
import { Play, Award, Users, Trophy, Info, Target, Eye, Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Sports Training and Athletes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop" 
          alt="Athletes training and competing in various sports" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-white drop-shadow-2xl">Sport</span>
            <span className="text-amber-400 drop-shadow-2xl">Blocks</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4">
            Revolutionizing the relationship between athletes, fans, and social impact
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed drop-shadow-lg px-4 text-gray-200">
            A Web3 platform that empowers athletes to monetize their journey, connect directly with fans, 
            and fund social causes through decentralized technology on StarkNet.
          </p>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
          <Button 
            onClick={() => navigate('/gallery')}
            size="lg"
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white text-lg sm:text-xl font-bold rounded-xl border-0 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 transform"
          >
            <Play className="mr-2 sm:mr-3" size={20} />
            Explore Legacy Cards
          </Button>
          <Button 
            onClick={() => navigate('/about')}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 border-3 border-amber-400 bg-amber-400/10 backdrop-blur-sm text-amber-300 hover:bg-amber-400 hover:text-slate-900 text-lg sm:text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-amber-400/50 transform"
          >
            <Info className="mr-2 sm:mr-3" size={20} />
            Learn More
          </Button>
        </div>

        {/* Enhanced Stats Grid - Updated with new platform stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Users className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">500+</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">Verified Athletes</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Award className="text-amber-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">50+</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">Sports Disciplines</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Trophy className="text-orange-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">Social</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">Impact Focus</div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 sm:p-12 border border-white/20 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <Eye className="text-blue-400 w-8 h-8 mx-auto" />
                <h3 className="text-lg font-bold text-white">Vision</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Leading platform at the intersection of elite sport, Web3 technology, and social impact
                </p>
              </div>
              <div className="space-y-4">
                <Flag className="text-amber-400 w-8 h-8 mx-auto" />
                <h3 className="text-lg font-bold text-white">Mission</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Empower athletes to monetize their journey and fund social causes through decentralized tools
                </p>
              </div>
              <div className="space-y-4">
                <Target className="text-orange-400 w-8 h-8 mx-auto" />
                <h3 className="text-lg font-bold text-white">Purpose</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Democratize sports and social patronage, returning the spotlight to inspiring athletes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-bounce shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
