
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialProjectCard from '@/components/SocialProjectCard';
import { mockSocialProjects } from '@/data/mockSocialProjects';
import { useStarkNet } from '@/hooks/useStarkNet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PunchLines from '@/components/PunchLines';
import { HandHeart } from 'lucide-react';

const SocialProjects = () => {
  const { wallet, userData } = useStarkNet();
  const isWalletConnected = wallet.isConnected && userData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-teal-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-2xl mr-4">
              <HandHeart className="text-white w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Social Projects</h1>
              <p className="text-2xl text-green-300 font-semibold">Making an Impact Together</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse and support meaningful causes championed by athletes around the world. Every contribution creates traceable and verifiable impact.
          </p>

          {/* Punch Lines */}
          <div className="mt-8">
            <PunchLines style="highlight" className="text-white" />
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="justify-center bg-transparent">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">All Projects</TabsTrigger>
            <TabsTrigger value="environment" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Environment</TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Education</TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">Health</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockSocialProjects.map((project) => (
                <SocialProjectCard 
                  key={project.id} 
                  project={project} 
                  isWalletConnected={isWalletConnected}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="environment" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockSocialProjects
                .filter((project) => project.category === "environment")
                .map((project) => (
                  <SocialProjectCard 
                    key={project.id} 
                    project={project} 
                    isWalletConnected={isWalletConnected}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockSocialProjects
                .filter((project) => project.category === "education")
                .map((project) => (
                  <SocialProjectCard 
                    key={project.id} 
                    project={project} 
                    isWalletConnected={isWalletConnected}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="health" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockSocialProjects
                .filter((project) => project.category === "health")
                .map((project) => (
                  <SocialProjectCard 
                    key={project.id} 
                    project={project} 
                    isWalletConnected={isWalletConnected}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Punch Lines Banner */}
      <div className="my-12">
        <PunchLines style="banner" />
      </div>
      
      <Footer />
    </div>
  );
};

export default SocialProjects;
