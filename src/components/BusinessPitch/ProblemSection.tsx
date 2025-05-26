
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, HeartCrack, Lock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Athlete Monetization Gap",
      description: "Athletes without sponsorship or sustainable monetization mechanisms struggle to maintain their careers."
    },
    {
      icon: Users,
      title: "Disconnected Fans",
      description: "Fans lack authentic ways to participate beyond passive consumption of sports content."
    },
    {
      icon: HeartCrack,
      title: "Fragmented Social Impact",
      description: "Social initiatives lack traceability and community engagement, limiting their effectiveness."
    },
    {
      icon: Lock,
      title: "Web3 Accessibility Barrier",
      description: "Web3 remains inaccessible to millions due to complexity and technical language."
    }
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
          🔍 <span className="ml-3">The Problem</span>
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Current challenges facing athletes, fans, and the sports ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-500/20 p-3 rounded-xl">
                    <Icon className="text-red-400 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProblemSection;
