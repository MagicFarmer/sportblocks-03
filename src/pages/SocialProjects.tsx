
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProjectCard from "@/components/SocialProjectCard";
import FinancialDashboard from "@/components/FinancialDashboard";
import { useStarkNet } from "@/hooks/useStarkNet";
import { mockSocialProjects } from "@/data/mockSocialProjects";
import { Target, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialProjects = () => {
  const { wallet, userData } = useStarkNet();
  const [filters, setFilters] = useState({
    status: "All",
    category: "All",
    sdg: "All"
  });

  const categories = ["All", ...new Set(mockSocialProjects.map(p => p.category))];
  const statuses = ["All", "active", "completed", "planning", "paused"];
  const sdgGoals = ["All", ...new Set(mockSocialProjects.flatMap(p => p.sdgGoals))];

  const filteredProjects = mockSocialProjects.filter(project => {
    return (filters.status === "All" || project.status === filters.status) &&
           (filters.category === "All" || project.category === filters.category) &&
           (filters.sdg === "All" || project.sdgGoals.includes(filters.sdg));
  });

  const clearFilters = () => {
    setFilters({ status: "All", category: "All", sdg: "All" });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== "All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Target className="text-green-400 w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold text-white">Social Projects Gallery</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover and support meaningful projects that create lasting impact through sports. 
            Every contribution helps build stronger communities worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-green-400 w-5 h-5" />
            <h3 className="text-lg font-bold text-white">Filter Projects</h3>
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                size="sm"
                variant="outline"
                className="ml-auto border-green-400/50 text-green-400 hover:bg-green-400/10"
              >
                <X className="w-4 h-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Status</label>
              <select
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === "All" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === "All" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm text-gray-300 mb-2 block">UN SDG Goal</label>
              <select
                value={filters.sdg}
                onChange={(e) => setFilters(prev => ({ ...prev, sdg: e.target.value }))}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
              >
                {sdgGoals.map(sdg => (
                  <option key={sdg} value={sdg}>
                    {sdg === "All" ? "All SDG Goals" : sdg}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <SocialProjectCard 
              key={project.id} 
              project={project} 
              isWalletConnected={wallet.isConnected && !!userData}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">No Projects Found</h2>
            <p className="text-gray-400 mb-6">
              No projects match your current filter criteria.
            </p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Stats Section */}
        {filteredProjects.length > 0 && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{filteredProjects.length}</p>
                <p className="text-gray-400">Projects Found</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {filteredProjects.reduce((total, project) => total + project.supporters, 0)}
                </p>
                <p className="text-gray-400">Total Supporters</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  ${filteredProjects.reduce((total, project) => total + project.raised, 0).toLocaleString()}
                </p>
                <p className="text-gray-400">Funds Raised</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {filteredProjects.filter(p => p.status === 'completed').length}
                </p>
                <p className="text-gray-400">Completed Projects</p>
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

export default SocialProjects;
