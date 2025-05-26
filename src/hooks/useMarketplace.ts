
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface MarketplaceNFT {
  id: string;
  name: string;
  description?: string;
  media_url?: string;
  rarity: string;
  price: number;
  total_copies: number;
  minted_copies: number;
  beneficiary_project: string;
  user_id: string;
  token_id?: string;
  contract_address?: string;
  is_minted: boolean;
  user: {
    name: string;
    sport: string;
    country: string;
  };
}

export interface MarketplaceFilters {
  sport: string;
  rarity: string;
  minPrice: string;
  maxPrice: string;
  country: string;
}

export const useMarketplace = () => {
  const [filters, setFilters] = useState<MarketplaceFilters>({
    sport: 'All',
    rarity: 'All',
    minPrice: '',
    maxPrice: '',
    country: 'All'
  });

  const { data: nfts = [], isLoading, refetch } = useQuery({
    queryKey: ['marketplace-nfts', filters],
    queryFn: async () => {
      console.log('Fetching marketplace NFTs with filters:', filters);
      
      let query = supabase
        .from('nfts')
        .select(`
          *,
          user:users(name, sport, country)
        `)
        .eq('is_minted', true)
        .gt('minted_copies', 0);

      // Apply filters
      if (filters.sport !== 'All') {
        query = query.eq('user.sport', filters.sport);
      }
      
      if (filters.rarity !== 'All') {
        query = query.eq('rarity', filters.rarity);
      }
      
      if (filters.minPrice) {
        query = query.gte('price', parseFloat(filters.minPrice));
      }
      
      if (filters.maxPrice) {
        query = query.lte('price', parseFloat(filters.maxPrice));
      }
      
      if (filters.country !== 'All') {
        query = query.eq('user.country', filters.country);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching marketplace NFTs:', error);
        throw error;
      }

      console.log('Fetched NFTs:', data);
      return data as MarketplaceNFT[];
    },
  });

  const updateFilters = (newFilters: Partial<MarketplaceFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    nfts,
    isLoading,
    filters,
    updateFilters,
    refetch
  };
};
