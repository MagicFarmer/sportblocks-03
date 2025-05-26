
import { X } from "lucide-react";

interface FilterButtonsProps {
  filters: {
    sport: string;
    event: string;
    country: string;
    rarity: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

const FilterButtons = ({ filters, onFilterChange, onClearFilters, hasActiveFilters }: FilterButtonsProps) => {
  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball", "Hockey", "Golf", "Swimming", "Athletics", "Boxing", "MMA", "Cricket", "Rugby"];
  const events = ["All", "World Cup", "Olympics", "Champions League", "Super Bowl", "NBA Finals", "Wimbledon", "Masters", "World Championship", "Premier League", "Stanley Cup", "Grand Prix", "Commonwealth Games"];
  const countries = ["All", "USA", "Argentina", "Brazil", "Spain", "France", "Germany", "UK", "Japan", "Australia", "Canada", "Italy", "Netherlands", "Portugal"];
  const rarities = ["All", "Common", "Rare", "Epic", "Legendary"];

  return (
    <div className="mb-8 sm:mb-12">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Sport Filter */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm font-medium px-2 py-1">Sport:</span>
          {sports.slice(0, 8).map((sport) => (
            <button
              key={sport}
              onClick={() => onFilterChange('sport', sport)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                filters.sport === sport
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Event Filter */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm font-medium px-2 py-1">Event:</span>
          {events.slice(0, 7).map((event) => (
            <button
              key={event}
              onClick={() => onFilterChange('event', event)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                filters.event === event
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {event}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Country Filter */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm font-medium px-2 py-1">Country:</span>
          {countries.slice(0, 8).map((country) => (
            <button
              key={country}
              onClick={() => onFilterChange('country', country)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                filters.country === country
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* Rarity Filter */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          <span className="text-gray-400 text-sm font-medium px-2 py-1">Rarity:</span>
          {rarities.map((rarity) => (
            <button
              key={rarity}
              onClick={() => onFilterChange('rarity', rarity)}
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg font-medium transition-all duration-200 text-xs sm:text-sm ${
                filters.rarity === rarity
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {rarity}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <div className="flex justify-center">
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-lg text-red-300 hover:text-red-200 transition-all duration-200"
          >
            <X size={16} />
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
