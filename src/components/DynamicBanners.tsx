
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FileText, Target, ArrowRight, Sparkles, TrendingUp, Zap, Rocket } from "lucide-react";

const DynamicBanners = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Discover More About Sport Blocks
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Dive deeper into our platform's vision, evolution plans, and active campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Executive Summary Banner */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-8 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-32 h-32 text-white/20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <FileText className="w-24 h-24 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Executive Summary</h3>
                    <p className="text-blue-100">Complete Platform Overview</p>
                  </div>
                </div>
                
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Discover the complete vision behind Sport Blocks - our Web3 revolution in sports, 
                  strategic alignment with global goals, and the future of athlete-fan relationships.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Platform Architecture & Technology</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Strategic SDG Alignment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Legacy Cards Ecosystem</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/executive-summary')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300"
                  size="lg"
                >
                  Read Full Summary
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Evolution Banner */}
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-8 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <Rocket className="w-32 h-32 text-white/20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Zap className="w-24 h-24 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Project Evolution</h3>
                    <p className="text-purple-100">Future Enhancement Plans</p>
                  </div>
                </div>
                
                <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                  Explore innovative proposals for enhanced fan engagement, tiered interactions, 
                  and transparent governance systems that will shape the future of SportBlocks.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Enhanced Fan Engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Tiered Meet & Greets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">GPS-Integrated Profiles</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/project-evolution')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-purple-600 transition-all duration-300"
                  size="lg"
                >
                  Explore Evolution Plans
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Board Banner */}
          <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-8 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4">
                  <TrendingUp className="w-32 h-32 text-white/20" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <Target className="w-24 h-24 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Campaign Board</h3>
                    <p className="text-green-100">Active Social Impact</p>
                  </div>
                </div>
                
                <p className="text-lg text-green-100 mb-6 leading-relaxed">
                  Explore active campaigns where athletes and fans collaborate to create meaningful 
                  social impact. Track real-time progress and join the movement.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Live Campaign Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Transparent Fund Flow</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-sm">Impact Measurement</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/campaign-board')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-green-600 transition-all duration-300"
                  size="lg"
                >
                  View Active Campaigns
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DynamicBanners;
