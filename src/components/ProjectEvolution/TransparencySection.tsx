
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Award, Link } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
            alt="Blockchain transparency and technology"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-lg">
          Leveraging blockchain technology for absolute transparency and traceability of funds, 
          ensuring every contribution creates measurable impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            <div className="bg-cyan-400/20 rounded-lg p-3">
              <p className="text-sm text-cyan-200">On-Chain Recording • Public Ledger • Automated Distribution</p>
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
            <div className="bg-emerald-400/20 rounded-lg p-3">
              <p className="text-sm text-emerald-200">End-to-End Tracking • DAO Management • Public Records</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-400/30">
          <div className="flex items-center mb-4">
            <Award className="text-pink-400 w-6 h-6 mr-3" />
            <h3 className="text-xl font-bold text-white">Recognition of Contributors</h3>
          </div>
          <p className="text-gray-200 leading-relaxed">
            SportBlocks acknowledges all stakeholders for their contributions to successful impact initiatives: 
            athletes, the fan community, project proposers, the Athlete's Impact DAO, and execution partners. 
            Every contribution is recognized and permanently recorded.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransparencySection;
