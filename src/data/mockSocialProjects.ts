
export interface SocialProject {
  id: number;
  title: string;
  organization: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  supporters: number;
  category: string;
  location: string;
  deadline: string;
  impact: string;
  featured: boolean;
  sdgGoals: string[];
  status: 'active' | 'completed' | 'planning' | 'paused';
  startDate: string;
  updates: {
    date: string;
    title: string;
    description: string;
  }[];
}

export const mockSocialProjects: SocialProject[] = [
  {
    id: 1,
    title: "Sports Equipment for Rural Schools",
    organization: "Global Sports Foundation",
    description: "Providing essential sports equipment to underserved rural schools across Africa, enabling thousands of children to participate in physical education and discover their athletic potential.",
    image: "https://images.unsplash.com/photo-1594736797933-d0101ba2fe65?w=500&h=300&fit=crop",
    goal: 50000,
    raised: 32000,
    supporters: 245,
    category: "Education",
    location: "Kenya, Tanzania, Uganda",
    deadline: "2024-12-31",
    impact: "Expected to benefit 5,000+ students across 50 schools",
    featured: true,
    status: "active",
    startDate: "2024-01-01",
    sdgGoals: ["Quality Education", "Reduced Inequalities"],
    updates: [
      {
        date: "2024-01-15",
        title: "Equipment Distribution Begins",
        description: "First batch of football equipment delivered to 10 schools in Kenya"
      },
      {
        date: "2024-02-01",
        title: "Partnership Announcement",
        description: "New partnership with local sports clubs for coaching support"
      }
    ]
  },
  {
    id: 2,
    title: "Youth Basketball Courts Initiative",
    organization: "Urban Sports Alliance",
    description: "Building and renovating basketball courts in urban communities to provide safe spaces for youth to engage in sports and stay away from negative influences.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop",
    goal: 100000,
    raised: 67000,
    supporters: 412,
    category: "Infrastructure",
    location: "Chicago, Detroit, Philadelphia",
    deadline: "2024-10-15",
    impact: "Will create 15 new courts serving 2,000+ youth annually",
    featured: true,
    status: "active",
    startDate: "2023-09-01",
    sdgGoals: ["Sustainable Cities", "Good Health"],
    updates: [
      {
        date: "2024-01-20",
        title: "First Court Completed",
        description: "Successfully opened the first renovated court in Chicago"
      },
      {
        date: "2024-02-10",
        title: "Community Engagement",
        description: "Over 200 youth participated in the inaugural tournament"
      }
    ]
  },
  {
    id: 3,
    title: "Adaptive Sports Program",
    organization: "Inclusive Athletics",
    description: "Creating opportunities for athletes with disabilities to participate in competitive sports through specialized equipment, training, and competition programs.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    goal: 75000,
    raised: 41000,
    supporters: 189,
    category: "Inclusion",
    location: "Global - Online & Local Centers",
    deadline: "2024-11-30",
    impact: "Supporting 500+ adaptive athletes worldwide",
    featured: false,
    status: "active",
    startDate: "2023-11-15",
    sdgGoals: ["Reduced Inequalities", "Good Health"],
    updates: [
      {
        date: "2024-01-25",
        title: "Equipment Grant Awarded",
        description: "Received major grant for adaptive sports equipment"
      },
      {
        date: "2024-02-15",
        title: "Training Program Launch",
        description: "New online coaching certification program for adaptive sports"
      }
    ]
  },
  {
    id: 4,
    title: "Women's Football Development",
    organization: "Women In Sports International",
    description: "Promoting women's football in developing countries through coaching education, equipment provision, and league establishment to break gender barriers in sports.",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=500&h=300&fit=crop",
    goal: 80000,
    raised: 52000,
    supporters: 356,
    category: "Gender Equality",
    location: "India, Bangladesh, Nepal",
    deadline: "2024-09-20",
    impact: "Training 200 coaches and 3,000 female players",
    featured: true,
    status: "active",
    startDate: "2023-08-01",
    sdgGoals: ["Gender Equality", "Quality Education"],
    updates: [
      {
        date: "2024-01-30",
        title: "Coach Training Workshop",
        description: "First regional coaching workshop completed with 50 participants"
      },
      {
        date: "2024-02-20",
        title: "Equipment Delivery",
        description: "Football equipment distributed to 20 schools in rural areas"
      }
    ]
  },
  {
    id: 5,
    title: "Swimming Safety Education",
    organization: "Aquatic Safety Alliance",
    description: "Teaching swimming and water safety skills to children in coastal communities to prevent drowning and promote aquatic sports participation.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&h=300&fit=crop",
    goal: 60000,
    raised: 38000,
    supporters: 278,
    category: "Safety & Health",
    location: "Philippines, Indonesia, Thailand",
    deadline: "2024-08-15",
    impact: "Teaching 1,500 children essential swimming skills",
    featured: false,
    status: "active",
    startDate: "2023-10-01",
    sdgGoals: ["Good Health", "Quality Education"],
    updates: [
      {
        date: "2024-02-01",
        title: "Instructor Certification",
        description: "30 local instructors completed safety certification program"
      },
      {
        date: "2024-02-25",
        title: "Community Partnership",
        description: "Partnership with local schools to integrate swimming education"
      }
    ]
  },
  {
    id: 6,
    title: "Mental Health Through Sports",
    organization: "MindSport Wellness",
    description: "Using sports and physical activity as therapy for youth struggling with mental health challenges, providing structured programs and professional support.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    goal: 90000,
    raised: 45000,
    supporters: 203,
    category: "Mental Health",
    location: "UK, Ireland, Netherlands",
    deadline: "2024-12-01",
    impact: "Supporting 800 youth with mental health programs",
    featured: false,
    status: "planning",
    startDate: "2024-03-01",
    sdgGoals: ["Good Health", "Quality Education"],
    updates: [
      {
        date: "2024-02-05",
        title: "Program Expansion",
        description: "Extended program to 5 additional cities across the UK"
      },
      {
        date: "2024-02-28",
        title: "Success Stories",
        description: "Published impact report showing 85% improvement in participant wellbeing"
      }
    ]
  }
];
