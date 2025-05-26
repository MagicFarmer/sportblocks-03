
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, Globe, Users, Trophy, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            About <span className="text-amber-400">SportBlocks</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            The first decentralized platform for sports NFTs on StarkNet, 
            where legendary sports moments become unique digital assets.
          </p>
        </div>
      </section>

      {/* What is SportBlocks */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                What is SportBlocks?
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                SportBlocks is a revolutionary platform that combines passion for sports 
                with the most advanced blockchain technology. We create unique NFTs that capture 
                the most exciting and historic moments in the sports world.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Blockchain-verified authenticity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Direct collaboration with athletes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-slate-700 font-medium">Cutting-edge StarkNet technology</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-blue-100">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop" 
                alt="Sports technology" 
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technological Innovation</h3>
              <p className="text-slate-600">
                We use StarkNet to guarantee fast, secure transactions with low fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-xl">Guaranteed Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  All NFTs are protected by StarkNet's robust security, 
                  guaranteeing the authenticity and ownership of each digital asset.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <CardTitle className="text-xl">Fast Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Enjoy instant transactions with minimal fees thanks 
                  to StarkNet's Layer 2 technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <CardTitle className="text-xl">Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Join a global community of sports collectors and 
                  share your passion for epic sports moments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Trophy className="w-12 h-12 text-orange-400 mb-4" />
                <CardTitle className="text-xl">Verified Athletes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We collaborate directly with professional athletes to create 
                  authentic NFTs of their best sports moments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Star className="w-12 h-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl">Unique Rarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Each NFT has different rarity levels, from common to 
                  legendary, increasing their value and exclusivity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardHeader>
                <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-xl">Global Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Platform accessible from anywhere in the world, 
                  democratizing access to the most iconic sports moments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-amber-100 via-orange-50 to-red-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to start your collection?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Join SportBlocks and start collecting the most epic sports moments in history.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => navigate('/gallery')}
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Collection
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
