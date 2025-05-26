
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
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=300&fit=crop",
    goal: 50000,
    raised: 32000,
    supporters: 245,
    category: "Education",
    location: "Kenya, Tanzania, Uganda",
    deadline: "2024-12-31",
    impact: "Expected to benefit 5,000+ students across 50 schools",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=300&fit=crop",
    goal: 100000,
    raised: 67000,
    supporters: 412,
    category: "Infrastructure",
    location: "Chicago, Detroit, Philadelphia",
    deadline: "2024-10-15",
    impact: "Will create 15 new courts serving 2,000+ youth annually",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=300&fit=crop",
    goal: 75000,
    raised: 41000,
    supporters: 189,
    category: "Inclusion",
    location: "Global - Online & Local Centers",
    deadline: "2024-11-30",
    impact: "Supporting 500+ adaptive athletes worldwide",
    featured: false,
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
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=300&fit=crop",
    goal: 80000,
    raised: 52000,
    supporters: 356,
    category: "Gender Equality",
    location: "India, Bangladesh, Nepal",
    deadline: "2024-09-20",
    impact: "Training 200 coaches and 3,000 female players",
    featured: true,
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
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=500&h=300&fit=crop",
    goal: 60000,
    raised: 38000,
    supporters: 278,
    category: "Safety & Health",
    location: "Philippines, Indonesia, Thailand",
    deadline: "2024-08-15",
    impact: "Teaching 1,500 children essential swimming skills",
    featured: false,
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
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=300&fit=crop",
    goal: 90000,
    raised: 45000,
    supporters: 203,
    category: "Mental Health",
    location: "UK, Ireland, Netherlands",
    deadline: "2024-12-01",
    impact: "Supporting 800 youth with mental health programs",
    featured: false,
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
