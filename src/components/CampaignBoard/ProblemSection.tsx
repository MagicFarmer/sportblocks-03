
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

const ProblemSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Target className="text-red-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">1. THE PROBLEM</h2>
        </div>
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop" 
            alt="Athletes facing financial and support challenges"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>
        <p className="text-xl text-red-400 font-semibold mb-6 text-center">
          The Gap Between Glory and Livelihood. The Yearning for Impact. The Technology Barrier.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-400/30">
            <h3 className="text-lg font-bold text-white mb-4">For the Athlete</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              They've reached the top, but the podium doesn't guarantee stability. Prizes are finite. 
              Sponsorships are scarce. And the connection with their fans rarely translates into direct or lasting support.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
            <h3 className="text-lg font-bold text-white mb-4">For the Fan</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              They don't want to be just another spectator. They want to participate, to feel that their support has value. 
              But donating without knowing where the money goes isn't enough. They want transparency, access, and a history.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <h3 className="text-lg font-bold text-white mb-4">For Sport and Society</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Sport is inspiration. But most inspiring athletes don't have the tools or the support to amplify their social impact. 
              And Web3, which could be the solution, seems like a labyrinth of technical jargon, wallets, and barriers to entry.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProblemSection;
