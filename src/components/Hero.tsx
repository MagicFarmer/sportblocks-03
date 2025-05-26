
import { Button } from "./ui/button";
import { Play, Award, Users, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video/Image Area */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop" 
          alt="Athletes competing" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-white">Sport</span>
            <span className="text-amber-400">Blocks</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            La plataforma definitiva para NFTs deportivos en StarkNet.
            <br />
            <span className="text-amber-400">Colecciona momentos legendarios</span> de tus atletas favoritos.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg"
            className="px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-none border-0 shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-3" size={24} />
            Explorar Colección
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-slate-900 text-xl font-semibold rounded-none transition-all duration-300 hover:scale-105"
          >
            Conocer Más
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg p-8 border border-white/20">
            <Award className="text-amber-400 w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-300 text-lg">NFTs Acuñados</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 border border-white/20">
            <Users className="text-blue-400 w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300 text-lg">Atletas Verificados</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 border border-white/20">
            <Trophy className="text-orange-400 w-12 h-12 mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">2.5M</div>
            <div className="text-gray-300 text-lg">STRK Volumen</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
