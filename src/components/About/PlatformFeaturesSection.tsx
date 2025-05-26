
import React from 'react';
import { Wallet, Store, Gamepad2, BookOpen, Globe, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformFeaturesSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Platform Features</h2>
        
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=300&fit=crop" 
            alt="Modern digital platform interface showcasing various features" 
            className="w-full h-48 object-cover rounded-xl mb-8"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <Wallet className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Flexible Access</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Wallet-free registration</li>
                <li>• Traditional and crypto payments</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <Store className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Card exchange marketplace</li>
                <li>• Achievement badges</li>
                <li>• Themed albums (Heroes, Origins, Impact)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <Gamepad2 className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Gamification</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Dream Team of athletes</li>
                <li>• Community challenges</li>
                <li>• Interactive experiences</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-amber-600 mb-4" />
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• "Web3 Learning Mode" for fans</li>
                <li>• Sports values education</li>
                <li>• Technology tutorials</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <Globe className="w-12 h-12 text-orange-600 mb-4" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• 50+ sports disciplines</li>
                <li>• Focus on LATAM expansion</li>
                <li>• Partnership opportunities</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl border border-blue-100">
            <CardHeader>
              <Star className="w-12 h-12 text-red-600 mb-4" />
              <CardTitle>Future Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-slate-700">
                <li>• Metaverse integration</li>
                <li>• Augmented reality experiences</li>
                <li>• Decentralized sports voting</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
