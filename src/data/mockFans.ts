
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
    name: "Dr. Maria Rodriguez",
    role: "Sports Nutritionist",
    description: "Specialized in performance nutrition for elite athletes, focusing on endurance sports and recovery optimization.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    location: "Barcelona, Spain",
    yearsExperience: 12,
    projectsHelped: 45,
    totalDonated: 15000,
    specialty: "Performance nutrition and metabolic optimization for endurance athletes",
    expertise: ["Nutrition Planning", "Recovery Science", "Supplement Research"],
    favoriteAthletes: ["Eliud Kipchoge", "Katie Ledecky", "Tadej Pogačar"]
  },
  {
    id: 2,
    name: "Coach Michael Thompson",
    role: "Basketball Coach",
    description: "Former professional player turned youth development coach, dedicated to nurturing the next generation of basketball talent.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    location: "Chicago, USA",
    yearsExperience: 18,
    projectsHelped: 38,
    totalDonated: 22000,
    specialty: "Youth basketball development and mental performance coaching",
    expertise: ["Player Development", "Team Strategy", "Leadership Training"],
    favoriteAthletes: ["LeBron James", "Stephen Curry", "Giannis Antetokounmpo"]
  },
  {
    id: 3,
    name: "Dr. Sarah Kim",
    role: "Sports Psychologist",
    description: "Mental performance specialist helping athletes overcome psychological barriers and achieve peak performance.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    location: "Seoul, South Korea",
    yearsExperience: 10,
    projectsHelped: 52,
    totalDonated: 18500,
    specialty: "Performance anxiety and mental resilience training for competitive athletes",
    expertise: ["Mental Training", "Stress Management", "Performance Psychology"],
    favoriteAthletes: ["Naomi Osaka", "Simone Biles", "Son Heung-min"]
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Physical Therapist",
    description: "Rehabilitation specialist focusing on injury prevention and recovery for professional athletes.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    location: "London, UK",
    yearsExperience: 15,
    projectsHelped: 67,
    totalDonated: 25000,
    specialty: "Sports injury rehabilitation and biomechanical analysis",
    expertise: ["Injury Prevention", "Rehabilitation", "Movement Analysis"],
    favoriteAthletes: ["Harry Kane", "Lewis Hamilton", "Andy Murray"]
  },
  {
    id: 5,
    name: "Coach Elena Petrov",
    role: "Strength & Conditioning Coach",
    description: "Olympic-level strength coach specializing in power development and athletic performance enhancement.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    location: "Moscow, Russia",
    yearsExperience: 14,
    projectsHelped: 41,
    totalDonated: 19000,
    specialty: "Olympic weightlifting and explosive power development",
    expertise: ["Strength Training", "Power Development", "Olympic Lifting"],
    favoriteAthletes: ["Lasha Talakhadze", "Karyn Marshall", "Dmitry Klokov"]
  },
  {
    id: 6,
    name: "Dr. Ahmed Hassan",
    role: "Team Physician",
    description: "Sports medicine doctor with extensive experience in professional football and Olympic sports.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    location: "Cairo, Egypt",
    yearsExperience: 20,
    projectsHelped: 33,
    totalDonated: 28000,
    specialty: "Sports medicine and emergency care for professional athletes",
    expertise: ["Sports Medicine", "Emergency Care", "Performance Health"],
    favoriteAthletes: ["Mohamed Salah", "Mona Eltahawy", "Raneem El Welily"]
  },
  {
    id: 7,
    name: "Coach Lisa Anderson",
    role: "Swimming Coach",
    description: "Elite swimming coach with multiple Olympic medalists under her guidance, specializing in stroke technique.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
    location: "Sydney, Australia",
    yearsExperience: 16,
    projectsHelped: 29,
    totalDonated: 21000,
    specialty: "Competitive swimming technique and race strategy",
    expertise: ["Stroke Technique", "Race Strategy", "Pool Training"],
    favoriteAthletes: ["Katie Ledecky", "Caeleb Dressel", "Emma McKeon"]
  },
  {
    id: 8,
    name: "Marcus Johnson",
    role: "Athletic Trainer",
    description: "Certified athletic trainer specializing in injury prevention and on-field emergency care for contact sports.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    location: "Dallas, USA",
    yearsExperience: 11,
    projectsHelped: 56,
    totalDonated: 16500,
    specialty: "Contact sport injury prevention and emergency response",
    expertise: ["Injury Prevention", "Emergency Care", "Athletic Conditioning"],
    favoriteAthletes: ["Dak Prescott", "Ezekiel Elliott", "Micah Parsons"]
  },
  {
    id: 9,
    name: "Dr. Yuki Tanaka",
    role: "Sports Scientist",
    description: "Research scientist focusing on biomechanics and performance optimization through data analysis.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    location: "Tokyo, Japan",
    yearsExperience: 13,
    projectsHelped: 48,
    totalDonated: 20000,
    specialty: "Biomechanical analysis and performance data optimization",
    expertise: ["Biomechanics", "Data Analysis", "Performance Testing"],
    favoriteAthletes: ["Shohei Ohtani", "Yuzuru Hanyu", "Kento Momota"]
  },
  {
    id: 10,
    name: "Roberto Silva",
    role: "Equipment Specialist",
    description: "Technical expert in sports equipment development and customization for professional athletes.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    location: "São Paulo, Brazil",
    yearsExperience: 9,
    projectsHelped: 72,
    totalDonated: 14000,
    specialty: "Custom equipment design and sports technology integration",
    expertise: ["Equipment Design", "Technology Integration", "Performance Gear"],
    favoriteAthletes: ["Neymar Jr.", "Gabriel Medina", "Rebeca Andrade"]
  }
];
