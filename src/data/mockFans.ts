
export interface Fan {
  id: number;
  name: string;
  role: string;
  location: string;
  avatar: string;
  bio: string;
  yearsExperience: number;
  specialties: string[];
  projectsHelped: number;
  totalDonated: number;
  achievements: string[];
  socialImpactScore: number;
  currentProjects: string[];
}

export const mockFans: Fan[] = [
  {
    id: 1,
    name: "Dr. Maria Gonzalez",
    role: "Sports Nutritionist",
    location: "Barcelona, Spain",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    bio: "Specialized sports nutritionist working with Olympic athletes. Focused on performance optimization and sustainable eating habits for elite competitors.",
    yearsExperience: 12,
    specialties: ["Performance Nutrition", "Recovery Protocols", "Supplement Guidance"],
    projectsHelped: 8,
    totalDonated: 15000,
    achievements: ["Olympic Team Nutritionist 2021", "Sports Nutrition Certification"],
    socialImpactScore: 95,
    currentProjects: ["Youth Athletics Nutrition Program", "Community Health Initiative"]
  },
  {
    id: 2,
    name: "Coach David Kim",
    role: "Athletic Performance Coach",
    location: "Seoul, South Korea",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Elite performance coach specializing in strength training and mental conditioning for professional athletes across multiple sports disciplines.",
    yearsExperience: 15,
    specialties: ["Strength Training", "Mental Conditioning", "Performance Analysis"],
    projectsHelped: 12,
    totalDonated: 22000,
    achievements: ["National Team Coach", "Performance Excellence Award"],
    socialImpactScore: 92,
    currentProjects: ["Youth Development Program", "Community Sports Center"]
  },
  {
    id: 3,
    name: "Dr. Sarah Williams",
    role: "Sports Physiotherapist",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1594824019128-faa88c9fa9e8?w=400&h=400&fit=crop&crop=face",
    bio: "Physiotherapist specializing in sports injury rehabilitation and prevention. Works with professional teams and individual athletes.",
    yearsExperience: 10,
    specialties: ["Injury Rehabilitation", "Movement Analysis", "Prevention Protocols"],
    projectsHelped: 6,
    totalDonated: 18000,
    achievements: ["Sports Medicine Certification", "Research Publication"],
    socialImpactScore: 88,
    currentProjects: ["Injury Prevention Workshop", "Community Health Screening"]
  },
  {
    id: 4,
    name: "Alex Chen",
    role: "Sports Psychologist",
    location: "Toronto, Canada",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Sports psychologist helping athletes develop mental resilience and performance mindset. Specializes in competition anxiety and motivation.",
    yearsExperience: 8,
    specialties: ["Mental Performance", "Anxiety Management", "Goal Setting"],
    projectsHelped: 9,
    totalDonated: 12000,
    achievements: ["Sports Psychology License", "Mental Health Advocate"],
    socialImpactScore: 90,
    currentProjects: ["Youth Mental Health Program", "Athlete Wellness Initiative"]
  },
  {
    id: 5,
    name: "Coach Elena Vasquez",
    role: "Youth Development Coach",
    location: "Mexico City, Mexico",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Dedicated youth development coach working to provide sports opportunities for underprivileged children in urban communities.",
    yearsExperience: 14,
    specialties: ["Youth Development", "Community Outreach", "Basic Skills Training"],
    projectsHelped: 15,
    totalDonated: 8000,
    achievements: ["Community Service Award", "Youth Coach Certification"],
    socialImpactScore: 96,
    currentProjects: ["Street Soccer Program", "Educational Sports Initiative"]
  },
  {
    id: 6,
    name: "Dr. James Mitchell",
    role: "Sports Medicine Doctor",
    location: "Sydney, Australia",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    bio: "Sports medicine physician with expertise in athlete health monitoring and performance optimization through medical science.",
    yearsExperience: 16,
    specialties: ["Sports Medicine", "Health Monitoring", "Performance Testing"],
    projectsHelped: 7,
    totalDonated: 25000,
    achievements: ["Sports Medicine Board Certification", "Research Excellence"],
    socialImpactScore: 93,
    currentProjects: ["Athlete Health Study", "Community Health Program"]
  },
  {
    id: 7,
    name: "Lisa Anderson",
    role: "Sports Equipment Specialist",
    location: "Denver, USA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    bio: "Equipment specialist ensuring athletes have access to proper gear and technology. Focuses on equipment accessibility for emerging athletes.",
    yearsExperience: 11,
    specialties: ["Equipment Analysis", "Technology Integration", "Accessibility Programs"],
    projectsHelped: 10,
    totalDonated: 16000,
    achievements: ["Equipment Innovation Award", "Accessibility Advocate"],
    socialImpactScore: 87,
    currentProjects: ["Equipment Access Program", "Technology for Athletes"]
  },
  {
    id: 8,
    name: "Marcus Johnson",
    role: "Fitness Trainer",
    location: "Lagos, Nigeria",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
    bio: "Community fitness trainer working to improve health and wellness through sports programs in underserved communities.",
    yearsExperience: 9,
    specialties: ["Community Fitness", "Health Education", "Group Training"],
    projectsHelped: 13,
    totalDonated: 5000,
    achievements: ["Community Health Champion", "Fitness Certification"],
    socialImpactScore: 94,
    currentProjects: ["Community Wellness Program", "Youth Fitness Initiative"]
  },
  {
    id: 9,
    name: "Dr. Ana Rodriguez",
    role: "Sports Researcher",
    location: "Buenos Aires, Argentina",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face",
    bio: "Sports science researcher focusing on performance enhancement and injury prevention through data analysis and biomechanics.",
    yearsExperience: 13,
    specialties: ["Sports Science", "Data Analysis", "Biomechanics"],
    projectsHelped: 5,
    totalDonated: 20000,
    achievements: ["PhD in Sports Science", "Research Excellence Award"],
    socialImpactScore: 89,
    currentProjects: ["Performance Research Study", "Injury Prevention Analysis"]
  },
  {
    id: 10,
    name: "Coach Ahmed Hassan",
    role: "Paralympic Coach",
    location: "Cairo, Egypt",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Paralympic coach specializing in adaptive sports training and empowering athletes with disabilities to achieve their full potential.",
    yearsExperience: 18,
    specialties: ["Adaptive Sports", "Paralympic Training", "Accessibility"],
    projectsHelped: 11,
    totalDonated: 14000,
    achievements: ["Paralympic Team Coach", "Disability Sports Advocate"],
    socialImpactScore: 98,
    currentProjects: ["Paralympic Preparation Program", "Adaptive Sports Access"]
  }
];
