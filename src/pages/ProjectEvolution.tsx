
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectEvolutionHero from '@/components/ProjectEvolution/ProjectEvolutionHero';
import FanEngagementSection from '@/components/ProjectEvolution/FanEngagementSection';
import FanProjectsSection from '@/components/ProjectEvolution/FanProjectsSection';
import TransparencySection from '@/components/ProjectEvolution/TransparencySection';
import MeetGreetsSection from '@/components/ProjectEvolution/MeetGreetsSection';
import SportCoverageSection from '@/components/ProjectEvolution/SportCoverageSection';
import PunchLines from '@/components/PunchLines';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Trophy, Target } from "lucide-react";

const ProjectEvolution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero */}
        <ProjectEvolutionHero />

        {/* Punch Lines */}
        <div className="mb-16">
          <PunchLines style="highlight" className="text-white" />
        </div>
        
        {/* 1. Fan Engagement */}
        <FanEngagementSection />
        
        {/* 2. Fan Projects */}
        <FanProjectsSection />
        
        {/* 3. Meet & Greets */}
        <MeetGreetsSection />
        
        {/* 4. Sport Coverage */}
        <SportCoverageSection />

        {/* Punch Lines */}
        <div className="my-16">
          <PunchLines style="banner" />
        </div>
        
        {/* 5. Transparency */}
        <TransparencySection />

        {/* 6. SportBlocks Foundation */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Heart className="text-pink-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">6. SPORTBLOCKS FOUNDATION</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop" 
                alt="Foundation supporting athletes and technology education"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-pink-400 font-semibold mb-6 text-center">
              Technology + Sport Education. Social Action for and by Athletes.
            </p>
            
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg p-6 border border-pink-400/30">
              <h3 className="text-xl font-bold text-white mb-4">Foundation Mission</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                The SportBlocks Foundation is dedicated to supporting social projects that combine technology education 
                with sports development, creating opportunities for athletes to become leaders in their communities 
                through digital literacy and social impact initiatives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <Users className="text-blue-400 w-6 h-6 mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Technology Education</h4>
                  <p className="text-gray-200 text-sm">
                    Provide Web3 and blockchain education to athletes and sports communities, 
                    enabling them to leverage technology for social good.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <Heart className="text-pink-400 w-6 h-6 mb-3" />
                  <h4 className="text-lg font-bold text-white mb-2">Social Action</h4>
                  <p className="text-gray-200 text-sm">
                    Support athlete-led initiatives that combine sports development with 
                    community building and social impact projects.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectEvolution;
