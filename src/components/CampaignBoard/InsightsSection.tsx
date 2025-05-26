
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      title: "Insight 1",
      content: "True fans don't just collect trophies, they collect moments. They want to be part of the athlete's journey, from their origins to their impact."
    },
    {
      title: "Insight 2", 
      content: "Generosity doubles when you see its effect. Seeing the real impact of a contribution—led by an athlete you admire—strengthens emotional connection and loyalty."
    },
    {
      title: "Insight 3",
      content: "Web3 doesn't need to look like Web3. If integrated in a human, educational, and optional way, it can be adopted by everyone, from traditional fans to digital natives."
    },
    {
      title: "Insight 4",
      content: "Athletes don't just compete, they lead. They are role models, changemakers, and today more than ever, they deserve tools to amplify their voice and their cause."
    }
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Lightbulb className="text-yellow-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">2. INSIGHTS</h2>
        </div>
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=400&fit=crop" 
            alt="Sports inspiration and connection"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <p className="text-xl text-yellow-400 font-semibold mb-6 text-center">
          Sports Move Hearts. Transparency Moves Trust. Education Moves the Future.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg p-6 border border-yellow-400/30">
              <h3 className="text-lg font-bold text-white mb-3">{insight.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{insight.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightsSection;
