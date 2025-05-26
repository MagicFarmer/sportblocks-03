
// Price conversion utilities for STRK tokens
export const STRK_TO_USD_RATE = 0.52; // Example rate, in real app this would come from an API

export const formatPrice = (strkAmount: number) => {
  const usdEquivalent = strkAmount * STRK_TO_USD_RATE;
  return {
    strk: `${strkAmount.toFixed(2)} STRK`,
    usd: `$${usdEquivalent.toFixed(2)} USD`,
    formatted: `${strkAmount.toFixed(2)} STRK (~$${usdEquivalent.toFixed(2)})`
  };
};

export const convertEthToStrk = (ethPrice: string): number => {
  // Convert ETH prices to STRK (example conversion)
  const ethAmount = parseFloat(ethPrice.replace(' ETH', ''));
  return ethAmount * 1850; // Example: 1 ETH = 1850 STRK
};
