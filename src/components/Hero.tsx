
import { Button } from "./ui/button";
import { Play, Award, Users, Trophy, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Greek Olympic Runners */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/80 z-10"></div>
        <img 
          src="/lovable-uploads/cb48ca98-3796-4b8b-a77f-463f20642d6a.png" 
          alt="Greek Olympic Runners" 
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
          <p className="text-lg sm:text-2xl md:text-3xl font-light mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-4">
            The ultimate platform for sports NFTs on StarkNet.
            <br />
            <span className="text-amber-300 font-medium">Collect legendary moments</span> from your favorite athletes.
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
            Explore Collection
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

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Award className="text-amber-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">10K+</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">NFTs Minted</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Users className="text-blue-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">500+</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">Verified Athletes</div>
          </div>
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-6 sm:p-8 border border-white/30 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105">
            <Trophy className="text-orange-400 w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 drop-shadow-lg" />
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-md">2.5M</div>
            <div className="text-gray-200 text-base sm:text-lg font-medium">STRK Volume</div>
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
