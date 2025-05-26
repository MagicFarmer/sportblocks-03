
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, CheckCircle, Users, Globe, Code, Trophy } from "lucide-react";

const TractionSection = () => {
  const achievements = [
    {
      icon: Code,
      title: "Functional MVP",
      description: "Flutter + Starknet platform ready for deployment",
      status: "Completed"
    },
    {
      icon: Trophy,
      title: "Athlete Partnerships",
      description: "Pilot testing with Olympic athletes in Costa Rica",
      status: "In Progress"
    },
    {
      icon: Globe,
      title: "Sports Coverage",
      description: "Validated list of 50+ sports with thematic album structure",
      status: "Completed"
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Fan projects and governance systems structured",
      status: "Completed"
    }
  ];

  const milestones = [
    { phase: "Q1 2024", achievement: "MVP Development", status: "completed" },
    { phase: "Q2 2024", achievement: "Pilot Launch", status: "current" },
    { phase: "Q3 2024", achievement: "Costa Rica Expansion", status: "planned" },
    { phase: "Q4 2024", achievement: "Regional Scaling", status: "planned" }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🔧 <span className="ml-3">Traction & Roadmap</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Proven progress and clear path to market leadership
        </p>
      </div>

      {/* Current Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const isCompleted = achievement.status === "Completed";
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${isCompleted ? 'bg-green-500/20' : 'bg-amber-500/20'}`}>
                    <Icon className={`w-8 h-8 ${isCompleted ? 'text-green-400' : 'text-amber-400'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      {isCompleted && <CheckCircle className="text-green-400 w-5 h-5" />}
                    </div>
                    <p className="text-gray-200 mb-3 leading-relaxed">{achievement.description}</p>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      isCompleted 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {achievement.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Roadmap Timeline */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-purple-400/30">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Development Roadmap</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center">
              <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                milestone.status === 'completed' ? 'bg-green-500' :
                milestone.status === 'current' ? 'bg-amber-500' : 'bg-gray-500'
              }`}>
                {milestone.status === 'completed' && <CheckCircle className="text-white w-6 h-6" />}
                {milestone.status === 'current' && <Rocket className="text-white w-6 h-6" />}
                {milestone.status === 'planned' && <span className="text-white font-bold">{index + 1}</span>}
              </div>
              <h4 className="text-white font-bold mb-2">{milestone.phase}</h4>
              <p className="text-gray-200 text-sm">{milestone.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TractionSection;
