
import React from 'react';
import { Zap, Shield, Layers, BadgeCheck, Video, Star, HandHeart, TrendingUp } from "lucide-react";

const Web3PlatformSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Web3 Sports Platform</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Built on StarkNet</h3>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Sport Blocks is built on StarkNet, a second-layer network on Ethereum that enables 
              fast, low-cost, and secure transactions. Through an accessible interface built in Cairo, 
              it enables a seamless, cross-platform native experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="text-yellow-400 w-6 h-6" />
                <span className="text-gray-200">Fast transactions with minimal fees</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-green-400 w-6 h-6" />
                <span className="text-gray-200">Secure blockchain infrastructure</span>
              </div>
              <div className="flex items-center space-x-3">
                <Layers className="text-blue-400 w-6 h-6" />
                <span className="text-gray-200">Layer 2 scalability</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
            <img 
              src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=500&h=400&fit=crop" 
              alt="Advanced blockchain network visualization" 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h4 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h4>
            <p className="text-gray-200">
              Leveraging StarkNet's advanced zkSTARK technology for unprecedented security and scalability.
            </p>
          </div>
        </div>

        {/* Legacy Cards Section */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Legacy Cards - Digital Tokens</h3>
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=300&fit=crop" 
              alt="Digital NFT cards representing athlete legacy" 
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
          </div>
          <p className="text-xl text-gray-200 text-center mb-12 max-w-4xl mx-auto">
            Each athlete creates their Legacy Card, an evolving digital token that acts as an NFT, 
            building their digital legacy and connecting them with fans.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <BadgeCheck className="text-blue-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Biographical Data</h4>
              <p className="text-gray-300 text-sm">Complete athlete profiles and achievements</p>
            </div>
            <div className="text-center">
              <Video className="text-purple-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Multimedia Galleries</h4>
              <p className="text-gray-300 text-sm">Exclusive photos, videos, and content</p>
            </div>
            <div className="text-center">
              <Star className="text-amber-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Exclusive Experiences</h4>
              <p className="text-gray-300 text-sm">Access to special events and interactions</p>
            </div>
            <div className="text-center">
              <HandHeart className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Social Projects</h4>
              <p className="text-gray-300 text-sm">Links to athlete-supported causes</p>
            </div>
            <div className="text-center">
              <TrendingUp className="text-orange-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Dynamic Rarities</h4>
              <p className="text-gray-300 text-sm">Rarity based on performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3PlatformSection;
