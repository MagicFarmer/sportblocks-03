
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Award, Link, Database, Lock, CheckCircle2 } from "lucide-react";

const TransparencySection = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex items-center mb-6">
          <Shield className="text-green-400 w-8 h-8 mr-4" />
          <h2 className="text-3xl font-bold text-white">5. Public Traceability and Transparency</h2>
        </div>
        
        <div className="mb-6">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop" 
            alt="Colorful blockchain code visualization on computer monitor showing transparency systems"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          Leveraging blockchain technology for absolute transparency and traceability of funds, 
          ensuring every contribution creates measurable impact.
        </p>

        {/* Blockchain Flow Visualization */}
        <div className="mb-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-400/30">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Transparency Architecture</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4 mb-2">
                <Database className="text-white w-8 h-8" />
              </div>
              <span className="text-gray-300 text-sm text-center">On-Chain<br/>Recording</span>
            </div>
            
            <div className="text-cyan-400 text-3xl">→</div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-4 mb-2">
                <Lock className="text-white w-8 h-8" />
              </div>
              <span className="text-gray-300 text-sm text-center">Immutable<br/>Storage</span>
            </div>
            
            <div className="text-green-400 text-3xl">→</div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 mb-2">
                <Eye className="text-white w-8 h-8" />
              </div>
              <span className="text-gray-300 text-sm text-center">Public<br/>Verification</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 border border-blue-400/30">
            <div className="flex items-center mb-4">
              <Link className="text-cyan-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Open and Transparent Funding</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              Every Legacy Card acquisition or project contribution is publicly and immutably 
              recorded on the Starknet blockchain. Anyone can view the origin, exact amount, 
              and initial destination of contributions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-cyan-400 w-4 h-4" />
                <span className="text-cyan-200 text-sm">Real-time transaction tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-cyan-400 w-4 h-4" />
                <span className="text-cyan-200 text-sm">Public ledger accessibility</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-cyan-400 w-4 h-4" />
                <span className="text-cyan-200 text-sm">Automated fund distribution</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
            <div className="flex items-center mb-4">
              <Eye className="text-emerald-400 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-white">Public Impact Traceability</h3>
            </div>
            <p className="text-gray-200 leading-relaxed mb-4">
              The blockchain tracks the complete journey of funds from initial contribution 
              to real-world project materialization. Every fund release for DAO-approved 
              projects is publicly recorded.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4" />
                <span className="text-emerald-200 text-sm">End-to-end fund tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4" />
                <span className="text-emerald-200 text-sm">DAO governance records</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-emerald-400 w-4 h-4" />
                <span className="text-emerald-200 text-sm">Impact measurement data</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
          <div className="flex items-center mb-4">
            <Award className="text-pink-400 w-6 h-6 mr-3" />
            <h3 className="text-xl font-bold text-white">Recognition of Contributors</h3>
          </div>
          <p className="text-gray-200 leading-relaxed mb-4">
            SportBlocks acknowledges all stakeholders for their contributions to successful impact initiatives: 
            athletes, the fan community, project proposers, the Athlete's Impact DAO, and execution partners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-3 bg-purple-500/20 rounded-lg">
              <span className="text-purple-300 text-sm font-medium">Athletes</span>
            </div>
            <div className="text-center p-3 bg-pink-500/20 rounded-lg">
              <span className="text-pink-300 text-sm font-medium">Fans</span>
            </div>
            <div className="text-center p-3 bg-blue-500/20 rounded-lg">
              <span className="text-blue-300 text-sm font-medium">DAO Members</span>
            </div>
            <div className="text-center p-3 bg-green-500/20 rounded-lg">
              <span className="text-green-300 text-sm font-medium">Partners</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransparencySection;
