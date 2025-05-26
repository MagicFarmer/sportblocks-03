
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FileText, Target, ArrowRight, Sparkles, TrendingUp, Zap, Rocket, DollarSign, BarChart } from "lucide-react";

const DynamicBanners = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Discover More About Sport Blocks
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Dive deeper into our platform's vision, evolution plans, investment opportunities, and active campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Executive Summary Banner */}
          <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-6 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-20 h-20 text-white/20" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <FileText className="w-16 h-16 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Executive Summary</h3>
                    <p className="text-blue-100 text-sm">Platform Overview</p>
                  </div>
                </div>
                
                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  Complete vision behind Sport Blocks - Web3 revolution in sports and strategic SDG alignment.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Platform Architecture</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Strategic Alignment</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/executive-summary')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300"
                  size="sm"
                >
                  Read Summary
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project Evolution Banner */}
          <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-6 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2">
                  <Rocket className="w-20 h-20 text-white/20" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Zap className="w-16 h-16 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Project Evolution</h3>
                    <p className="text-purple-100 text-sm">Enhancement Plans</p>
                  </div>
                </div>
                
                <p className="text-sm text-purple-100 mb-4 leading-relaxed">
                  Innovative proposals for enhanced fan engagement and transparent governance systems.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Fan Engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Tiered Interactions</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/project-evolution')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-purple-600 transition-all duration-300"
                  size="sm"
                >
                  Explore Plans
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Business Pitch Banner */}
          <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-6 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2">
                  <BarChart className="w-20 h-20 text-white/20" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <DollarSign className="w-16 h-16 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Business Pitch</h3>
                    <p className="text-orange-100 text-sm">Investment Opportunity</p>
                  </div>
                </div>
                
                <p className="text-sm text-orange-100 mb-4 leading-relaxed">
                  Comprehensive business model, market analysis, and revenue projections for investors.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Market Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Revenue Streams</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/business-pitch')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-orange-600 transition-all duration-300"
                  size="sm"
                >
                  View Pitch
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Board Banner */}
          <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <CardContent className="p-6 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2">
                  <TrendingUp className="w-20 h-20 text-white/20" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Target className="w-16 h-16 text-white/20" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Campaign Board</h3>
                    <p className="text-green-100 text-sm">Social Impact</p>
                  </div>
                </div>
                
                <p className="text-sm text-green-100 mb-4 leading-relaxed">
                  Active campaigns where athletes and fans collaborate for meaningful social impact.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Live Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                    <span className="text-xs">Impact Measurement</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/campaign-board')}
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 group-hover:bg-white group-hover:text-green-600 transition-all duration-300"
                  size="sm"
                >
                  View Campaigns
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
