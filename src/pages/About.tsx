
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/About/AboutHero";
import FoundationSection from "@/components/About/FoundationSection";
import Web3PlatformSection from "@/components/About/Web3PlatformSection";
import AthleteEmpowermentSection from "@/components/About/AthleteEmpowermentSection";
import SocialImpactSection from "@/components/About/SocialImpactSection";
import PlatformFeaturesSection from "@/components/About/PlatformFeaturesSection";
import StarkNetInfoSection from "@/components/About/StarkNetInfoSection";
import AboutCallToAction from "@/components/About/AboutCallToAction";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <AboutHero />
        <FoundationSection />
        <Web3PlatformSection />
        <AthleteEmpowermentSection />
        <SocialImpactSection />
        <PlatformFeaturesSection />
        <StarkNetInfoSection />
        <AboutCallToAction />
      </div>

      <Footer />
    </div>
  );
};

export default About;
