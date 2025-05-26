
export interface SocialProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  targetAmount: number;
  currentAmount: number;
  backers: number;
  athlete: string;
  sport: string;
  urgency: "High" | "Medium" | "Low";
  sdgGoals: string[];
  impact: string;
  timeline: string;
  status: "Active" | "Completed" | "Upcoming";
}

export const mockSocialProjects: SocialProject[] = [
  {
    id: 1,
    title: "Clean Water for Rural Schools",
    description: "Providing clean water access and sanitation facilities to rural schools in Kenya, ensuring children can focus on education and sports.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    category: "Education & Health",
    location: "Nairobi, Kenya",
    targetAmount: 25000,
    currentAmount: 18500,
    backers: 342,
    athlete: "Marcus Johnson",
    sport: "Marathon Running",
    urgency: "High",
    sdgGoals: ["Clean Water", "Quality Education", "Good Health"],
    impact: "500+ children will have access to clean water and improved sanitation",
    timeline: "6 months",
    status: "Active"
  },
  {
    id: 2,
    title: "Youth Soccer Academy",
    description: "Building a community soccer academy in São Paulo favelas to provide sports opportunities and mentorship for at-risk youth.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
    category: "Youth Development",
    location: "São Paulo, Brazil",
    targetAmount: 40000,
    currentAmount: 32000,
    backers: 528,
    athlete: "Isabella Santos",
    sport: "Football",
    urgency: "Medium",
    sdgGoals: ["Quality Education", "Reduced Inequalities", "Peace and Justice"],
    impact: "300+ youth will receive sports training and life skills education",
    timeline: "12 months",
    status: "Active"
  },
  {
    id: 3,
    title: "Paralympic Equipment Fund",
    description: "Providing specialized sports equipment and training gear for aspiring Paralympic athletes in developing countries.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&h=300&fit=crop",
    category: "Accessibility",
    location: "Multiple Countries",
    targetAmount: 15000,
    currentAmount: 15000,
    backers: 276,
    athlete: "Elena Petrov",
    sport: "Paralympic Swimming",
    urgency: "Low",
    sdgGoals: ["Reduced Inequalities", "Good Health", "Quality Education"],
    impact: "50+ athletes will receive professional-grade equipment",
    timeline: "Completed",
    status: "Completed"
  },
  {
    id: 4,
    title: "Girls in Sports Initiative",
    description: "Empowering young girls through basketball programs, providing education scholarships and leadership development.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
    category: "Gender Equality",
    location: "Mumbai, India",
    targetAmount: 30000,
    currentAmount: 22500,
    backers: 445,
    athlete: "Priya Sharma",
    sport: "Basketball",
    urgency: "High",
    sdgGoals: ["Gender Equality", "Quality Education", "Reduced Inequalities"],
    impact: "200+ girls will receive sports training and educational support",
    timeline: "8 months",
    status: "Active"
  },
  {
    id: 5,
    title: "Climate Action Through Cycling",
    description: "Environmental awareness program using cycling events to promote sustainable transportation and climate action.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Environment",
    location: "Copenhagen, Denmark",
    targetAmount: 20000,
    currentAmount: 14000,
    backers: 312,
    athlete: "Lars Nielsen",
    sport: "Cycling",
    urgency: "Medium",
    sdgGoals: ["Climate Action", "Sustainable Cities", "Good Health"],
    impact: "1000+ people will participate in environmental awareness events",
    timeline: "10 months",
    status: "Active"
  },
  {
    id: 6,
    title: "Nutrition Education Program",
    description: "Teaching proper nutrition and cooking skills to young athletes and their families in underserved communities.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
    category: "Health & Nutrition",
    location: "Detroit, USA",
    targetAmount: 18000,
    currentAmount: 12000,
    backers: 287,
    athlete: "David Johnson",
    sport: "Boxing",
    urgency: "Medium",
    sdgGoals: ["Zero Hunger", "Good Health", "Quality Education"],
    impact: "150+ families will learn proper nutrition and cooking skills",
    timeline: "6 months",
    status: "Active"
  },
  {
    id: 7,
    title: "Mental Health Support for Athletes",
    description: "Providing mental health resources and counseling services for young athletes dealing with performance pressure.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    category: "Mental Health",
    location: "Tokyo, Japan",
    targetAmount: 22000,
    currentAmount: 8000,
    backers: 198,
    athlete: "Yuki Tanaka",
    sport: "Gymnastics",
    urgency: "High",
    sdgGoals: ["Good Health", "Quality Education", "Reduced Inequalities"],
    impact: "100+ young athletes will receive mental health support",
    timeline: "Starting soon",
    status: "Upcoming"
  },
  {
    id: 8,
    title: "Indigenous Sports Preservation",
    description: "Preserving and promoting traditional indigenous sports and games while providing modern training opportunities.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    category: "Cultural Heritage",
    location: "Cusco, Peru",
    targetAmount: 35000,
    currentAmount: 25000,
    backers: 367,
    athlete: "Carlos Mendez",
    sport: "Traditional Sports",
    urgency: "Medium",
    sdgGoals: ["Quality Education", "Reduced Inequalities", "Cultural Preservation"],
    impact: "500+ community members will learn traditional sports",
    timeline: "9 months",
    status: "Active"
  },
  {
    id: 9,
    title: "Adaptive Technology for Athletes",
    description: "Developing and providing adaptive technology solutions for athletes with disabilities to enhance their training and performance.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    category: "Technology & Innovation",
    location: "Berlin, Germany",
    targetAmount: 45000,
    currentAmount: 30000,
    backers: 412,
    athlete: "Anna Mueller",
    sport: "Paralympic Track",
    urgency: "Low",
    sdgGoals: ["Innovation", "Reduced Inequalities", "Good Health"],
    impact: "75+ athletes will receive custom adaptive technology",
    timeline: "14 months",
    status: "Active"
  },
  {
    id: 10,
    title: "Rural Community Sports Center",
    description: "Building a multi-purpose sports facility in a rural community to provide year-round training and recreation opportunities.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    category: "Infrastructure",
    location: "Rural Ghana",
    targetAmount: 60000,
    currentAmount: 45000,
    backers: 623,
    athlete: "Kwame Asante",
    sport: "Track and Field",
    urgency: "High",
    sdgGoals: ["Quality Education", "Good Health", "Sustainable Communities"],
    impact: "2000+ community members will have access to sports facilities",
    timeline: "18 months",
    status: "Active"
  }
];
