
import { Zap } from "lucide-react";

const ProjectEvolutionHero = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-2xl shadow-2xl mr-4">
          <Zap className="text-white w-12 h-12" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-white mb-2">🚀 Project Evolution</h1>
          <p className="text-2xl text-purple-400 font-semibold">Enhancement Ideas and Future Proposals</p>
        </div>
      </div>
      
      <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
        This section outlines key ideas and proposals for enhancing the SportBlocks ecosystem, 
        focusing on fan engagement, platform functionality, and transparent impact initiatives.
      </p>
    </div>
  );
};

export default ProjectEvolutionHero;
