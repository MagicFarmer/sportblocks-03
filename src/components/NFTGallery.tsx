
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NFTCard from "./NFTCard";
import { Button } from "./ui/button";
import { Store, X } from "lucide-react";

interface NFTGalleryProps {
  isWalletConnected: boolean;
}

const NFTGallery = ({ isWalletConnected }: NFTGalleryProps) => {
  const [filters, setFilters] = useState({
    sport: "All",
    event: "All", 
    country: "All",
    rarity: "All"
  });
  const navigate = useNavigate();

  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball", "Hockey", "Golf", "Swimming", "Athletics", "Boxing", "MMA", "Cricket", "Rugby"];
  const events = ["All", "World Cup", "Olympics", "Champions League", "Super Bowl", "NBA Finals", "Wimbledon", "Masters", "World Championship", "Premier League", "Stanley Cup", "Grand Prix", "Commonwealth Games"];
  const countries = ["All", "USA", "Argentina", "Brazil", "Spain", "France", "Germany", "UK", "Japan", "Australia", "Canada", "Italy", "Netherlands", "Portugal"];
  const rarities = ["All", "Common", "Rare", "Epic", "Legendary"];

  const mockNFTs = [
    {
      id: 1,
      name: "Messi's Golden Goal",
      athlete: "Lionel Messi",
      sport: "Soccer",
      event: "World Cup",
      country: "Argentina",
      price: "0.5 ETH",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
      rarity: "Legendary",
      description: "Historic goal from the 2022 World Cup Final that sealed Argentina's victory",
      date: "December 18, 2022",
      edition: "1 of 100",
      totalSupply: 100,
      minted: 87,
      attributes: {
        category: "Goal Moment",
        achievement: "World Cup Final",
        location: "Lusail Stadium, Qatar",
        season: "2022-23"
      }
    },
    {
      id: 2,
      name: "LeBron's Championship Dunk",
      athlete: "LeBron James",
      sport: "Basketball",
      event: "NBA Finals",
      country: "USA",
      price: "0.3 ETH",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rarity: "Epic",
      description: "Iconic slam dunk from the NBA Finals that energized the crowd",
      date: "June 12, 2023",
      edition: "1 of 250",
      totalSupply: 250,
      minted: 203,
      attributes: {
        category: "Dunk Highlight",
        achievement: "NBA Finals Game 5",
        location: "Crypto.com Arena",
        season: "2022-23"
      }
    },
    {
      id: 3,
      name: "Serena's Match Point Ace",
      athlete: "Serena Williams",
      sport: "Tennis",
      event: "Wimbledon",
      country: "USA",
      price: "0.4 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Rare",
      description: "Match-winning ace that secured her 23rd Grand Slam title at Wimbledon",
      date: "July 15, 2023",
      edition: "1 of 150",
      totalSupply: 150,
      minted: 134,
      attributes: {
        category: "Serve Moment",
        achievement: "Wimbledon Final",
        location: "Centre Court, Wimbledon",
        season: "2023"
      }
    },
    {
      id: 4,
      name: "Brady's Record Touchdown",
      athlete: "Tom Brady",
      sport: "Football",
      event: "Super Bowl",
      country: "USA",
      price: "0.6 ETH",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400",
      rarity: "Legendary",
      description: "Super Bowl winning touchdown pass that broke multiple NFL records",
      date: "February 12, 2023",
      edition: "1 of 50",
      totalSupply: 50,
      minted: 48,
      attributes: {
        category: "Touchdown Pass",
        achievement: "Super Bowl LVII",
        location: "State Farm Stadium",
        season: "2022-23"
      }
    },
    {
      id: 5,
      name: "Curry's Logo Three",
      athlete: "Stephen Curry",
      sport: "Basketball",
      event: "NBA Finals",
      country: "USA",
      price: "0.35 ETH",
      image: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400",
      rarity: "Epic",
      description: "Record-breaking three-point shot from the logo that became legendary",
      date: "April 3, 2023",
      edition: "1 of 200",
      totalSupply: 200,
      minted: 156,
      attributes: {
        category: "Three-Point Shot",
        achievement: "NBA Regular Season",
        location: "Chase Center",
        season: "2022-23"
      }
    },
    {
      id: 6,
      name: "Ronaldo's Bicycle Kick",
      athlete: "Cristiano Ronaldo",
      sport: "Soccer",
      event: "Champions League",
      country: "Portugal",
      price: "0.7 ETH",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400",
      rarity: "Legendary",
      description: "Spectacular bicycle kick goal that defied physics and amazed the world",
      date: "March 25, 2023",
      edition: "1 of 75",
      totalSupply: 75,
      minted: 71,
      attributes: {
        category: "Bicycle Kick",
        achievement: "Champions League Quarter Final",
        location: "Old Trafford",
        season: "2022-23"
      }
    },
    {
      id: 7,
      name: "Hamilton's Pole Position",
      athlete: "Lewis Hamilton",
      sport: "Athletics",
      event: "Grand Prix",
      country: "UK",
      price: "0.25 ETH",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      rarity: "Rare",
      description: "Lightning-fast qualifying lap that secured pole position at Monaco",
      date: "May 28, 2023",
      edition: "1 of 300",
      totalSupply: 300,
      minted: 278,
      attributes: {
        category: "Qualifying Lap",
        achievement: "Monaco Grand Prix Pole",
        location: "Circuit de Monaco",
        season: "2023"
      }
    },
    {
      id: 8,
      name: "McDavid's Hat Trick",
      athlete: "Connor McDavid",
      sport: "Hockey",
      event: "Stanley Cup",
      country: "Canada",
      price: "0.45 ETH",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rarity: "Epic",
      description: "Three goals in playoff overtime that led to Stanley Cup victory",
      date: "June 20, 2023",
      edition: "1 of 180",
      totalSupply: 180,
      minted: 165,
      attributes: {
        category: "Hat Trick",
        achievement: "Stanley Cup Final",
        location: "Rogers Place",
        season: "2022-23"
      }
    },
    {
      id: 9,
      name: "Bolt's Lightning Strike",
      athlete: "Usain Bolt",
      sport: "Athletics",
      event: "Olympics",
      country: "Jamaica",
      price: "0.8 ETH",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400",
      rarity: "Legendary",
      description: "World record-breaking 100m sprint that left competitors in the dust",
      date: "August 5, 2023",
      edition: "1 of 25",
      totalSupply: 25,
      minted: 25,
      attributes: {
        category: "Sprint Record",
        achievement: "Olympic Gold Medal",
        location: "Olympic Stadium",
        season: "2023"
      }
    },
    {
      id: 10,
      name: "Woods' Master Shot",
      athlete: "Tiger Woods",
      sport: "Golf",
      event: "Masters",
      country: "USA",
      price: "0.55 ETH",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400",
      rarity: "Epic",
      description: "Incredible approach shot on the 18th hole to win the Masters",
      date: "April 9, 2023",
      edition: "1 of 120",
      totalSupply: 120,
      minted: 98,
      attributes: {
        category: "Approach Shot",
        achievement: "Masters Tournament Win",
        location: "Augusta National",
        season: "2023"
      }
    },
    {
      id: 11,
      name: "Phelps' Golden Dive",
      athlete: "Michael Phelps",
      sport: "Swimming",
      event: "World Championship",
      country: "USA",
      price: "0.42 ETH",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400",
      rarity: "Rare",
      description: "Perfect butterfly stroke that set a new world record",
      date: "July 22, 2023",
      edition: "1 of 200",
      totalSupply: 200,
      minted: 189,
      attributes: {
        category: "Swimming Record",
        achievement: "World Record 200m Butterfly",
        location: "Aquatic Center",
        season: "2023"
      }
    },
    {
      id: 12,
      name: "Mayweather's Perfect Counter",
      athlete: "Floyd Mayweather",
      sport: "Boxing",
      event: "World Championship",
      country: "USA",
      price: "0.38 ETH",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400",
      rarity: "Epic",
      description: "Flawless counter-punch that ended the fight in the 12th round",
      date: "September 15, 2023",
      edition: "1 of 160",
      totalSupply: 160,
      minted: 142,
      attributes: {
        category: "Knockout Punch",
        achievement: "Championship Defense",
        location: "MGM Grand",
        season: "2023"
      }
    },
    {
      id: 13,
      name: "Kohli's Century Strike",
      athlete: "Virat Kohli",
      sport: "Cricket",
      event: "World Cup",
      country: "India",
      price: "0.33 ETH",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400",
      rarity: "Rare",
      description: "Match-winning century in the Cricket World Cup final",
      date: "November 19, 2023",
      edition: "1 of 250",
      totalSupply: 250,
      minted: 201,
      attributes: {
        category: "Century Score",
        achievement: "World Cup Final",
        location: "Lords Cricket Ground",
        season: "2023"
      }
    },
    {
      id: 14,
      name: "Jones' UFC Submission",
      athlete: "Jon Jones",
      sport: "MMA",
      event: "World Championship",
      country: "USA",
      price: "0.47 ETH",
      image: "https://images.unsplash.com/photo-1559133719-d5c9c2968c3b?w=400",
      rarity: "Epic",
      description: "Lightning-fast submission that retained the heavyweight title",
      date: "March 4, 2023",
      edition: "1 of 140",
      totalSupply: 140,
      minted: 127,
      attributes: {
        category: "Submission Victory",
        achievement: "UFC Heavyweight Title Defense",
        location: "T-Mobile Arena",
        season: "2023"
      }
    },
    {
      id: 15,
      name: "Dupont's Rugby Try",
      athlete: "Antoine Dupont",
      sport: "Rugby",
      event: "World Cup",
      country: "France",
      price: "0.29 ETH",
      image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400",
      rarity: "Rare",
      description: "Spectacular try that secured France's World Cup victory",
      date: "October 28, 2023",
      edition: "1 of 220",
      totalSupply: 220,
      minted: 195,
      attributes: {
        category: "Try Score",
        achievement: "Rugby World Cup Final",
        location: "Stade de France",
        season: "2023"
      }
    },
    {
      id: 16,
      name: "Biles' Perfect 10",
      athlete: "Simone Biles",
      sport: "Athletics",
      event: "Olympics",
      country: "USA",
      price: "0.65 ETH",
      image: "https://images.unsplash.com/photo-1544963150-37732c27d99f?w=400",
      rarity: "Legendary",
      description: "Flawless gymnastics routine that earned a perfect score",
      date: "August 1, 2023",
      edition: "1 of 60",
      totalSupply: 60,
      minted: 58,
      attributes: {
        category: "Gymnastics Routine",
        achievement: "Olympic Gold Medal",
        location: "Olympic Gymnastics Arena",
        season: "2023"
      }
    },
    {
      id: 17,
      name: "Verstappen's Overtake",
      athlete: "Max Verstappen",
      sport: "Athletics",
      event: "Grand Prix",
      country: "Netherlands",
      price: "0.41 ETH",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
      rarity: "Epic",
      description: "Incredible overtake on the final lap to win the championship",
      date: "December 10, 2023",
      edition: "1 of 175",
      totalSupply: 175,
      minted: 162,
      attributes: {
        category: "Championship Overtake",
        achievement: "F1 World Championship",
        location: "Yas Marina Circuit",
        season: "2023"
      }
    },
    {
      id: 18,
      name: "Djokovic's Match Point",
      athlete: "Novak Djokovic",
      sport: "Tennis",
      event: "World Championship",
      country: "Serbia",
      price: "0.52 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Epic",
      description: "Championship-winning serve at the ATP Finals",
      date: "November 19, 2023",
      edition: "1 of 130",
      totalSupply: 130,
      minted: 119,
      attributes: {
        category: "Championship Point",
        achievement: "ATP Finals Victory",
        location: "Pala Alpitour",
        season: "2023"
      }
    },
    {
      id: 19,
      name: "Kane's Golden Boot Goal",
      athlete: "Harry Kane",
      sport: "Soccer",
      event: "Premier League",
      country: "UK",
      price: "0.36 ETH",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
      rarity: "Rare",
      description: "Goal that secured the Premier League Golden Boot award",
      date: "May 28, 2023",
      edition: "1 of 190",
      totalSupply: 190,
      minted: 176,
      attributes: {
        category: "Golden Boot Goal",
        achievement: "Premier League Top Scorer",
        location: "Wembley Stadium",
        season: "2022-23"
      }
    },
    {
      id: 20,
      name: "Mahomes' Hail Mary",
      athlete: "Patrick Mahomes",
      sport: "Football",
      event: "Super Bowl",
      country: "USA",
      price: "0.58 ETH",
      image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400",
      rarity: "Legendary",
      description: "Last-second Hail Mary pass that won the Super Bowl",
      date: "February 11, 2024",
      edition: "1 of 80",
      totalSupply: 80,
      minted: 77,
      attributes: {
        category: "Game-Winning Pass",
        achievement: "Super Bowl Victory",
        location: "Allegiant Stadium",
        season: "2023-24"
      }
    },
    {
      id: 21,
      name: "Federer's Backhand Beauty",
      athlete: "Roger Federer",
      sport: "Tennis",
      event: "Wimbledon",
      country: "Switzerland",
      price: "0.48 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Epic",
      description: "Signature backhand winner that sealed his 8th Wimbledon title",
      date: "July 14, 2024",
      edition: "1 of 150",
      totalSupply: 150,
      minted: 138,
      attributes: {
        category: "Signature Shot",
        achievement: "Wimbledon Championship",
        location: "Centre Court",
        season: "2024"
      }
    },
    {
      id: 22,
      name: "Giannis' Block Party",
      athlete: "Giannis Antetokounmpo",
      sport: "Basketball",
      event: "NBA Finals",
      country: "Greece",
      price: "0.44 ETH",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rarity: "Rare",
      description: "Game-saving block in the final seconds of Game 7",
      date: "June 18, 2024",
      edition: "1 of 200",
      totalSupply: 200,
      minted: 183,
      attributes: {
        category: "Defensive Play",
        achievement: "NBA Championship",
        location: "Fiserv Forum",
        season: "2023-24"
      }
    },
    {
      id: 23,
      name: "Neymar's Rainbow Flick",
      athlete: "Neymar Jr.",
      sport: "Soccer",
      event: "Champions League",
      country: "Brazil",
      price: "0.39 ETH",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400",
      rarity: "Epic",
      description: "Skillful rainbow flick that set up the winning goal",
      date: "April 15, 2024",
      edition: "1 of 180",
      totalSupply: 180,
      minted: 164,
      attributes: {
        category: "Skill Move",
        achievement: "Champions League Semi-Final",
        location: "Parc des Princes",
        season: "2023-24"
      }
    },
    {
      id: 24,
      name: "Ledecky's World Record",
      athlete: "Katie Ledecky",
      sport: "Swimming",
      event: "Olympics",
      country: "USA",
      price: "0.61 ETH",
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400",
      rarity: "Legendary",
      description: "World record-breaking performance in the 1500m freestyle",
      date: "August 3, 2024",
      edition: "1 of 90",
      totalSupply: 90,
      minted: 85,
      attributes: {
        category: "World Record",
        achievement: "Olympic Gold Medal",
        location: "La Defense Arena",
        season: "2024"
      }
    },
    {
      id: 25,
      name: "Alcaraz's Championship Point",
      athlete: "Carlos Alcaraz",
      sport: "Tennis",
      event: "World Championship",
      country: "Spain",
      price: "0.43 ETH",
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rarity: "Rare",
      description: "Match-winning forehand that claimed his first ATP Finals title",
      date: "November 17, 2024",
      edition: "1 of 210",
      totalSupply: 210,
      minted: 194,
      attributes: {
        category: "Championship Winner",
        achievement: "ATP Finals Victory",
        location: "Inalpi Arena",
        season: "2024"
      }
    },
    {
      id: 26,
      name: "Pasta's Overtime Winner",
      athlete: "David Pastrnak",
      sport: "Hockey",
      event: "Stanley Cup",
      country: "Czech Republic",
      price: "0.37 ETH",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rarity: "Common",
      description: "Clutch overtime goal that advanced to the Stanley Cup Final",
      date: "May 25, 2024",
      edition: "1 of 400",
      totalSupply: 400,
      minted: 367,
      attributes: {
        category: "Overtime Goal",
        achievement: "Conference Final",
        location: "TD Garden",
        season: "2023-24"
      }
    }
  ];

  // Filter NFTs based on selected filters
  const filteredNFTs = mockNFTs.filter(nft => {
    return (
      (filters.sport === "All" || nft.sport === filters.sport) &&
      (filters.event === "All" || nft.event === filters.event) &&
      (filters.country === "All" || nft.country === filters.country) &&
      (filters.rarity === "All" || nft.rarity === filters.rarity)
    );
  });

  // Generate dynamic album name based on active filters
  const generateAlbumName = () => {
    const activeFilters = [];
    if (filters.sport !== "All") activeFilters.push(filters.sport);
    if (filters.event !== "All") activeFilters.push(filters.event);
    if (filters.country !== "All") activeFilters.push(filters.country);
    if (filters.rarity !== "All") activeFilters.push(filters.rarity);
    
    if (activeFilters.length === 0) return "All Sports NFTs";
    return activeFilters.join(" × ") + " Collection";
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      sport: "All",
      event: "All",
      country: "All",
      rarity: "All"
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== "All");

  return (
    <section id="gallery" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Sports NFTs
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4">
            Discover and collect exclusive digital moments from the world's greatest athletes
          </p>
          
          {/* Call to Action for Real Marketplace */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-4 sm:p-6 border border-blue-400/30 mb-6 sm:mb-8 mx-4 sm:mx-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Real Marketplace Available!</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Buy real NFTs created by verified athletes on our platform
            </p>
            <Button
              onClick={() => navigate('/marketplace')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
            >
              <Store className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Go to Real Marketplace
            </Button>
          </div>
        </div>

        {/* Dynamic Album Name */}
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            📁 {generateAlbumName()}
          </h3>
          <p className="text-gray-400 text-sm">
            {filteredNFTs.length} NFT{filteredNFTs.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Sport Filter */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm font-medium px-2 py-1">Sport:</span>
              {sports.slice(0, 8).map((sport) => (
                <button
                  key={sport}
                  onClick={() => handleFilterChange('sport', sport)}
                  className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                    filters.sport === sport
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {sport}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Event Filter */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm font-medium px-2 py-1">Event:</span>
              {events.slice(0, 7).map((event) => (
                <button
                  key={event}
                  onClick={() => handleFilterChange('event', event)}
                  className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                    filters.event === event
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {event}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Country Filter */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm font-medium px-2 py-1">Country:</span>
              {countries.slice(0, 8).map((country) => (
                <button
                  key={country}
                  onClick={() => handleFilterChange('country', country)}
                  className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                    filters.country === country
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Rarity Filter */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="text-gray-400 text-sm font-medium px-2 py-1">Rarity:</span>
              {rarities.map((rarity) => (
                <button
                  key={rarity}
                  onClick={() => handleFilterChange('rarity', rarity)}
                  className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                    filters.rarity === rarity
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {rarity}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="flex justify-center">
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-red-300 hover:text-red-200 transition-all duration-200"
              >
                <X size={16} />
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {filteredNFTs.map((nft) => (
            <NFTCard 
              key={nft.id} 
              nft={nft} 
              isWalletConnected={isWalletConnected}
            />
          ))}
        </div>

        {filteredNFTs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-base sm:text-lg mb-4">
              No NFTs found for the selected filters
            </p>
            <button
              onClick={clearAllFilters}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Clear all filters to show all NFTs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NFTGallery;
