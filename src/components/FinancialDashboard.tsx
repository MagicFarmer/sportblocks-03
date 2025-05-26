
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { TrendingUp, DollarSign, Users, Heart, Target, Trophy } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const FinancialDashboard = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "Where athletes build legacy, fans create value, and every transaction fuels social impact.",
    "Decentralized sports economy. Transparent donations. Authentic athlete ownership.",
    "From digital moments to real-world change – every NFT supports a greater cause."
  ];

  // Mock data for charts
  const donationData = [
    { month: "Jan", donations: 45000, supporters: 320, projects: 12 },
    { month: "Feb", donations: 52000, supporters: 380, projects: 15 },
    { month: "Mar", donations: 67000, supporters: 450, projects: 18 },
    { month: "Apr", donations: 78000, supporters: 520, projects: 22 },
    { month: "May", donations: 89000, supporters: 630, projects: 25 },
    { month: "Jun", donations: 95000, supporters: 720, projects: 28 }
  ];

  const categoryData = [
    { name: "Youth Sports", value: 35, color: "#10B981" },
    { name: "Equipment Access", value: 25, color: "#3B82F6" },
    { name: "Training Facilities", value: 20, color: "#8B5CF6" },
    { name: "Health & Wellness", value: 12, color: "#F59E0B" },
    { name: "Education", value: 8, color: "#EF4444" }
  ];

  const transactionData = [
    { type: "NFT Sales", amount: 245000, count: 1250 },
    { type: "Donations", amount: 89000, count: 3200 },
    { type: "Fan Support", amount: 156000, count: 8900 },
    { type: "Project Funding", amount: 78000, count: 280 }
  ];

  const chartConfig = {
    donations: {
      label: "Donations",
      color: "#10B981",
    },
    supporters: {
      label: "Supporters", 
      color: "#3B82F6",
    },
    projects: {
      label: "Projects",
      color: "#8B5CF6",
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Platform Analytics
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real-time insights into our decentralized sports ecosystem
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">$568K</div>
              <div className="text-sm text-gray-300">Total Donations</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">3,250</div>
              <div className="text-sm text-gray-300">Active Supporters</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">28</div>
              <div className="text-sm text-gray-300">Active Projects</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">1,250</div>
              <div className="text-sm text-gray-300">NFTs Minted</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Donations Trend */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Donation Growth
              </h3>
              <ChartContainer config={chartConfig} className="h-64">
                <AreaChart data={donationData}>
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="donations"
                    stroke="#10B981"
                    fill="url(#donationGradient)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="donationGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Project Categories */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                Project Categories
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                      labelLine={false}
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '8px',
                        color: 'white'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Transaction Volume */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-blue-400" />
                Transaction Volume
              </h3>
              <ChartContainer config={chartConfig} className="h-64">
                <BarChart data={transactionData}>
                  <XAxis dataKey="type" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Supporter Growth */}
          <Card className="bg-white/10 backdrop-blur-lg border border-white/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-yellow-400" />
                Community Growth
              </h3>
              <ChartContainer config={chartConfig} className="h-64">
                <LineChart data={donationData}>
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="supporters"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="projects"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Quote Rotator */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/30 max-w-4xl mx-auto">
            <div className="relative h-20 flex items-center justify-center">
              <blockquote 
                key={currentQuote}
                className="text-xl sm:text-2xl font-light text-white italic animate-fade-in text-center leading-relaxed"
              >
                "{quotes[currentQuote]}"
              </blockquote>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {quotes.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-blue-400' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialDashboard;
