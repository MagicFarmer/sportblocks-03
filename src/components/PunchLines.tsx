
import { Heart, Trophy } from "lucide-react";

interface PunchLinesProps {
  animated?: boolean;
  className?: string;
  style?: 'banner' | 'subtle' | 'highlight';
}

const PunchLines = ({ animated = false, className = "", style = 'subtle' }: PunchLinesProps) => {
  if (style === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 py-4 ${className}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white ${animated ? 'animate-fade-in' : ''}`}>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-amber-300" />
              <span className="text-lg font-semibold">"In sport we compete, in life we cooperate"</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-amber-300" />
              <span className="text-lg font-bold">#ForAthletesByAthletes</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (style === 'highlight') {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className={`space-y-4 ${animated ? 'animate-scale-in' : ''}`}>
          <p className="text-2xl font-bold text-blue-600 italic">
            "In sport we compete, in life we cooperate"
          </p>
          <p className="text-xl font-bold text-amber-500">
            #ForAthletesByAthletes
          </p>
        </div>
      </div>
    );
  }

  // Subtle style
  return (
    <div className={`border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 ${className}`}>
      <p className="text-sm text-blue-700 italic mb-1">
        "In sport we compete, in life we cooperate"
      </p>
      <p className="text-sm font-semibold text-amber-600">
        #ForAthletesByAthletes
      </p>
    </div>
  );
};

export default PunchLines;
