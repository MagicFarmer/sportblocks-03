
import { useState } from "react";
import { ArrowRight, Trophy, Users, Target } from "lucide-react";
import { Button } from "./ui/button";
import { useStarkNet } from "@/hooks/useStarkNet";

const Hero = () => {
  const { connectWallet, wallet } = useStarkNet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectWallet = async () => {
    if (wallet.isConnected) return;
    
    setIsConnecting(true);
    try {
      await connectWallet();
    } finally {
      setIsConnecting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop"
          alt="Sports background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Sport Blocks
            </span>
            <br />
            Building Athletes' Legacy
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Connect with your favorite athletes, collect exclusive digital moments, 
            and support meaningful causes through blockchain technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Vision</h3>
            <p className="text-gray-300 text-sm">
              Empowering athletes to build lasting legacies while creating meaningful connections with their communities.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mission</h3>
            <p className="text-gray-300 text-sm">
              Bridging the gap between fans and athletes through transparent, impactful digital collectibles and social initiatives.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Purpose</h3>
            <p className="text-gray-300 text-sm">
              Creating sustainable income streams for athletes while funding educational and social projects worldwide.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleConnectWallet}
            disabled={isConnecting || wallet.isConnected}
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            {isConnecting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Connecting...
              </>
            ) : wallet.isConnected ? (
              "✓ Wallet Connected"
            ) : (
              <>
                Connect Wallet
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
          
          <Button
            onClick={() => scrollToSection('gallery')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm"
          >
            Explore Collections
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
            <div className="text-gray-400 text-sm">Athletes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
            <div className="text-gray-400 text-sm">NFTs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">$2M+</div>
            <div className="text-gray-400 text-sm">Raised</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
