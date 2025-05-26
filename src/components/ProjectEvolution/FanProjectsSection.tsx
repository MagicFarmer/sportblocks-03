
import { Card, CardContent } from "@/components/ui/card";
import { Vote, Lightbulb, CheckCircle, Shield, Users, TrendingUp } from "lucide-react";

const FanProjectsSection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Vote className="text-green-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">2. Fan-Driven Projects and Voting System</h2>
        </div>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=400&fit=crop" 
            alt="Democratic voting and community decision making process"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          Empowering fans to be active agents in shaping athlete legacies and social impact 
          through democratic participation and governance.
        </p>

        {/* Governance Flow Chart */}
        <div className="mb-8 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-400/30">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Democratic Governance Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="text-white w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-sm mb-2">1. PROPOSAL</h4>
              <p className="text-gray-300 text-xs">Fans submit project ideas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Users className="text-white w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-sm mb-2">2. COMMUNITY</h4>
              <p className="text-gray-300 text-xs">Public review & feedback</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Vote className="text-white w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-sm mb-2">3. VOTING</h4>
              <p className="text-gray-300 text-xs">Democratic selection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-sm mb-2">4. EXECUTION</h4>
              <p className="text-gray-300 text-xs">Project implementation</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg p-6 border border-yellow-400/30">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-yellow-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Project Proposal Cycle</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Fans can submit project proposals through the dApp, detailing the project title, 
              involved athlete(s), category (Social Impact, Fan Experience), description, 
              target amount, and proposed rewards. Proponents must own at least one Legacy Card.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-cyan-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Community Review & Voting</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Proposals are published in an "Ideas Pool" for community likes and comments. 
              Athlete-approved ideas proceed to voting. Any registered user can vote and 
              receives a free, soulbound "Project Support Card" NFT.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
            <div className="flex items-center mb-4">
              <Shield className="text-pink-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Tiered Governance System</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-500/20 rounded-lg p-4">
                <h4 className="font-bold text-blue-300 mb-2">Basic Democratic</h4>
                <p className="text-gray-300 text-sm">One vote per registered user</p>
              </div>
              <div className="bg-green-500/20 rounded-lg p-4">
                <h4 className="font-bold text-green-300 mb-2">Community Pre-selection</h4>
                <p className="text-gray-300 text-sm">Most supported projects advance</p>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-4">
                <h4 className="font-bold text-purple-300 mb-2">DAO Final Decision</h4>
                <p className="text-gray-300 text-sm">Weighted vote by Legacy Card holders</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FanProjectsSection;
