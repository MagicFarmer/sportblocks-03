
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PunchLines from '@/components/PunchLines';

const AboutCallToAction = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Punch Lines */}
      <div className="my-16">
        <PunchLines style="banner" />
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=300&fit=crop" 
            alt="Team working together towards a common goal" 
            className="w-full h-48 object-cover rounded-xl mb-12"
          />
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Sport Blocks isn't just a platform. It's a movement that restores dignity, visibility, 
            and resources to those who build sport through excellence and hard work. 
            It's technology at the service of human inspiration.
          </p>
          <p className="text-lg text-slate-600 mb-12">
            We're ready to change the rules of the game.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/gallery')}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Legacy Cards
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => navigate('/marketplace')}
              size="lg"
              variant="outline"
              className="px-8 py-4 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Marketplace
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCallToAction;
