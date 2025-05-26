
import React from 'react';
import { DollarSign, Settings, Trophy } from "lucide-react";

const AthleteEmpowermentSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Empowering Athletes</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Athlete-Centric Model</h3>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              Sport Blocks proposes an athlete-centric governance and monetization model 
              that puts control back in the hands of the athletes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <DollarSign className="text-green-600 w-8 h-8 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Direct Revenue</h4>
                  <p className="text-slate-700">Each card sale allocates a percentage directly to the athlete and their selected social project</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Settings className="text-blue-600 w-8 h-8 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">DAO Control</h4>
                  <p className="text-slate-700">Athletes maintain control over their DAO, card issuance, and validation of fan-proposed projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="text-amber-600 w-8 h-8 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Digital Legacy</h4>
                  <p className="text-slate-700">Sporting history immortalized in artistic and customizable digital formats</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-orange-100">
            <img 
              src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&h=400&fit=crop" 
              alt="Athletes taking control of their digital presence" 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Taking Control</h4>
            <p className="text-slate-600">
              Athletes control their narrative, monetize their image without intermediaries, 
              and mobilize their community around meaningful social projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthleteEmpowermentSection;
