
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Trophy, Medal, Globe } from "lucide-react";

const Athletes = () => {
  const athleteNFTs = [
    {
      id: 1,
      title: "Perfect Gymnastics Routine",
      athlete: "Simone Biles",
      sport: "Gymnastics",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      description: "Flawless execution in women's floor exercise"
    },
    {
      id: 2,
      title: "Olympic Skiing Gold",
      athlete: "Mikaela Shiffrin",
      sport: "Alpine Skiing",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      description: "Record-breaking slalom performance"
    },
    {
      id: 3,
      title: "Swimming Championship",
      athlete: "Katie Ledecky",
      sport: "Swimming",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
      description: "Dominant freestyle swimming victory"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-2xl mr-4">
              <Trophy className="text-white w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Athletes Gallery</h1>
              <p className="text-2xl text-amber-300 font-semibold">Exclusive NFT Collections</p>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover verified athletes and their exclusive NFT collections showcasing iconic sporting moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {athleteNFTs.map((nft) => (
            <Card key={nft.id} className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-400/60 hover:border-purple-400/90 transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm">
              <div className="relative">
                <img 
                  src={nft.image} 
                  alt={nft.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold flex items-center gap-1">
                    <Medal className="w-3 h-3" />
                    VERIFIED ATHLETE
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border border-purple-400/50">
                  <Star className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-bold">NFT</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{nft.title}</h3>
                <p className="text-amber-300 font-semibold mb-2">{nft.athlete}</p>
                <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                  <Globe size={14} className="text-purple-400" />
                  <span>{nft.sport}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{nft.description}</p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">Coming Soon</div>
                    <div className="text-xs text-gray-300">NFT Collection Launch</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
          <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Athletes Directory Coming Soon</h2>
          <p className="text-gray-300 text-lg mb-6">
            We're building the world's most comprehensive verified athlete directory. 
            Connect directly with Olympic champions, professional athletes, and rising stars.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <Star className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h3 className="font-bold text-white mb-2">Verified Athletes</h3>
              <p className="text-gray-400 text-sm">Direct authentication with Olympic committees and sports federations</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <Medal className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h3 className="font-bold text-white mb-2">Exclusive NFTs</h3>
              <p className="text-gray-400 text-sm">Limited edition digital collectibles from iconic sporting moments</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <Globe className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h3 className="font-bold text-white mb-2">Global Reach</h3>
              <p className="text-gray-400 text-sm">Athletes from every sport and continent represented</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Athletes;
