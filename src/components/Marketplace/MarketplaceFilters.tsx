
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MarketplaceFilters } from "@/hooks/useMarketplace";

interface MarketplaceFiltersProps {
  filters: MarketplaceFilters;
  onFiltersChange: (filters: Partial<MarketplaceFilters>) => void;
}

const MarketplaceFiltersComponent = ({ filters, onFiltersChange }: MarketplaceFiltersProps) => {
  const sports = ["All", "Football", "Basketball", "Soccer", "Tennis", "Baseball", "Athletics"];
  const rarities = ["All", "common", "rare", "epic", "legendary"];
  const countries = ["All", "USA", "Mexico", "Brazil", "Argentina", "Spain", "France", "Germany", "Italy"];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-8">
      <h3 className="text-xl font-bold text-white mb-4">Filtros</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Sport Filter */}
        <div>
          <Label htmlFor="sport" className="text-white text-sm">Deporte</Label>
          <select
            id="sport"
            value={filters.sport}
            onChange={(e) => onFiltersChange({ sport: e.target.value })}
            className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white text-sm"
          >
            {sports.map(sport => (
              <option key={sport} value={sport} className="text-black">
                {sport === "All" ? "Todos" : sport}
              </option>
            ))}
          </select>
        </div>

        {/* Rarity Filter */}
        <div>
          <Label htmlFor="rarity" className="text-white text-sm">Rareza</Label>
          <select
            id="rarity"
            value={filters.rarity}
            onChange={(e) => onFiltersChange({ rarity: e.target.value })}
            className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white text-sm"
          >
            {rarities.map(rarity => (
              <option key={rarity} value={rarity} className="text-black">
                {rarity === "All" ? "Todas" : 
                 rarity === "common" ? "Común" :
                 rarity === "rare" ? "Rara" :
                 rarity === "epic" ? "Épica" :
                 rarity === "legendary" ? "Legendaria" : rarity}
              </option>
            ))}
          </select>
        </div>

        {/* Country Filter */}
        <div>
          <Label htmlFor="country" className="text-white text-sm">País</Label>
          <select
            id="country"
            value={filters.country}
            onChange={(e) => onFiltersChange({ country: e.target.value })}
            className="w-full p-2 bg-white/10 border border-white/20 rounded-md text-white text-sm"
          >
            {countries.map(country => (
              <option key={country} value={country} className="text-black">
                {country === "All" ? "Todos" : country}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <Label htmlFor="minPrice" className="text-white text-sm">Precio Mín (USD)</Label>
          <Input
            id="minPrice"
            type="number"
            step="0.01"
            min="0"
            value={filters.minPrice}
            onChange={(e) => onFiltersChange({ minPrice: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="0.00"
          />
        </div>

        <div>
          <Label htmlFor="maxPrice" className="text-white text-sm">Precio Máx (USD)</Label>
          <Input
            id="maxPrice"
            type="number"
            step="0.01"
            min="0"
            value={filters.maxPrice}
            onChange={(e) => onFiltersChange({ maxPrice: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            placeholder="1000.00"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceFiltersComponent;
