
export interface Fan {
  id: number;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  location: string;
  yearsExperience: number;
  projectsHelped: number;
  totalDonated: number;
  specialties: string[];
  achievements: string[];
  currentProjects: string[];
}

export const mockFans: Fan[] = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop",
    role: "Sports Nutritionist",
    bio: "Elite performance nutritionist specializing in endurance sports and recovery optimization.",
    location: "Brazil",
    yearsExperience: 15,
    projectsHelped: 127,
    totalDonated: 45000,
    specialties: ["Performance Nutrition", "Supplement Guidance", "Recovery Protocols"],
    achievements: [
      "Worked with 5 Olympic medal winners",
      "Published 25+ research papers",
      "Consultant for national teams"
    ],
    currentProjects: [
      "Olympic nutrition program",
      "Youth athlete development"
    ]
  },
  {
    id: 2,
    name: "Coach Roberto Silva",
    avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    role: "Performance Coach",
    bio: "High-performance coach focusing on explosive power development and injury prevention.",
    location: "Mexico",
    yearsExperience: 12,
    projectsHelped: 89,
    totalDonated: 32000,
    specialties: ["Strength & Conditioning", "Injury Prevention", "Performance Analysis"],
    achievements: [
      "Trained 3 world champions",
      "20% average performance improvement",
      "Zero major injuries in 5 years"
    ],
    currentProjects: [
      "National team training",
      "Youth development program"
    ]
  },
  {
    id: 3,
    name: "Dr. Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
    role: "Sports Psychologist",
    bio: "Mental performance specialist helping athletes overcome barriers and achieve peak mindset.",
    location: "Canada",
    yearsExperience: 10,
    projectsHelped: 156,
    totalDonated: 38000,
    specialties: ["Mental Training", "Stress Management", "Confidence Building"],
    achievements: [
      "Mental coach for Olympic teams",
      "Author of 'Peak Performance Mindset'",
      "TEDx speaker on sports psychology"
    ],
    currentProjects: [
      "Olympic mental preparation",
      "Elite athlete counseling"
    ]
  },
  {
    id: 4,
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    role: "Recovery Specialist",
    bio: "Certified massage therapist specializing in sports recovery and injury rehabilitation.",
    location: "Australia",
    yearsExperience: 8,
    projectsHelped: 94,
    totalDonated: 28000,
    specialties: ["Sports Massage", "Recovery Therapy", "Injury Rehabilitation"],
    achievements: [
      "Worked with professional rugby teams",
      "95% client recovery success rate",
      "Specialized in Olympic preparation"
    ],
    currentProjects: [
      "Professional sports teams",
      "Injury rehabilitation clinic"
    ]
  }
];
