
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Users, Trophy, Heart, Shield, Globe, Zap, 
  TrendingUp, ArrowRight, Target, Award,
  CheckCircle, Sparkles, Coins, Network
} from "lucide-react";

const ExecutiveSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-amber-300 bg-clip-text text-transparent">
              Executive Summary
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transforming sports through Web3 technology, social impact, and athlete empowerment
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Platform Overview */}
          <div className="mb-16">
            <Card className="bg-white shadow-2xl border border-blue-100 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                      Revolutionary Web3 Sports Platform
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                      Sport Blocks is a Web3 platform that transforms the relationship between athletes, fans, and social impact through the use of advanced blockchain technology. Developed on Starknet, it allows athletes to directly monetize their careers, build their digital legacy, and channel funds to social causes that represent them, all with traceability, transparency, and without intermediaries.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Shield className="text-blue-600 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Blockchain Security</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Zap className="text-amber-500 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Direct Monetization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Heart className="text-red-500 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Social Impact</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-green-500 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Global Reach</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                      alt="Digital community and Web3 technology" 
                      className="rounded-xl shadow-lg w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Legacy Cards Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl border border-blue-200">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Legacy Cards</h2>
                  <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                    Collectible digital tokens that represent the athlete's story, achievements, and values
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Trophy className="text-amber-500 w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Achievements</h3>
                    <p className="text-slate-600">Digital representation of athletic accomplishments and milestones</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Sparkles className="text-purple-500 w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Exclusive Content</h3>
                    <p className="text-slate-600">Access to immersive experiences and behind-the-scenes content</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="text-blue-500 w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Governance</h3>
                    <p className="text-slate-600">Participatory governance and social impact decision-making</p>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0101ba2fe65?w=600&h=300&fit=crop" 
                    alt="Athletes and sports equipment" 
                    className="rounded-xl shadow-lg w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/60 rounded-xl flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Legacy Cards in Action</h3>
                      <p className="text-lg">Connecting athletes with fans through meaningful digital assets</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Diagram */}
          <div className="mb-16">
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Platform Ecosystem</h2>
                
                <div className="relative">
                  {/* Central Hub */}
                  <div className="flex justify-center mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
                      <div className="text-center text-white">
                        <Network className="w-8 h-8 mx-auto mb-1" />
                        <span className="text-sm font-bold">Sport Blocks</span>
                      </div>
                    </div>
                  </div>

                  {/* Connected Elements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 rounded-xl p-6 text-center border-2 border-blue-200">
                      <Trophy className="text-blue-600 w-12 h-12 mx-auto mb-3" />
                      <h3 className="font-bold text-slate-900 mb-2">Athletes</h3>
                      <p className="text-sm text-slate-600">Direct monetization and legacy building</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
                      <Users className="text-green-600 w-12 h-12 mx-auto mb-3" />
                      <h3 className="font-bold text-slate-900 mb-2">Fans</h3>
                      <p className="text-sm text-slate-600">Engagement and governance participation</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-6 text-center border-2 border-red-200">
                      <Heart className="text-red-600 w-12 h-12 mx-auto mb-3" />
                      <h3 className="font-bold text-slate-900 mb-2">Social Causes</h3>
                      <p className="text-sm text-slate-600">Transparent funding and impact tracking</p>
                    </div>
                    <div className="bg-amber-50 rounded-xl p-6 text-center border-2 border-amber-200">
                      <Shield className="text-amber-600 w-12 h-12 mx-auto mb-3" />
                      <h3 className="font-bold text-slate-900 mb-2">Blockchain</h3>
                      <p className="text-sm text-slate-600">Security and transparency via Starknet</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Strategic Alignment */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-xl border border-green-200">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategic Alignment</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                      The project is strategically aligned with the Sustainable Development Goals (SDGs) and the 2020+ Olympic Agenda, promoting health, equity, digital education, and new forms of decent work.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Sustainable Development Goals Integration</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Olympic Agenda 2020+ Compliance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Digital Education & Inclusion</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                        <span className="text-slate-700 font-medium">Ethical Sports Economy</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop" 
                      alt="Global impact and sustainable goals" 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Statement */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white shadow-2xl border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <Target className="text-amber-400 w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
                  Sport Blocks is not just a digital platform; it is a cultural and economic revolution in sports, 
                  where every fan can become a patron, every athlete a social leader, and every action a legacy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <Coins className="text-amber-400 w-10 h-10 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-2">Fans as Patrons</h3>
                    <p className="text-gray-300">Direct support and meaningful engagement</p>
                  </div>
                  <div>
                    <Award className="text-amber-400 w-10 h-10 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-2">Athletes as Leaders</h3>
                    <p className="text-gray-300">Social impact and community building</p>
                  </div>
                  <div>
                    <TrendingUp className="text-amber-400 w-10 h-10 mx-auto mb-3" />
                    <h3 className="text-lg font-bold mb-2">Actions as Legacy</h3>
                    <p className="text-gray-300">Every interaction builds lasting impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-white shadow-xl border border-blue-200">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Ready to Join the Revolution?
                </h2>
                <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                  Discover how Sport Blocks is transforming the sports industry through Web3 technology and social impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate('/gallery')}
                    size="lg"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Explore Legacy Cards
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Button
                    onClick={() => navigate('/campaign-board')}
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    View Campaign Board
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExecutiveSummary;
