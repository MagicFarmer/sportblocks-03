
export interface Fan {
  id: number;
  name: string;
  avatar: string;
  profession: string;
  role: string;
  bio: string;
  joinedDate: string;
  nftsOwned: number;
  level: string;
  location: string;
  contributions: number;
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
    name: "Dr. Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    profession: "Sports Medicine Specialist",
    role: "Sports Medicine Specialist",
    bio: "Dedicated sports medicine physician with 15 years of experience supporting elite athletes.",
    joinedDate: "2023-01",
    nftsOwned: 12,
    level: "Elite Supporter",
    location: "London, UK",
    contributions: 24500,
    yearsExperience: 15,
    projectsHelped: 18,
    totalDonated: 24500,
    specialties: ["Injury Prevention", "Rehabilitation", "Performance Medicine"],
    achievements: ["Olympic Team Physician", "Sports Medicine Award 2022"],
    currentProjects: ["Youth Athletics Program", "Injury Prevention Research"]
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    profession: "Tech Entrepreneur",
    role: "Sports Technology Consultant",
    bio: "Passionate about the intersection of technology and sports, supporting athletes through innovation.",
    joinedDate: "2023-03",
    nftsOwned: 8,
    level: "Gold Supporter",
    location: "San Francisco, USA",
    contributions: 18200,
    yearsExperience: 12,
    projectsHelped: 14,
    totalDonated: 18200,
    specialties: ["Sports Analytics", "Performance Technology", "Wearable Devices"],
    achievements: ["Tech Innovation Award", "Sports Tech Pioneer"],
    currentProjects: ["AI Performance Analysis", "Smart Training Equipment"]
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b2c003de?w=400&h=400&fit=crop&crop=face",
    profession: "Former Olympic Athlete",
    role: "Athletic Performance Coach",
    bio: "Olympic gymnast turned sports advocate, helping young athletes achieve their dreams.",
    joinedDate: "2023-02",
    nftsOwned: 15,
    level: "Elite Supporter",
    location: "Barcelona, Spain",
    contributions: 32100,
    yearsExperience: 18,
    projectsHelped: 22,
    totalDonated: 32100,
    specialties: ["Gymnastics Training", "Mental Preparation", "Youth Development"],
    achievements: ["Olympic Gold Medal", "Coach of the Year 2023"],
    currentProjects: ["Elite Gymnastics Academy", "Mental Health in Sports"]
  },
  {
    id: 4,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    profession: "Sports Journalist",
    role: "Sports Media Specialist",
    bio: "Covering sports stories that matter, bringing attention to athletes who make a difference.",
    joinedDate: "2023-04",
    nftsOwned: 6,
    level: "Silver Supporter",
    location: "Melbourne, Australia",
    contributions: 9800,
    yearsExperience: 8,
    projectsHelped: 12,
    totalDonated: 9800,
    specialties: ["Sports Journalism", "Media Relations", "Athlete Advocacy"],
    achievements: ["Sports Journalist of the Year", "Documentary Award"],
    currentProjects: ["Athlete Stories Documentary", "Sports Media Ethics"]
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    profession: "Youth Sports Coach",
    role: "Youth Development Coordinator",
    bio: "Dedicated to developing the next generation of athletes and promoting inclusive sports programs.",
    joinedDate: "2023-05",
    nftsOwned: 10,
    level: "Gold Supporter",
    location: "Mexico City, Mexico",
    contributions: 14700,
    yearsExperience: 10,
    projectsHelped: 16,
    totalDonated: 14700,
    specialties: ["Youth Coaching", "Inclusive Sports", "Community Development"],
    achievements: ["Youth Coach Award", "Community Impact Recognition"],
    currentProjects: ["Inclusive Sports Program", "Youth Leadership Development"]
  },
  {
    id: 6,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    profession: "Sports Psychologist",
    role: "Sports Psychologist",
    bio: "Helping athletes overcome mental barriers and achieve peak performance through psychological support.",
    joinedDate: "2023-06",
    nftsOwned: 7,
    level: "Silver Supporter",
    location: "Seoul, South Korea",
    contributions: 11300,
    yearsExperience: 9,
    projectsHelped: 13,
    totalDonated: 11300,
    specialties: ["Mental Performance", "Stress Management", "Team Psychology"],
    achievements: ["Psychology Excellence Award", "Research Publication"],
    currentProjects: ["Mental Health Research", "Performance Psychology Training"]
  }
];
