
import { Card, CardContent } from "@/components/ui/card";
import { Vote, Lightbulb, CheckCircle, Shield } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop" 
            alt="Digital collaboration and voting"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          Empowering fans to be active agents in shaping athlete legacies and social impact 
          through democratic participation and governance.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <Lightbulb className="text-yellow-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Project Proposal Cycle</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
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
            <p className="text-gray-200 leading-relaxed mb-4">
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
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200">Basic Democratic Vote: One vote per registered user</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-200">Community Pre-selection: Most supported projects advance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-200">DAO Final Decision: Weighted vote by Legacy Card holders</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FanProjectsSection;
