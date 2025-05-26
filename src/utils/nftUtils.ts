
import { supabase } from "@/integrations/supabase/client";

export const uploadMediaFile = async (file: File, userId: string): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}/${Date.now()}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from('nft-media')
    .upload(fileName, file);

  if (error) throw error;

  const { data: urlData } = supabase.storage
    .from('nft-media')
    .getPublicUrl(data.path);

  return urlData.publicUrl;
};

export const mintNFTOnContract = async (nftData: any, userId: string) => {
  try {
    // Get user's contract address
    const { data: contractData, error: contractError } = await supabase
      .from('user_contracts')
      .select('contract_address')
      .eq('user_id', userId)
      .eq('deployment_status', 'deployed')
      .single();

    if (contractError || !contractData) {
      throw new Error('No se encontró un contrato desplegado para este usuario');
    }

    // Generate unique token ID
    const tokenId = Date.now().toString();

    // TODO: Implement actual StarkNet contract interaction
    // For now, we'll simulate the minting process
    console.log('Minting NFT on contract:', {
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

    if (updateError) throw updateError;

    return tokenId;

  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
};
