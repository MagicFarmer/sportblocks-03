export interface NFT {
  id: number;
  name: string;
  athlete: string;
  sport: string;
  event?: string;
  country?: string;
  price: string;
  image: string;
  rarity: string;
  description: string;
  date?: string;
  edition?: string;
  totalSupply?: number;
  minted?: number;
  attributes?: {
    category: string;
    achievement: string;
    location: string;
    season: string;
  };
}

export const mockNFTs = [
  {
    id: 1,
    name: "Golden Slam Victory",
    athlete: "Maria Gonzalez",
    sport: "Tennis",
    event: "Wimbledon 2023",
    country: "Spain",
    price: "2.5",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop", // Tennis victory moment
    rarity: "Legendary",
    description: "Historic match-winning point at Wimbledon, capturing the exact moment of victory.",
    date: "July 15, 2023",
    edition: "1/50",
    totalSupply: 50,
    minted: 32,
    attributes: {
      category: "Championship Moment",
      achievement: "Tournament Winner",
      location: "All England Club",
      season: "2023"
    }
  },
  {
    id: 2,
    name: "Marathon Personal Best",
    athlete: "James Wilson",
    sport: "Athletics",
    event: "Boston Marathon 2024",
    country: "USA",
    price: "1.8",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=300&fit=crop", // Marathon finish line
    rarity: "Epic",
    description: "Breaking personal record at the iconic Boston Marathon finish line.",
    date: "April 21, 2024",
    edition: "12/100",
    totalSupply: 100,
    minted: 78,
    attributes: {
      category: "Personal Achievement",
      achievement: "Personal Record",
      location: "Boston",
      season: "2024"
    }
  },
  {
    id: 3,
    name: "Olympic Debut",
    athlete: "Sophie Chen",
    sport: "Swimming",
    event: "Paris Olympics 2024",
    country: "Canada",
    price: "3.2",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop", // Olympic swimming pool
    rarity: "Legendary",
    description: "First-ever Olympic appearance in the 200m freestyle final.",
    date: "August 3, 2024",
    edition: "5/25",
    totalSupply: 25,
    minted: 18,
    attributes: {
      category: "Olympic Moment",
      achievement: "Olympic Debut",
      location: "Paris La Défense Arena",
      season: "2024"
    }
  },
  {
    id: 4,
    name: "Championship Goal",
    athlete: "Diego Rodriguez",
    sport: "Football",
    event: "Copa America Final",
    country: "Argentina",
    price: "4.1",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop", // Soccer goal celebration
    rarity: "Legendary",
    description: "The winning goal that secured the Copa America title in extra time.",
    date: "July 14, 2024",
    edition: "1/10",
    totalSupply: 10,
    minted: 10,
    attributes: {
      category: "Historic Goal",
      achievement: "Tournament Winner",
      location: "MetLife Stadium",
      season: "2024"
    }
  },
  {
    id: 5,
    name: "Perfect 10 Routine",
    athlete: "Anna Petrov",
    sport: "Gymnastics",
    event: "World Championships",
    country: "Russia",
    price: "2.9",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", // Gymnastics routine
    rarity: "Epic",
    description: "Flawless floor routine earning a perfect score from all judges.",
    date: "October 8, 2023",
    edition: "3/75",
    totalSupply: 75,
    minted: 45,
    attributes: {
      category: "Perfect Performance",
      achievement: "Perfect Score",
      location: "Antwerp",
      season: "2023"
    }
  },
  {
    id: 6,
    name: "Slam Dunk Championship",
    athlete: "Michael Johnson",
    sport: "Basketball",
    event: "NBA All-Star Weekend",
    country: "USA",
    price: "1.5",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop", // Basketball slam dunk
    rarity: "Rare",
    description: "Winning dunk that secured the NBA Slam Dunk Championship.",
    date: "February 17, 2024",
    edition: "25/200",
    totalSupply: 200,
    minted: 156,
    attributes: {
      category: "All-Star Moment",
      achievement: "Contest Winner",
      location: "Indianapolis",
      season: "2024"
    }
  }
];
