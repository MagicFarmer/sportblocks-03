
export interface Fan {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  location: string;
  yearsExperience: number;
  projectsHelped: number;
  totalDonated: number;
  specialty: string;
  expertise: string[];
  favoriteAthletes: string[];
}

export const mockFans: Fan[] = [
  {
    id: 1,
    name: "Dr. Sarah Martinez",
    role: "Sports Nutritionist", 
    description: "Specialized in athletic performance nutrition and dietary planning for professional athletes. Helping athletes optimize their nutrition for peak performance.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop", // Nutritionist with healthy foods
    location: "Barcelona, Spain",
    yearsExperience: 12,
    projectsHelped: 8,
    totalDonated: 5200,
    specialty: "Performance nutrition and supplement guidance for endurance athletes",
    expertise: ["Sports Nutrition", "Meal Planning", "Supplement Analysis"],
    favoriteAthletes: ["Serena Williams", "Rafael Nadal"]
  },
  {
    id: 2,
    name: "Coach Michael Thompson",
    role: "Basketball Coach",
    description: "Former professional player turned youth development coach. Focus on developing fundamental skills and mental toughness in young athletes.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", // Basketball coach with players
    location: "Los Angeles, CA",
    yearsExperience: 15,
    projectsHelped: 12,
    totalDonated: 8900,
    specialty: "Youth basketball development and leadership training",
    expertise: ["Basketball Fundamentals", "Team Leadership", "Youth Development"],
    favoriteAthletes: ["LeBron James", "Kobe Bryant"]
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Sports Psychologist",
    description: "Mental performance specialist working with Olympic and professional athletes to enhance focus, confidence, and competitive mindset.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop", // Psychologist in session
    location: "Tokyo, Japan",
    yearsExperience: 10,
    projectsHelped: 15,
    totalDonated: 6800,
    specialty: "Performance anxiety management and visualization techniques",
    expertise: ["Mental Training", "Performance Psychology", "Mindfulness"],
    favoriteAthletes: ["Simone Biles", "Naomi Osaka"]
  },
  {
    id: 4,
    name: "Dr. Roberto Silva",
    role: "Physical Therapist",
    description: "Injury prevention and rehabilitation specialist for professional sports teams. Expert in movement analysis and corrective exercise.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop", // Physical therapy session
    location: "São Paulo, Brazil",
    yearsExperience: 18,
    projectsHelped: 6,
    totalDonated: 4500,
    specialty: "Injury prevention protocols and rehabilitation for soccer players",
    expertise: ["Injury Rehabilitation", "Movement Analysis", "Corrective Exercise"],
    favoriteAthletes: ["Pelé", "Marta"]
  },
  {
    id: 5,
    name: "Lisa Johnson",
    role: "Strength & Conditioning Coach",
    description: "Certified strength coach specializing in explosive power development for track and field athletes. Focus on Olympic lifting techniques.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop", // Strength training session
    location: "London, UK",
    yearsExperience: 14,
    projectsHelped: 9,
    totalDonated: 7200,
    specialty: "Olympic weightlifting and power development for sprinters",
    expertise: ["Strength Training", "Olympic Lifting", "Sprint Mechanics"],
    favoriteAthletes: ["Usain Bolt", "Allyson Felix"]
  }
];
