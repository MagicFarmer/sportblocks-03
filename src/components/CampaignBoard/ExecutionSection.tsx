
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ExecutionSection = () => {
  const executionItems = [
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
  ];

  return (
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
          {executionItems.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutionSection;
