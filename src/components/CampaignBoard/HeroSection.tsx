
import { Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-2xl mr-4">
          <Trophy className="text-white w-12 h-12" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white mb-2">🎬 Campaign Board</h1>
          <p className="text-2xl text-amber-400 font-semibold">Sport Blocks – Building Athletes' Legacy</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
