
import { supabase } from "@/integrations/supabase/client";

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

export const mintNFTOnContract = async (nftData: any, userId: string) => {
  try {
    // Get user's contract address
    const { data: contractData, error: contractError } = await supabase
      .from('user_contracts')
      .select('contract_address')
      .eq('user_id', userId)
      .eq('deployment_status', 'deployed')
      .maybeSingle();

    if (contractError) {
      console.error('Contract query error:', contractError);
      throw new Error('Error al consultar contratos del usuario');
    }

    if (!contractData) {
      console.log('No deployed contract found for user, skipping minting');
      return null;
    }

    // Generate unique token ID
    const tokenId = Date.now().toString();

    // TODO: Implement actual StarkNet contract interaction
    console.log('Simulating NFT minting on contract:', {
      contractAddress: contractData.contract_address,
      tokenId,
      copies: nftData.total_copies,
      metadata: {
        name: nftData.name,
        description: nftData.description,
        image: nftData.media_url,
        attributes: {
          rarity: nftData.rarity,
          beneficiary: nftData.beneficiary_project
        }
      }
    });

    // Update NFT record with minting information
    const { error: updateError } = await supabase
      .from('nfts')
      .update({
        token_id: tokenId,
        contract_address: contractData.contract_address,
        is_minted: true,
        minted_copies: nftData.total_copies
      })
      .eq('id', nftData.id);

    if (updateError) {
      console.error('Update error:', updateError);
      throw updateError;
    }

    return tokenId;

  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
};
