
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Heart, Target, TrendingUp, Lightbulb, Rocket, CheckCircle, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CampaignBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-2xl mr-4">
              <Trophy className="text-white w-12 h-12" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">🎬 Campaign Board</h1>
              <p className="text-2xl text-amber-400 font-semibold">Sport Blocks – Building Athletes' Legacy</p>
            </div>
          </div>
        </div>

        {/* Section 1: The Problem */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Target className="text-red-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">1. THE PROBLEM</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop" 
                alt="Athletes facing challenges"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-red-400 font-semibold mb-6 text-center">
              The Gap Between Glory and Livelihood. The Yearning for Impact. The Technology Barrier.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg p-6 border border-red-400/30">
                <h3 className="text-lg font-bold text-white mb-4">For the Athlete</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  They've reached the top, but the podium doesn't guarantee stability. Prizes are finite. 
                  Sponsorships are scarce. And the connection with their fans rarely translates into direct or lasting support.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-400/30">
                <h3 className="text-lg font-bold text-white mb-4">For the Fan</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  They don't want to be just another spectator. They want to participate, to feel that their support has value. 
                  But donating without knowing where the money goes isn't enough. They want transparency, access, and a history.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
                <h3 className="text-lg font-bold text-white mb-4">For Sport and Society</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Sport is inspiration. But most inspiring athletes don't have the tools or the support to amplify their social impact. 
                  And Web3, which could be the solution, seems like a labyrinth of technical jargon, wallets, and barriers to entry.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Insights */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="text-yellow-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">2. INSIGHTS</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=400&fit=crop" 
                alt="Sports inspiration and connection"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-yellow-400 font-semibold mb-6 text-center">
              Sports Move Hearts. Transparency Moves Trust. Education Moves the Future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Insight 1",
                  content: "True fans don't just collect trophies, they collect moments. They want to be part of the athlete's journey, from their origins to their impact."
                },
                {
                  title: "Insight 2", 
                  content: "Generosity doubles when you see its effect. Seeing the real impact of a contribution—led by an athlete you admire—strengthens emotional connection and loyalty."
                },
                {
                  title: "Insight 3",
                  content: "Web3 doesn't need to look like Web3. If integrated in a human, educational, and optional way, it can be adopted by everyone, from traditional fans to digital natives."
                },
                {
                  title: "Insight 4",
                  content: "Athletes don't just compete, they lead. They are role models, changemakers, and today more than ever, they deserve tools to amplify their voice and their cause."
                }
              ].map((insight, index) => (
                <div key={index} className="bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg p-6 border border-yellow-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{insight.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{insight.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 3: The Big Idea */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Rocket className="text-purple-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">3. THE BIG IDEA</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop" 
                alt="Sport Blocks vision"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-4">"Sport Blocks: Building Athletes' Legacy"</h3>
              <p className="text-xl text-white mb-6">It's not just a dApp. It's a movement.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30 mb-6">
              <p className="text-gray-200 leading-relaxed mb-4">
                Each Sport Block is a living fragment of an athlete's legacy: collectible, shareable, and functional. 
                Each block tells a story, funds their career and their cause, and allows you to be a part of it.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                A bridge between fans and athletes. A new sports and social economy. A smooth and educational entry into the Web3 universe.
              </p>
              <p className="text-2xl font-bold text-purple-400 text-center">
                Your hero. Your impact. Your legacy too.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: The Execution */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="text-green-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">4. THE EXECUTION</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop" 
                alt="Technology and innovation"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-green-400 font-semibold mb-6 text-center">
              Invisible Technology. Human Experience. Measurable Legacy.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "● The Platform",
                  content: "Developed in Flutter with Starknet support (starknet.dart) for a fluid and accessible UX. No initial wallet required. Learn as you participate. Almost invisible transactions, thanks to Starknet's low cost and speed."
                },
                {
                  title: "● Legacy Cards",
                  content: "Low-cost NFTs with evolving content, dynamic rarity, and co-created art. Access to exclusive experiences: behind-the-scenes, geolocated milestones, and 'My Dream Team.' Categories organized into thematic albums: Heroes, Origins, Impact, and by Sport."
                },
                {
                  title: "● Social Impact",
                  content: "Each card directly funds the athlete and their social cause. 100% traceability via blockchain. Shared governance: fans can vote in the athlete's DAO."
                },
                {
                  title: "● Fan Mode",
                  content: "You can trade cards, earn badges, follow stories, and propose projects. Activate 'Learning Mode' and understand Web3 effortlessly. Fan-driven projects: from murals and events to sports projects."
                },
                {
                  title: "● The Launch",
                  content: "Olympic and continental athletes as our first ambassadors. Partnerships with federations, media outlets, and brands with a cause. Campaign with the message: 'Sport Blocks: Be part of the legacy. Support the present, build the future.'"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Potential Results */}
        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 mb-12 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Trophy className="text-amber-400 w-8 h-8 mr-4" />
              <h2 className="text-3xl font-bold text-white">5. POTENTIAL RESULTS</h2>
            </div>
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop" 
                alt="Success and achievement"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </div>
            <p className="text-xl text-amber-400 font-semibold mb-6 text-center">
              Hearts Won. Causes Supported. Heroes Empowered.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  title: "For Athletes",
                  content: "Sustainable direct income. Own voice. Active community. Global visibility."
                },
                {
                  title: "For Fans", 
                  content: "Real connection. Unique experiences. Participation in decisions. Simple Web3 education."
                },
                {
                  title: "For Social Causes",
                  content: "New sources of transparent funding. Communities mobilized by sport."
                },
                {
                  title: "For Sport Blocks",
                  content: "Positioning as a benchmark in sports innovation, social impact, and user-friendly Web3 technology."
                }
              ].map((result, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-6 border border-amber-400/30">
                  <h3 className="text-lg font-bold text-white mb-3">{result.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{result.content}</p>
                </div>
              ))}
            </div>

            {/* Cannes Recognition */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🏆 And yes… multiple Lions at Cannes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="text-amber-400 w-4 h-4" />
                    <span className="text-gray-200 text-sm">Creative use of blockchain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-amber-400 w-4 h-4" />
                    <span className="text-gray-200 text-sm">Measurable social impact</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="text-amber-400 w-4 h-4" />
                    <span className="text-gray-200 text-sm">Values-centered experience design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-amber-400 w-4 h-4" />
                    <span className="text-gray-200 text-sm">Content and gamification strategy</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-xl font-bold text-purple-400">
                And maybe… the Grand Prix for Good.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-bold rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Movement
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignBoard;
