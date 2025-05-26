
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketplaceFilters from "@/components/Marketplace/MarketplaceFilters";
import MarketplaceNFTCard from "@/components/Marketplace/MarketplaceNFTCard";
import { useMarketplace } from "@/hooks/useMarketplace";
import { Loader2, Store } from "lucide-react";

const Marketplace = () => {
  const { nfts, isLoading, filters, updateFilters, refetch } = useMarketplace();

  const handlePurchaseSuccess = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Store className="text-blue-400 w-12 h-12 mr-4" />
            <h1 className="text-4xl font-bold text-white">Marketplace</h1>
          </div>
          <p className="text-gray-400 text-lg">Descubre y compra NFTs deportivos únicos de atletas profesionales</p>
        </div>
        
        {/* Filters */}
        <MarketplaceFilters 
          filters={filters}
          onFiltersChange={updateFilters}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
            <span className="ml-2 text-white">Cargando NFTs...</span>
          </div>
        )}

        {/* NFTs Grid */}
        {!isLoading && nfts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nfts.map((nft) => (
              <MarketplaceNFTCard 
                key={nft.id} 
                nft={nft}
                onPurchaseSuccess={handlePurchaseSuccess}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && nfts.length === 0 && (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-12 border border-white/20 text-center">
            <Store className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">No se encontraron NFTs</h2>
            <p className="text-gray-400 mb-6">
              No hay NFTs disponibles que coincidan con los filtros seleccionados.
            </p>
            <button
              onClick={() => updateFilters({
                sport: 'All',
                rarity: 'All',
                minPrice: '',
                maxPrice: '',
                country: 'All'
              })}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
            >
              Limpiar Filtros
            </button>
          </div>
        )}

        {/* Stats Section */}
        {!isLoading && nfts.length > 0 && (
          <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">{nfts.length}</p>
                <p className="text-gray-400">NFTs Disponibles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {nfts.reduce((total, nft) => total + nft.minted_copies, 0)}
                </p>
                <p className="text-gray-400">Copias Totales</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {new Set(nfts.map(nft => nft.user.name)).size}
                </p>
                <p className="text-gray-400">Atletas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  ${Math.min(...nfts.map(nft => nft.price)).toFixed(2)} - ${Math.max(...nfts.map(nft => nft.price)).toFixed(2)}
                </p>
                <p className="text-gray-400">Rango de Precios</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
