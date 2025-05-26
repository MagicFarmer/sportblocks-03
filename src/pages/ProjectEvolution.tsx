
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
        
        {/* Fan Engagement */}
        <FanEngagementSection />
        
        {/* Fan Projects */}
        <FanProjectsSection />
        
        {/* Punch Lines */}
        <div className="my-16">
          <PunchLines style="banner" />
        </div>
        
        {/* Transparency */}
        <TransparencySection />
        
        {/* Meet & Greets */}
        <MeetGreetsSection />
        
        {/* Sport Coverage */}
        <SportCoverageSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectEvolution;
