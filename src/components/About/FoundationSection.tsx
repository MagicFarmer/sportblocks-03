
import React from 'react';
import { Eye, Flag, Target } from "lucide-react";

const FoundationSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Our Foundation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center">
            <Eye className="text-blue-600 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
            <p className="text-slate-700 leading-relaxed">
              To be the leading platform at the intersection of elite sport, Web3 technology, and social impact, 
              redefining the way athletes build and share their legacy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center">
            <Flag className="text-amber-600 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Mission</h3>
            <p className="text-slate-700 leading-relaxed">
              To empower athletes around the world to monetize their athletic journey, connect directly with their fans, 
              and fund social causes through fair, traceable, and accessible digital tools.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-center">
            <Target className="text-orange-600 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Purpose</h3>
            <p className="text-slate-700 leading-relaxed">
              To democratize sports and social patronage through decentralized technology, 
              returning the spotlight to those who inspire with their effort and values: the athletes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
