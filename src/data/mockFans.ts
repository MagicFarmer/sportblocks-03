
export interface Fan {
  id: string;
  name: string;
  role: string;
  specialty: string;
  description: string;
  image: string;
  yearsExperience: number;
  projectsHelped: number;
  totalDonated: number;
  favoriteAthletes: string[];
  achievements: string[];
  location: string;
  expertise: string[];
}

export const mockFans: Fan[] = [
  {
    id: "fan1",
    name: "Dr. Sarah Mitchell",
    role: "Sports Nutritionist",
    specialty: "Endurance Sports Nutrition",
    description: "Specialized in optimizing performance through personalized nutrition plans for marathon runners and cyclists",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    yearsExperience: 12,
    projectsHelped: 23,
    totalDonated: 4500,
    favoriteAthletes: ["Eliud Kipchoge", "Marianne Vos"],
    achievements: ["Olympic Team Nutritionist 2020", "Published 15 research papers"],
    location: "Denver, Colorado",
    expertise: ["Performance Nutrition", "Hydration Strategies", "Recovery Protocols"]
  },
  {
    id: "fan2",
    name: "Coach Marcus Johnson",
    role: "Basketball Coach",
    specialty: "Youth Development",
    description: "Former professional player turned coach, specializing in developing young talent in underserved communities",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    yearsExperience: 18,
    projectsHelped: 31,
    totalDonated: 7200,
    favoriteAthletes: ["LeBron James", "Nneka Ogwumike"],
    achievements: ["State Championship Coach", "Community Impact Award 2023"],
    location: "Detroit, Michigan",
    expertise: ["Player Development", "Team Strategy", "Community Outreach"]
  },
  {
    id: "fan3",
    name: "Dr. Elena Rodriguez",
    role: "Sports Psychologist",
    specialty: "Performance Psychology",
    description: "Helping athletes overcome mental barriers and develop resilience for peak performance",
    image: "https://images.unsplash.com/photo-1594736797933-d0d4a732b0af?w=400",
    yearsExperience: 15,
    projectsHelped: 19,
    totalDonated: 3800,
    favoriteAthletes: ["Simone Biles", "Naomi Osaka"],
    achievements: ["Olympic Psychology Consultant", "Mental Health Advocate Award"],
    location: "Barcelona, Spain",
    expertise: ["Mental Conditioning", "Stress Management", "Confidence Building"]
  },
  {
    id: "fan4",
    name: "Jake Thompson",
    role: "Physical Therapist",
    specialty: "Sports Rehabilitation",
    description: "Specializing in injury recovery and prevention for professional athletes across multiple sports",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    yearsExperience: 10,
    projectsHelped: 27,
    totalDonated: 5100,
    favoriteAthletes: ["Cristiano Ronaldo", "Serena Williams"],
    achievements: ["NFL Team Therapist", "Rehabilitation Innovation Award"],
    location: "Miami, Florida",
    expertise: ["Injury Prevention", "Movement Analysis", "Recovery Protocols"]
  },
  {
    id: "fan5",
    name: "Maria Santos",
    role: "Strength & Conditioning Coach",
    specialty: "Olympic Weightlifting",
    description: "Former Olympic weightlifter now training the next generation of strength athletes",
    image: "https://images.unsplash.com/photo-1562795281-e0b5a6fad33f?w=400",
    yearsExperience: 14,
    projectsHelped: 22,
    totalDonated: 6300,
    favoriteAthletes: ["Lasha Talakhadze", "Tatiana Kashirina"],
    achievements: ["Olympic Bronze Medalist", "Master Trainer Certification"],
    location: "São Paulo, Brazil",
    expertise: ["Strength Training", "Power Development", "Technique Coaching"]
  },
  {
    id: "fan6",
    name: "Dr. Ahmed Hassan",
    role: "Team Physician",
    specialty: "Sports Medicine",
    description: "Emergency medicine doctor specializing in sports injuries and athlete health management",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    yearsExperience: 20,
    projectsHelped: 15,
    totalDonated: 8900,
    favoriteAthletes: ["Mohamed Salah", "Eliud Kipchoge"],
    achievements: ["FIFA World Cup Medical Team", "Sports Medicine Excellence Award"],
    location: "Cairo, Egypt",
    expertise: ["Emergency Medicine", "Injury Diagnosis", "Health Optimization"]
  },
  {
    id: "fan7",
    name: "Lisa Chen",
    role: "Swimming Coach",
    specialty: "Technique Development",
    description: "Retired competitive swimmer coaching at the highest levels of international competition",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    yearsExperience: 16,
    projectsHelped: 29,
    totalDonated: 4700,
    favoriteAthletes: ["Katie Ledecky", "Caeleb Dressel"],
    achievements: ["Olympic Swimming Coach", "Technical Innovation Award"],
    location: "Sydney, Australia",
    expertise: ["Stroke Technique", "Training Periodization", "Race Strategy"]
  },
  {
    id: "fan8",
    name: "Carlos Mendez",
    role: "Athletic Trainer",
    specialty: "Injury Prevention",
    description: "Specializing in biomechanical analysis and movement optimization for professional soccer players",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    yearsExperience: 11,
    projectsHelped: 25,
    totalDonated: 5600,
    favoriteAthletes: ["Lionel Messi", "Alexia Putellas"],
    achievements: ["La Liga Athletic Trainer", "Movement Specialist Certification"],
    location: "Madrid, Spain",
    expertise: ["Biomechanics", "Injury Prevention", "Performance Analysis"]
  },
  {
    id: "fan9",
    name: "Dr. Rachel Kim",
    role: "Sports Scientist",
    specialty: "Performance Analytics",
    description: "Using data science and technology to optimize athletic performance and training protocols",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    yearsExperience: 8,
    projectsHelped: 18,
    totalDonated: 3200,
    favoriteAthletes: ["Shelly-Ann Fraser-Pryce", "Ryan Crouser"],
    achievements: ["PhD in Exercise Science", "Performance Analytics Pioneer"],
    location: "Seoul, South Korea",
    expertise: ["Data Analytics", "Performance Testing", "Technology Integration"]
  },
  {
    id: "fan10",
    name: "Tony Williams",
    role: "Equipment Specialist",
    specialty: "Custom Gear Design",
    description: "Creating specialized equipment and gear for adaptive sports and Paralympic athletes",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    yearsExperience: 13,
    projectsHelped: 34,
    totalDonated: 9100,
    favoriteAthletes: ["Daniel Dias", "Tatyana McFadden"],
    achievements: ["Paralympic Equipment Designer", "Adaptive Sports Innovation Award"],
    location: "London, UK",
    expertise: ["Adaptive Equipment", "Custom Design", "Accessibility Solutions"]
  },
  {
    id: "fan11",
    name: "Dr. Isabella Ferrari",
    role: "Recovery Specialist",
    specialty: "Cryotherapy & Recovery",
    description: "Expert in advanced recovery techniques including cryotherapy, compression, and sleep optimization",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    yearsExperience: 9,
    projectsHelped: 21,
    totalDonated: 4200,
    favoriteAthletes: ["Novak Djokovic", "Federica Pellegrini"],
    achievements: ["Recovery Science PhD", "Olympic Recovery Consultant"],
    location: "Milan, Italy",
    expertise: ["Recovery Protocols", "Sleep Optimization", "Physiological Monitoring"]
  },
  {
    id: "fan12",
    name: "Michael O'Brien",
    role: "Tactical Analyst",
    specialty: "Game Strategy",
    description: "Analyzing game footage and developing tactical strategies for professional rugby teams",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    yearsExperience: 17,
    projectsHelped: 16,
    totalDonated: 6800,
    favoriteAthletes: ["Jonny Wilkinson", "Dan Carter"],
    achievements: ["World Cup Analyst", "Strategic Innovation Award"],
    location: "Dublin, Ireland",
    expertise: ["Game Analysis", "Strategic Planning", "Video Analysis"]
  },
  {
    id: "fan13",
    name: "Sophie Dubois",
    role: "Mental Performance Coach",
    specialty: "Mindfulness & Focus",
    description: "Teaching mindfulness and mental focus techniques to help athletes perform under pressure",
    image: "https://images.unsplash.com/photo-1562795281-e0b5a6fad33f?w=400",
    yearsExperience: 7,
    projectsHelped: 26,
    totalDonated: 3600,
    favoriteAthletes: ["Teddy Riner", "Clarisse Agbegnenou"],
    achievements: ["Mindfulness Certification", "Mental Performance Specialist"],
    location: "Paris, France",
    expertise: ["Mindfulness Training", "Focus Techniques", "Pressure Management"]
  },
  {
    id: "fan14",
    name: "Dr. James Mitchell",
    role: "Biomechanics Engineer",
    specialty: "Movement Optimization",
    description: "Using engineering principles to analyze and optimize athletic movement patterns",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    yearsExperience: 12,
    projectsHelped: 20,
    totalDonated: 5400,
    favoriteAthletes: ["Usain Bolt", "Florence Griffith-Joyner"],
    achievements: ["Biomechanics PhD", "Movement Analysis Pioneer"],
    location: "Toronto, Canada",
    expertise: ["Motion Analysis", "Biomechanical Modeling", "Performance Engineering"]
  },
  {
    id: "fan15",
    name: "Ana Gonzalez",
    role: "Youth Development Coordinator",
    specialty: "Grassroots Programs",
    description: "Developing and implementing sports programs for underprivileged youth in Latin America",
    image: "https://images.unsplash.com/photo-1594736797933-d0d4a732b0af?w=400",
    yearsExperience: 14,
    projectsHelped: 42,
    totalDonated: 7800,
    favoriteAthletes: ["James Rodríguez", "Mariana Pajón"],
    achievements: ["Community Impact Award", "Youth Development Specialist"],
    location: "Mexico City, Mexico",
    expertise: ["Youth Development", "Community Outreach", "Program Management"]
  }
];
