
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FanCard from "@/components/FanCard";
import { useStarkNet } from "@/hooks/useStarkNet";
import { mockFans } from "@/data/mockFans";
import { Users, Filter, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FansGallery = () => {
  const { wallet, userData } = useStarkNet();
  const [filters, setFilters] = useState({
    role: "All",
    experience: "All",
    location: "All"
  });

  const roles = ["All", ...new Set(mockFans.map(f => f.role))];
  const experienceLevels = ["All", "0-5 years", "6-10 years", "11-15 years", "16+ years"];
  const locations = ["All", ...new Set(mockFans.map(f => f.location.split(", ")[1] || f.location))];

  const filteredFans = mockFans.filter(fan => {
    const experienceMatch = filters.experience === "All" || 
      (filters.experience === "0-5 years" && fan.yearsExperience <= 5) ||
      (filters.experience === "6-10 years" && fan.yearsExperience >= 6 && fan.yearsExperience <= 10) ||
      (filters.experience === "11-15 years" && fan.yearsExperience >= 11 && fan.yearsExperience <= 15) ||
      (filters.experience === "16+ years" && fan.yearsExperience >= 16);
    
    const locationMatch = filters.location === "All" || fan.location.includes(filters.location);
    
    return (filters.role === "All" || fan.role === filters.role) &&
           experienceMatch &&
           locationMatch;
  });

  const clearFilters = () => {
    setFilters({ role: "All", experience: "All", location: "All" });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== "All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Star className="text-purple-400 w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold text-white">Sports Professionals Gallery</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet the dedicated professionals who support athletes and build stronger sports communities. 
            Connect with coaches, nutritionists, therapists, and other specialists.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-purple-400 w-5 h-5" />
            <h3 className="text-lg font-bold text-white">Filter Professionals</h3>
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                size="sm"
                variant="outline"
                className="ml-auto border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Role</label>
              <select
                value={filters.role}
                onChange={(e) => setFilters(prev => ({ ...prev, role: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {roles.map(role => (
                  <option key={role} value={role}>
                    {role === "All" ? "All Roles" : role}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Experience</label>
              <select
                value={filters.experience}
                onChange={(e) => setFilters(prev => ({ ...prev, experience: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {experienceLevels.map(level => (
                  <option key={level} value={level}>
                    {level === "All" ? "All Experience Levels" : level}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Region</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === "All" ? "All Regions" : location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Fans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredFans.map((fan) => (
            <FanCard 
              key={fan.id} 
              fan={fan} 
              isWalletConnected={wallet.isConnected && !!userData}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredFans.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">No Professionals Found</h2>
            <p className="text-gray-400 mb-6">
              No professionals match your current filter criteria.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        {filteredFans.length > 0 && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{filteredFans.length}</p>
                <p className="text-gray-400">Professionals Found</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {Math.round(filteredFans.reduce((total, fan) => total + fan.yearsExperience, 0) / filteredFans.length)}
                </p>
                <p className="text-gray-400">Avg Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {filteredFans.reduce((total, fan) => total + fan.projectsHelped, 0)}
                </p>
                <p className="text-gray-400">Total Projects Helped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  ${filteredFans.reduce((total, fan) => total + fan.totalDonated, 0).toLocaleString()}
                </p>
                <p className="text-gray-400">Total Contributions</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FansGallery;
