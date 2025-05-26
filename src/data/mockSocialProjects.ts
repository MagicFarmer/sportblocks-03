
export interface SocialProject {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  fundingGoal: number;
  fundingRaised: number;
  status: 'planning' | 'active' | 'completed' | 'paused';
  supportersCount: number;
  athletePartner: string;
  startDate: string;
  endDate?: string;
  impact: string;
  sdgGoals: string[];
}

export const mockSocialProjects: SocialProject[] = [
  {
    id: "sp1",
    name: "Football for Peace - Colombia",
    description: "Building football fields in post-conflict areas to promote peace and reconciliation through sport",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    category: "Community Development",
    location: "Medellín, Colombia",
    fundingGoal: 50000,
    fundingRaised: 32500,
    status: "active",
    supportersCount: 127,
    athletePartner: "James Rodríguez",
    startDate: "2024-01-15",
    impact: "3 football fields built, 450 children participating",
    sdgGoals: ["Peace & Justice", "Quality Education"]
  },
  {
    id: "sp2",
    name: "Clean Water Through Sport",
    description: "Installing water purification systems in rural schools with sports programs",
    image: "https://images.unsplash.com/photo-1594736797933-d0d4a732b0af?w=400",
    category: "Water & Sanitation",
    location: "Kenya",
    fundingGoal: 75000,
    fundingRaised: 68200,
    status: "active",
    supportersCount: 203,
    athletePartner: "Eliud Kipchoge",
    startDate: "2023-10-01",
    impact: "15 schools with clean water access, 2,800 students benefited",
    sdgGoals: ["Clean Water", "Good Health"]
  },
  {
    id: "sp3",
    name: "Girls Basketball Academy",
    description: "Empowering young girls through basketball education and leadership training",
    image: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400",
    category: "Gender Equality",
    location: "Lagos, Nigeria",
    fundingGoal: 40000,
    fundingRaised: 40000,
    status: "completed",
    supportersCount: 89,
    athletePartner: "Nneka Ogwumike",
    startDate: "2023-06-01",
    endDate: "2024-05-31",
    impact: "120 girls trained, 85% continued education",
    sdgGoals: ["Gender Equality", "Quality Education"]
  },
  {
    id: "sp4",
    name: "Paralympic Dreams",
    description: "Supporting adaptive sports equipment for athletes with disabilities",
    image: "https://images.unsplash.com/photo-1594736797933-d0d4a732b0af?w=400",
    category: "Inclusion",
    location: "São Paulo, Brazil",
    fundingGoal: 30000,
    fundingRaised: 18750,
    status: "active",
    supportersCount: 156,
    athletePartner: "Daniel Dias",
    startDate: "2024-03-01",
    impact: "45 athletes equipped, 3 regional competitions supported",
    sdgGoals: ["Reduced Inequalities", "Good Health"]
  },
  {
    id: "sp5",
    name: "Mountain Rescue Training",
    description: "Training local communities in mountain rescue using climbing and skiing techniques",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400",
    category: "Safety & Rescue",
    location: "Nepal",
    fundingGoal: 25000,
    fundingRaised: 15300,
    status: "active",
    supportersCount: 78,
    athletePartner: "Nirmal Purja",
    startDate: "2024-02-01",
    impact: "32 rescuers trained, 8 successful rescue operations",
    sdgGoals: ["Good Health", "Sustainable Communities"]
  },
  {
    id: "sp6",
    name: "Boxing Against Violence",
    description: "Using boxing training to prevent youth violence and build discipline",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400",
    category: "Youth Development",
    location: "Chicago, USA",
    fundingGoal: 45000,
    fundingRaised: 33800,
    status: "active",
    supportersCount: 134,
    athletePartner: "Claressa Shields",
    startDate: "2023-09-01",
    impact: "89 youth enrolled, 78% reduction in violent incidents",
    sdgGoals: ["Peace & Justice", "Good Health"]
  },
  {
    id: "sp7",
    name: "Swimming for Autism",
    description: "Specialized swimming programs for children with autism spectrum disorders",
    image: "https://images.unsplash.com/photo-1574968504005-e03bef4a4e18?w=400",
    category: "Health & Therapy",
    location: "Melbourne, Australia",
    fundingGoal: 35000,
    fundingRaised: 35000,
    status: "completed",
    supportersCount: 92,
    athletePartner: "Katie Ledecky",
    startDate: "2023-04-01",
    endDate: "2024-03-31",
    impact: "65 children in program, 90% improvement in social skills",
    sdgGoals: ["Good Health", "Quality Education"]
  },
  {
    id: "sp8",
    name: "Rural Tennis Courts",
    description: "Building tennis courts in underserved rural communities",
    image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc8b?w=400",
    category: "Infrastructure",
    location: "Rural India",
    fundingGoal: 60000,
    fundingRaised: 42100,
    status: "active",
    supportersCount: 187,
    athletePartner: "Sania Mirza",
    startDate: "2024-01-01",
    impact: "4 courts built, 320 children learning tennis",
    sdgGoals: ["Quality Education", "Sustainable Communities"]
  },
  {
    id: "sp9",
    name: "Wheelchair Basketball League",
    description: "Establishing the first professional wheelchair basketball league in Central America",
    image: "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400",
    category: "Professional Sports",
    location: "Guatemala",
    fundingGoal: 80000,
    fundingRaised: 56700,
    status: "active",
    supportersCount: 234,
    athletePartner: "Various Paralympic Athletes",
    startDate: "2023-11-01",
    impact: "6 teams formed, 72 athletes competing",
    sdgGoals: ["Reduced Inequalities", "Economic Growth"]
  },
  {
    id: "sp10",
    name: "Surf Therapy for PTSD",
    description: "Using surf therapy to help veterans and trauma survivors heal",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400",
    category: "Mental Health",
    location: "California, USA",
    fundingGoal: 28000,
    fundingRaised: 21400,
    status: "active",
    supportersCount: 145,
    athletePartner: "Kelly Slater",
    startDate: "2024-04-01",
    impact: "38 veterans participated, 85% reported improvement",
    sdgGoals: ["Good Health", "Mental Well-being"]
  },
  {
    id: "sp11",
    name: "Arctic Sports Heritage",
    description: "Preserving traditional Arctic sports and games through documentation and education",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "Cultural Preservation",
    location: "Greenland",
    fundingGoal: 22000,
    fundingRaised: 16800,
    status: "active",
    supportersCount: 67,
    athletePartner: "Inuit Athletes Collective",
    startDate: "2024-01-01",
    impact: "12 traditional games documented, 150 youth trained",
    sdgGoals: ["Cultural Heritage", "Quality Education"]
  },
  {
    id: "sp12",
    name: "Cycling for Climate",
    description: "Promoting cycling as sustainable transport through community bike-sharing programs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    category: "Environment",
    location: "Amsterdam, Netherlands",
    fundingGoal: 55000,
    fundingRaised: 48300,
    status: "active",
    supportersCount: 289,
    athletePartner: "Marianne Vos",
    startDate: "2023-08-01",
    impact: "500 bikes in circulation, 40% reduction in car trips",
    sdgGoals: ["Climate Action", "Sustainable Cities"]
  },
  {
    id: "sp13",
    name: "Martial Arts for Discipline",
    description: "Teaching martial arts to at-risk youth to build discipline and confidence",
    image: "https://images.unsplash.com/photo-1595992376039-2dd6e3c8d2b1?w=400",
    category: "Youth Development",
    location: "Manila, Philippines",
    fundingGoal: 38000,
    fundingRaised: 29200,
    status: "active",
    supportersCount: 112,
    athletePartner: "Manny Pacquiao",
    startDate: "2023-12-01",
    impact: "95 youth enrolled, 88% attendance rate",
    sdgGoals: ["Quality Education", "Peace & Justice"]
  },
  {
    id: "sp14",
    name: "Winter Sports Access",
    description: "Making winter sports accessible to low-income families through equipment lending",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    category: "Access & Inclusion",
    location: "Colorado, USA",
    fundingGoal: 42000,
    fundingRaised: 32600,
    status: "active",
    supportersCount: 178,
    athletePartner: "Mikaela Shiffrin",
    startDate: "2023-11-01",
    impact: "234 families served, 450 equipment loans",
    sdgGoals: ["Reduced Inequalities", "Good Health"]
  },
  {
    id: "sp15",
    name: "Ocean Conservation Through Sailing",
    description: "Teaching sailing while conducting ocean cleanup and marine conservation education",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400",
    category: "Environment",
    location: "Mediterranean Sea",
    fundingGoal: 65000,
    fundingRaised: 49700,
    status: "active",
    supportersCount: 198,
    athletePartner: "Ben Ainslie",
    startDate: "2024-02-01",
    impact: "2.5 tons of plastic removed, 180 youth trained",
    sdgGoals: ["Life Below Water", "Quality Education"]
  }
];
