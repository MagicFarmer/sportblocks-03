
import { supabase } from "@/integrations/supabase/client";
import { starknetIntegration } from "./starknetIntegration";
import { Account } from 'starknet';

export const uploadMediaFile = async (file: File, userId: string): Promise<string> => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/${Date.now()}.${fileExt}`;
    
    // First, try to create the bucket if it doesn't exist
    try {
      await supabase.storage.createBucket('nft-media', {
        public: true,
        allowedMimeTypes: ['image/*', 'video/*'],
        fileSizeLimit: 10485760 // 10MB
      });
    } catch (bucketError) {
      // Bucket might already exist, continue
      console.log('Bucket creation note:', bucketError);
    }
    
    const { data, error } = await supabase.storage
      .from('nft-media')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) {
      console.error('Upload error:', error);
      throw error;
    }

    const { data: urlData } = supabase.storage
      .from('nft-media')
      .getPublicUrl(data.path);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Media upload failed:', error);
    throw new Error('Error al subir el archivo multimedia');
  }
};

export const createNFTOnContract = async (nftData: any, userAccount: Account) => {
  try {
    console.log('Creating NFT on StarkNet contract:', nftData);

    // Check if contract is ready
    const isReady = await starknetIntegration.isContractReady();
    if (!isReady) {
      console.warn('Contract not ready, using development mode');
      return simulateNFTCreation(nftData);
    }

    // Create NFT on the actual StarkNet contract
    const txHash = await starknetIntegration.createNFT(
      {
        id: nftData.id,
        name: nftData.name,
        price: nftData.price,
        rarity: nftData.rarity,
        beneficiary_project: nftData.beneficiary_project,
        total_copies: nftData.total_copies
      },
      userAccount
    );

    console.log('NFT created on blockchain with tx hash:', txHash);

    // Update NFT record with blockchain information
    const { error: updateError } = await supabase
      .from('nfts')
      .update({
        token_id: nftData.id,
        contract_address: process.env.VITE_SPORTBLOCKS_CONTRACT_ADDRESS,
        is_minted: true,
        minted_copies: nftData.total_copies,
        metadata_hash: txHash // Store transaction hash as metadata reference
      })
      .eq('id', nftData.id);

    if (updateError) {
      console.error('Update error:', updateError);
      throw updateError;
    }

    return txHash;

  } catch (error) {
    console.error('Error creating NFT on contract:', error);
    throw error;
  }
};

// Fallback simulation for development when contract is not deployed
const simulateNFTCreation = async (nftData: any) => {
  console.log('Using simulation mode for NFT creation');
  
  // Generate mock transaction hash
  const mockTxHash = `0x${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
  
  // Update NFT record with simulated data
  const { error: updateError } = await supabase
    .from('nfts')
    .update({
      token_id: nftData.id,
      contract_address: "0x_simulation_contract",
      is_minted: true,
      minted_copies: nftData.total_copies,
      metadata_hash: mockTxHash
    })
    .eq('id', nftData.id);

  if (updateError) {
    console.error('Simulation update error:', updateError);
    throw updateError;
  }

  return mockTxHash;
};

export const purchaseNFTFromContract = async (
  nftData: any,
  amount: number,
  userAccount: Account,
  userWalletAddress: string
) => {
  try {
    console.log('Purchasing NFT from StarkNet contract:', { nftData, amount });

    // Check if contract is ready
    const isReady = await starknetIntegration.isContractReady();
    if (!isReady) {
      console.warn('Contract not ready, using development mode');
      return simulateNFTPurchase(nftData, amount, userWalletAddress);
    }

    // Purchase from the actual StarkNet contract
    const txHash = await starknetIntegration.purchaseNFT(
      nftData.token_id || nftData.id,
      amount,
      userAccount
    );

    console.log('NFT purchased on blockchain with tx hash:', txHash);

    // Save purchase record to database
    const { error: purchaseError } = await supabase
      .from('purchases')
      .insert({
        nft_id: nftData.id,
        buyer_wallet: userWalletAddress,
        tx_hash: txHash,
        amount_paid: nftData.price * amount
      });

    if (purchaseError) {
      console.error('Purchase record error:', purchaseError);
      throw new Error('Error al guardar el registro de compra');
    }

    // Update NFT available copies
    const currentAvailable = await starknetIntegration.getAvailableSupply(nftData.token_id || nftData.id);
    
    const { error: updateError } = await supabase
      .from('nfts')
      .update({ 
        minted_copies: currentAvailable
      })
      .eq('id', nftData.id);

    if (updateError) {
      console.error('NFT update error:', updateError);
      // Don't throw here as purchase was successful
    }

    return txHash;

  } catch (error) {
    console.error('Error purchasing NFT from contract:', error);
    throw error;
  }
};

// Fallback simulation for development when contract is not deployed
const simulateNFTPurchase = async (nftData: any, amount: number, userWalletAddress: string) => {
  console.log('Using simulation mode for NFT purchase');
  
  // Generate mock transaction hash
  const mockTxHash = `0x${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
  
  // Save purchase record
  const { error: purchaseError } = await supabase
    .from('purchases')
    .insert({
      nft_id: nftData.id,
      buyer_wallet: userWalletAddress,
      tx_hash: mockTxHash,
      amount_paid: nftData.price * amount
    });

  if (purchaseError) {
    console.error('Purchase save error:', purchaseError);
    throw new Error('Error al guardar la compra');
  }

  // Update NFT minted copies
  const { error: updateError } = await supabase
    .from('nfts')
    .update({ 
      minted_copies: Math.max(0, nftData.minted_copies - amount)
    })
    .eq('id', nftData.id);

  if (updateError) {
    console.error('NFT update error:', updateError);
  }

  return mockTxHash;
};

// Helper function to get NFT data from blockchain
export const getNFTDataFromContract = async (tokenId: string) => {
  try {
    const isReady = await starknetIntegration.isContractReady();
    if (!isReady) {
      console.warn('Contract not ready, using database data');
      return null;
    }

    const metadata = await starknetIntegration.getNFTMetadata(tokenId);
    const available = await starknetIntegration.getAvailableSupply(tokenId);

    return {
      ...metadata,
      available_supply: available
    };

  } catch (error) {
    console.error('Error getting NFT data from contract:', error);
    return null;
  }
};
