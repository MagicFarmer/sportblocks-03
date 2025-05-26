
import React from 'react';
import { Shield, Eye, Globe, Zap, Users } from "lucide-react";

const StarkNetInfoSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">About StarkNet</h2>
        
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop" 
            alt="Advanced blockchain network technology" 
            className="w-full h-48 object-cover rounded-xl mb-8"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Mission & Vision</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-blue-400 mb-3">Mission</h4>
                <p className="text-gray-200">Empower people to freely implement and use any social function they desire.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-purple-400 mb-3">Vision</h4>
                <p className="text-gray-200">Build a decentralized and transparent network that facilitates social functions, ensuring integrity through mathematical proofs and distributing power equitably.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="text-blue-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Decentralization</h4>
                  <p className="text-gray-200 text-sm">Avoiding the concentration of power and authority</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="text-amber-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Transparency</h4>
                  <p className="text-gray-200 text-sm">Public and open governance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="text-green-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Neutrality</h4>
                  <p className="text-gray-200 text-sm">Open platform for all social functions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="text-purple-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Censorship Resistance</h4>
                  <p className="text-gray-200 text-sm">Interference-free transaction processing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-cyan-400 w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-white">Individual Empowerment</h4>
                  <p className="text-gray-200 text-sm">Education and culture centered on Starknet's mission and values</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarkNetInfoSection;
