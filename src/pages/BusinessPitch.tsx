
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusinessPitchHero from '@/components/BusinessPitch/BusinessPitchHero';
import ProblemSection from '@/components/BusinessPitch/ProblemSection';
import SolutionSection from '@/components/BusinessPitch/SolutionSection';
import TargetMarketSection from '@/components/BusinessPitch/TargetMarketSection';
import BusinessModelSection from '@/components/BusinessPitch/BusinessModelSection';
import TractionSection from '@/components/BusinessPitch/TractionSection';
import WhyNowSection from '@/components/BusinessPitch/WhyNowSection';
import PunchLines from '@/components/PunchLines';

const BusinessPitch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-green-950">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero */}
        <BusinessPitchHero />

        {/* Punch Lines */}
        <div className="mb-16">
          <PunchLines style="highlight" className="text-white" />
        </div>
        
        {/* 1. Problem */}
        <ProblemSection />
        
        {/* 2. Solution */}
        <SolutionSection />
        
        {/* 3. Target Market */}
        <TargetMarketSection />
        
        {/* 4. Business Model */}
        <BusinessModelSection />
        
        {/* Punch Lines */}
        <div className="my-16">
          <PunchLines style="banner" />
        </div>
        
        {/* 5. Traction */}
        <TractionSection />
        
        {/* 6. Why Now */}
        <WhyNowSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessPitch;
