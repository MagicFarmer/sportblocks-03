
import React from 'react';
import { Users, Globe, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SocialImpactSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Social Impact Business Model</h2>
        
        <div className="text-center mb-12">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=300&fit=crop" 
            alt="Community working together on social impact projects" 
            className="w-full h-48 object-cover rounded-xl mb-8"
          />
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Sport Blocks operates as an impact company with transparency and traceability in the use of funds, 
            directly supporting social projects through fan-driven initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <CardTitle className="text-xl">Fan-Driven Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">
                The platform allows fans to propose projects linked to athletes:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• Community events and sports initiatives</li>
                <li>• Infrastructure works in sports facilities</li>
                <li>• Collaborative content (documentaries, books, NFTs)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <Globe className="w-12 h-12 text-green-400 mb-4" />
              <CardTitle className="text-xl">Community Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-200 mb-4">
                Participatory governance through:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>• User-contributed multimedia content</li>
                <li>• Voting on key project decisions</li>
                <li>• DAO participation for community choices</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center">
          <Shield className="text-amber-400 w-16 h-16 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Transparency & Traceability</h3>
          <p className="text-gray-200 text-lg">
            Thanks to StarkNet, all income flows and destinations of funds are traceable, 
            secure, and visible on the blockchain, ensuring complete transparency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialImpactSection;
