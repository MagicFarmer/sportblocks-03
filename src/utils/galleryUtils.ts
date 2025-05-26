
export const generateAlbumName = (filters: { sport: string; event: string; country: string; rarity: string }) => {
  const activeFilters = [];
  if (filters.sport !== "All") activeFilters.push(filters.sport);
  if (filters.event !== "All") activeFilters.push(filters.event);
  if (filters.country !== "All") activeFilters.push(filters.country);
  if (filters.rarity !== "All") activeFilters.push(filters.rarity);
  
  if (activeFilters.length === 0) return "All Sports NFTs";
  return activeFilters.join(" × ") + " Collection";
};

export const filterNFTs = (nfts: any[], filters: { sport: string; event: string; country: string; rarity: string }) => {
  return nfts.filter(nft => {
    return (
      (filters.sport === "All" || nft.sport === filters.sport) &&
      (filters.event === "All" || nft.event === filters.event) &&
      (filters.country === "All" || nft.country === filters.country) &&
      (filters.rarity === "All" || nft.rarity === filters.rarity)
    );
  });
};
