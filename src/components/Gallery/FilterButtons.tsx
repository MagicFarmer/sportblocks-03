
import { X } from "lucide-react";

interface FilterButtonsProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
}

const FilterButtons = ({ currentCategory, setCurrentCategory }: FilterButtonsProps) => {
  const categories = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball", "Hockey", "Golf", "Swimming", "Athletics", "Boxing", "MMA", "Cricket", "Rugby"];

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm font-medium px-2 py-1">Category:</span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                currentCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      {currentCategory !== "All" && (
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentCategory("All")}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-red-300 hover:text-red-200 transition-all duration-200"
          >
            <X size={16} />
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
