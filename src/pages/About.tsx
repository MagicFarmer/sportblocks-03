
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, Zap, Globe, Users, Trophy, Star, ArrowRight, CheckCircle, 
  Eye, Flag, Target, Heart, Handshake, DollarSign, Settings, 
  Gamepad2, Award, Coins, BookOpen, Video, TrendingUp, 
  Layers, Wallet, BadgeCheck, HandHeart, Mail, Store
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Executive Summary */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="text-amber-400">SportBlocks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-5xl mx-auto leading-relaxed mb-12">
            A Web3 platform designed to revolutionize the relationship between athletes, fans, and social impact. 
            Through blockchain technology on StarkNet, we offer athletes a new, decentralized and sustainable revenue stream 
            while allowing fans to connect with their sports heroes in a direct and meaningful way.
          </p>
          
          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <Users className="text-blue-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Athletes</h3>
              <p className="text-gray-200">Control your narrative, monetize without intermediaries, mobilize community around social projects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <Heart className="text-amber-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">For Fans</h3>
              <p className="text-gray-200">Access interactive experiences, exclusive content, and digital rewards in an accessible Web3 environment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
              <HandHeart className="text-green-400 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Social Impact</h3>
              <p className="text-gray-200">Every interaction builds legacy, funds traceable social causes, and educates on new technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
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

      {/* Sport Blocks as Web3 Platform */}
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
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=400&fit=crop" 
                alt="Blockchain Technology" 
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

      {/* Returning Power to Athletes */}
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
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop" 
                alt="Athlete empowerment" 
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

      {/* Social Impact Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Social Impact Business Model</h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Sport Blocks operates as an impact company with transparency and traceability in the use of funds, 
              directly supporting social projects through fan-driven initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-xl">Fan-Driven Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  The platform allows fans to propose projects linked to athletes:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• Community events and sports initiatives</li>
                  <li>• Infrastructure works in sports facilities</li>
                  <li>• Collaborative content (documentaries, books, NFTs)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-xl">Community Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Participatory governance through:
                </p>
                <ul className="space-y-2 text-gray-200">
                  <li>• User-contributed multimedia content</li>
                  <li>• Voting on key project decisions</li>
                  <li>• DAO participation for community choices</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 text-center">
            <Shield className="text-amber-400 w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Transparency & Traceability</h3>
            <p className="text-gray-200 text-lg">
              Thanks to StarkNet, all income flows and destinations of funds are traceable, 
              secure, and visible on the blockchain, ensuring complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Features & Evolution */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">Platform Features</h2>
          
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

      {/* Institutional Alignment */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Global Impact Alignment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Sustainable Development Goals</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Health & Well-being</h4>
                    <p className="text-gray-200">Promote health and well-being through sport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Quality Education</h4>
                    <p className="text-gray-200">Provides digital education on Web3 and sports values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Gender Equality</h4>
                    <p className="text-gray-200">Promotes equal opportunities for athletes of all genders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Economic Growth</h4>
                    <p className="text-gray-200">Generates new forms of decent work and economic growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Olympic Agenda 2020+5</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="text-blue-400 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Athletes' Rights</h4>
                    <p className="text-gray-200">Economic and narrative empowerment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Coins className="text-amber-400 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Revenue Innovation</h4>
                    <p className="text-gray-200">Innovation in revenue models via blockchain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="text-green-400 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Digital Engagement</h4>
                    <p className="text-gray-200">Direct and educational connection with fans</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HandHeart className="text-purple-400 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-white">SDG Enablement</h4>
                    <p className="text-gray-200">Sport as an enabler of SDGs through financing social causes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
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

      <Footer />
    </div>
  );
};

export default About;
