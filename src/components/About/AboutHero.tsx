
import React from 'react';
import { Users, Heart, HandHeart } from "lucide-react";
import PunchLines from '@/components/PunchLines';

const AboutHero = () => {
  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-16">
        {/* Hero Section with Executive Summary */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              About <span className="text-amber-400">SportBlocks</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-12">
              A Web3 platform designed to revolutionize the relationship between athletes, fans, and social impact. 
              Through blockchain technology on StarkNet, we offer athletes a new, decentralized and sustainable revenue stream 
              while allowing fans to connect with their sports heroes in a direct and meaningful way.
            </p>
            
            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <Users className="text-blue-400 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">For Athletes</h3>
                <p className="text-gray-200">Control your narrative, monetize without intermediaries, mobilize community around social projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <Heart className="text-amber-400 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">For Fans</h3>
                <p className="text-gray-200">Access interactive experiences, exclusive content, and digital rewards in an accessible Web3 environment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <HandHeart className="text-green-400 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Social Impact</h3>
                <p className="text-gray-200">Every interaction builds legacy, funds traceable social causes, and educates on new technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Punch Lines */}
        <div className="mt-8">
          <PunchLines style="highlight" className="text-white" />
        </div>
      </div>
    </>
  );
};

export default AboutHero;
