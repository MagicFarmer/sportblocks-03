
import { useState } from "react";
import Hero from "@/components/Hero";
import WalletConnect from "@/components/WalletConnect";
import FeaturedNFTs from "@/components/FeaturedNFTs";
import FeaturedSocialProjects from "@/components/FeaturedSocialProjects";
import FeaturedFans from "@/components/FeaturedFans";
import FinancialDashboard from "@/components/FinancialDashboard";
import DynamicBanners from "@/components/DynamicBanners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useStarkNet } from "@/hooks/useStarkNet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Shield, Zap, Globe, Users, Trophy, Star, 
  Heart, HandHeart, Target, Award, 
  TrendingUp, ArrowRight, CheckCircle 
} from "lucide-react";

const Index = () => {
  const { wallet, userData } = useStarkNet();
  const isWalletConnected = wallet.isConnected && userData;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Dark gradient background */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Hero />
      </div>
      
      {/* Platform Overview Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Revolutionizing Sports Through Web3
            </h2>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Sport Blocks fosters a social business model where each interaction builds the athlete's legacy, 
              funds traceable social causes, and educates users on new technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="text-blue-600 w-16 h-16 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Athlete Empowerment</h3>
                <p className="text-slate-700 leading-relaxed">
                  Athletes control their narrative, monetize their image without intermediaries, 
                  and mobilize their community around social projects.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Heart className="text-amber-600 w-16 h-16 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Fan Engagement</h3>
                <p className="text-slate-700 leading-relaxed">
                  Fans gain access to interactive experiences, exclusive content, and digital rewards, 
                  all within an accessible and educational Web3 experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <HandHeart className="text-green-600 w-16 h-16 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-4">Social Impact</h3>
                <p className="text-slate-700 leading-relaxed">
                  Every transaction supports traceable social causes, creating meaningful impact 
                  while building lasting connections between athletes and fans.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Features Overview */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Why Sport Blocks?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Decentralized Revenue</h4>
                    <p className="text-slate-700">Athletes receive direct compensation and maintain control over their digital assets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Legacy Cards (NFTs)</h4>
                    <p className="text-slate-700">Evolving digital tokens with biographical data, multimedia, and exclusive experiences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Built on StarkNet</h4>
                    <p className="text-slate-700">Fast, secure, and low-cost transactions on Ethereum's Layer 2</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Social Transparency</h4>
                    <p className="text-slate-700">All fund flows are traceable and verifiable on the blockchain</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Global Accessibility</h4>
                    <p className="text-slate-700">Wallet-free registration with both traditional and crypto payment options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">50+ Sports Disciplines</h4>
                    <p className="text-slate-700">From football to parkour and winter sports, celebrating all athletic achievements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button
                onClick={() => navigate('/about')}
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More About Our Mission
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Banners Section */}
      <DynamicBanners />
      
      {/* Wallet Connect Section - Light blue gradient */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 py-16">
        <WalletConnect />
      </div>
      
      {/* Featured NFTs Section - Dark blue to purple gradient */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900">
        <FeaturedNFTs isWalletConnected={isWalletConnected} />
      </div>

      {/* Featured Social Projects Section - Dark green gradient */}
      <div className="bg-gradient-to-br from-slate-800 via-green-900 to-emerald-900">
        <FeaturedSocialProjects isWalletConnected={isWalletConnected} />
      </div>

      {/* Featured Fans Section - Dark purple gradient */}
      <div className="bg-gradient-to-br from-slate-800 via-purple-900 to-blue-900">
        <FeaturedFans isWalletConnected={isWalletConnected} />
      </div>

      {/* Financial Dashboard Section */}
      <FinancialDashboard />
      
      {/* Footer Section - Dark gradient */}
      <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
