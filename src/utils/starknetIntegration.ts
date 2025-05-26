import { Contract, Provider, Account, shortString } from 'starknet';
import { supabase } from "@/integrations/supabase/client";

// StarkNet Sepolia configuration
const STARKNET_RPC_URL = "https://starknet-sepolia.public.blastapi.io/rpc/v0_7";
const SPORTBLOCKS_CONTRACT_ADDRESS = import.meta.env.VITE_SPORTBLOCKS_CONTRACT_ADDRESS || "0x0"; // Will be set after deployment

// Contract ABI (simplified for key functions)
const CONTRACT_ABI = [
  {
    "name": "mint",
    "type": "function",
    "inputs": [
      {"name": "token_id", "type": "felt"},
      {"name": "amount", "type": "core::integer::u256"},
      {"name": "recipient", "type": "core::starknet::contract_address::ContractAddress"}
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "buy",
    "type": "function", 
    "inputs": [
      {"name": "token_id", "type": "felt"},
      {"name": "amount", "type": "core::integer::u256"}
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "get_metadata",
    "type": "function",
    "inputs": [{"name": "token_id", "type": "felt"}],
    "outputs": [
      {"type": "felt"}, // name
      {"type": "core::integer::u256"}, // price
      {"type": "felt"}, // rarity
      {"type": "felt"}  // beneficiary
    ],
    "state_mutability": "view"
  },
  {
    "name": "available", 
    "type": "function",
    "inputs": [{"name": "token_id", "type": "felt"}],
    "outputs": [{"type": "core::integer::u256"}],
    "state_mutability": "view"
  },
  {
    "name": "set_nft_data",
    "type": "function",
    "inputs": [
      {"name": "token_id", "type": "felt"},
      {"name": "name", "type": "felt"},
      {"name": "price", "type": "core::integer::u256"},
      {"name": "rarity", "type": "felt"},
      {"name": "beneficiary", "type": "felt"},
      {"name": "total_supply", "type": "core::integer::u256"}
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "name": "get_balance",
    "type": "function",
    "inputs": [
      {"name": "token_id", "type": "felt"},
      {"name": "account", "type": "core::starknet::contract_address::ContractAddress"}
    ],
    "outputs": [{"type": "core::integer::u256"}],
    "state_mutability": "view"
  }
];

export interface NFTMetadata {
  name: string;
  price: string;
  rarity: string;
  beneficiary: string;
}

export class StarkNetIntegration {
  private provider: Provider;
  private contract: Contract;

  constructor() {
    this.provider = new Provider({ nodeUrl: STARKNET_RPC_URL });
    this.contract = new Contract(CONTRACT_ABI, SPORTBLOCKS_CONTRACT_ADDRESS, this.provider);
  }

  // Convert string to felt252 for Cairo
  private stringToFelt(str: string): string {
    return shortString.encodeShortString(str);
  }

  // Convert felt252 back to string
  private feltToString(felt: string): string {
    return shortString.decodeShortString(felt);
  }

  // Get contract instance with user's account
  private getContractWithAccount(account: Account): Contract {
    return new Contract(CONTRACT_ABI, SPORTBLOCKS_CONTRACT_ADDRESS, account);
  }

  // Create and configure a new NFT on the contract
  async createNFT(
    nftData: {
      id: string;
      name: string;
      price: number;
      rarity: string;
      beneficiary_project: string;
      total_copies: number;
    },
    userAccount: Account
  ): Promise<string> {
    try {
      console.log('Creating NFT on StarkNet contract:', nftData);

      const contractWithAccount = this.getContractWithAccount(userAccount);
      
      // Convert data to Cairo format
      const tokenId = nftData.id;
      const name = this.stringToFelt(nftData.name);
      const price = nftData.price.toString();
      const rarity = this.stringToFelt(nftData.rarity);
      const beneficiary = this.stringToFelt(nftData.beneficiary_project);
      const totalSupply = nftData.total_copies.toString();

      // Set NFT data on contract
      const setDataTx = await contractWithAccount.set_nft_data(
        tokenId,
        name,
        price,
        rarity,
        beneficiary,
        totalSupply
      );

      console.log('Set NFT data transaction:', setDataTx.transaction_hash);

      // Wait for transaction confirmation
      await this.provider.waitForTransaction(setDataTx.transaction_hash);

      // Mint all copies to the contract for sale
      const mintTx = await contractWithAccount.mint(
        tokenId,
        totalSupply,
        SPORTBLOCKS_CONTRACT_ADDRESS
      );

      console.log('Mint transaction:', mintTx.transaction_hash);
      await this.provider.waitForTransaction(mintTx.transaction_hash);

      return mintTx.transaction_hash;

    } catch (error) {
      console.error('Error creating NFT on contract:', error);
      throw new Error('Failed to create NFT on blockchain');
    }
  }

  // Purchase NFT from the contract
  async purchaseNFT(
    tokenId: string,
    amount: number,
    userAccount: Account
  ): Promise<string> {
    try {
      console.log('Purchasing NFT from contract:', { tokenId, amount });

      const contractWithAccount = this.getContractWithAccount(userAccount);

      // Execute buy transaction
      const buyTx = await contractWithAccount.buy(tokenId, amount.toString());

      console.log('Purchase transaction:', buyTx.transaction_hash);
      
      // Wait for confirmation
      await this.provider.waitForTransaction(buyTx.transaction_hash);

      return buyTx.transaction_hash;

    } catch (error) {
      console.error('Error purchasing NFT:', error);
      throw new Error('Failed to purchase NFT from blockchain');
    }
  }

  // Get NFT metadata from contract
  async getNFTMetadata(tokenId: string): Promise<NFTMetadata> {
    try {
      const metadata = await this.contract.get_metadata(tokenId);
      
      return {
        name: this.feltToString(metadata[0]),
        price: metadata[1].toString(),
        rarity: this.feltToString(metadata[2]),
        beneficiary: this.feltToString(metadata[3])
      };

    } catch (error) {
      console.error('Error getting NFT metadata:', error);
      throw new Error('Failed to get NFT metadata from blockchain');
    }
  }

  // Get available supply for an NFT
  async getAvailableSupply(tokenId: string): Promise<number> {
    try {
      const available = await this.contract.available(tokenId);
      return parseInt(available.toString());

    } catch (error) {
      console.error('Error getting available supply:', error);
      return 0;
    }
  }

  // Get user's balance for a specific NFT
  async getUserBalance(tokenId: string, userAddress: string): Promise<number> {
    try {
      const balance = await this.contract.get_balance(tokenId, userAddress);
      return parseInt(balance.toString());

    } catch (error) {
      console.error('Error getting user balance:', error);
      return 0;
    }
  }

  // Check if contract is properly configured
  async isContractReady(): Promise<boolean> {
    try {
      if (SPORTBLOCKS_CONTRACT_ADDRESS === "0x0") {
        console.warn('SportBlocks contract address not configured');
        return false;
      }

      // Try to call a view function to verify contract is accessible
      await this.contract.get_metadata("1");
      return true;

    } catch (error) {
      console.warn('Contract not ready or not deployed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const starknetIntegration = new StarkNetIntegration();
