
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FanCard from "@/components/FanCard";
import FinancialDashboard from "@/components/FinancialDashboard";
import { useStarkNet } from "@/hooks/useStarkNet";
import { mockFans } from "@/data/mockFans";
import { Star, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FansGallery = () => {
  const { wallet, userData } = useStarkNet();
  const [filters, setFilters] = useState({
    role: "All",
    experience: "All",
    location: "All"
  });

  const roles = ["All", ...new Set(mockFans.map(f => f.role))];
  const experiences = ["All", "1-5 years", "6-10 years", "11-15 years", "16+ years"];
  const locations = ["All", ...new Set(mockFans.map(f => f.location))];

  const filteredFans = mockFans.filter(fan => {
    const matchesRole = filters.role === "All" || fan.role === filters.role;
    const matchesLocation = filters.location === "All" || fan.location === filters.location;
    
    let matchesExperience = true;
    if (filters.experience !== "All") {
      const exp = fan.yearsExperience;
      switch (filters.experience) {
        case "1-5 years":
          matchesExperience = exp >= 1 && exp <= 5;
          break;
        case "6-10 years":
          matchesExperience = exp >= 6 && exp <= 10;
          break;
        case "11-15 years":
          matchesExperience = exp >= 11 && exp <= 15;
          break;
        case "16+ years":
          matchesExperience = exp >= 16;
          break;
      }
    }
    
    return matchesRole && matchesExperience && matchesLocation;
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
            Connect with dedicated sports professionals who support athletes and communities. 
            Discover nutritionists, coaches, therapists, and other experts making a difference.
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
                {experiences.map(exp => (
                  <option key={exp} value={exp}>
                    {exp === "All" ? "All Experience Levels" : exp}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === "All" ? "All Locations" : location}
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
            <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{filteredFans.length}</p>
                <p className="text-gray-400">Professionals Found</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {filteredFans.reduce((total, fan) => total + fan.projectsHelped, 0)}
                </p>
                <p className="text-gray-400">Projects Helped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  ${filteredFans.reduce((total, fan) => total + fan.totalDonated, 0).toLocaleString()}
                </p>
                <p className="text-gray-400">Total Donated</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {Math.round(filteredFans.reduce((total, fan) => total + fan.yearsExperience, 0) / filteredFans.length)}
                </p>
                <p className="text-gray-400">Avg. Experience</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Financial Dashboard */}
      <FinancialDashboard />

      <Footer />
    </div>
  );
};

export default FansGallery;
