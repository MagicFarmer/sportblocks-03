
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/CampaignBoard/HeroSection';
import BigIdeaSection from '@/components/CampaignBoard/BigIdeaSection';
import ProblemSection from '@/components/CampaignBoard/ProblemSection';
import ExecutionSection from '@/components/CampaignBoard/ExecutionSection';
import InsightsSection from '@/components/CampaignBoard/InsightsSection';
import PotentialResultsSection from '@/components/CampaignBoard/PotentialResultsSection';
import PunchLines from '@/components/PunchLines';

const CampaignBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-blue-950">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero */}
        <HeroSection />

        {/* Punch Lines */}
        <div className="mb-16">
          <PunchLines style="highlight" className="text-white" />
        </div>
        
        {/* 1. Problem */}
        <ProblemSection />
        
        {/* 2. Insights */}
        <InsightsSection />
        
        {/* Punch Lines */}
        <div className="my-16">
          <PunchLines style="banner" />
        </div>
        
        {/* 3. Big Idea */}
        <BigIdeaSection />
        
        {/* 4. Execution */}
        <ExecutionSection />
        
        {/* 5. Potential Results */}
        <PotentialResultsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default CampaignBoard;
