
# SportBlocks NFT Smart Contract

A Cairo 1.0 smart contract for the SportBlocks platform, supporting both unique NFTs and multi-copy editions with automatic fund distribution.

## Features

- **Multi-copy NFT support**: Create both unique (1/1) and multi-copy NFTs
- **Automatic fund distribution**: 50% to athlete, 30% to beneficiary project, 20% to platform
- **Secure minting**: Only contract owner can mint NFTs
- **Public buying**: Anyone can purchase available NFTs
- **Metadata storage**: On-chain storage of NFT metadata (name, price, rarity, beneficiary)

## Prerequisites

- [Scarb](https://docs.swmansion.com/scarb/) - Cairo package manager
- [Starkli](https://github.com/xJonathanLEI/starkli) - StarkNet CLI tool

## Installation

```bash
# Install Scarb
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh

# Install Starkli
curl https://get.starkli.sh | sh
starkliup
```

## Build

```bash
cd contracts
scarb build
```

## Deploy to StarkNet Sepolia

1. **Set up your account and keystore**:
```bash
# Create a keystore (if you don't have one)
starkli signer keystore from-key ~/.starkli-wallets/deployer/account.json

# Set environment variables
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/account.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/keystore.json
export STARKNET_RPC=https://starknet-sepolia.public.blastapi.io/rpc/v0_7
```

2. **Declare the contract**:
```bash
starkli declare target/dev/sportblocks_nft_SportBlocksNFT.contract_class.json
```

3. **Deploy the contract**:
```bash
# Replace with your actual addresses
export OWNER_ADDRESS=0x1234...  # Your wallet address
export PLATFORM_WALLET=0x5678...  # Platform revenue wallet

starkli deploy <CLASS_HASH> $OWNER_ADDRESS $PLATFORM_WALLET
```

## Contract Functions

### Owner Functions
- `mint(token_id, amount, recipient)` - Mint NFTs to a recipient
- `set_nft_data(token_id, name, price, rarity, beneficiary, total_supply)` - Configure NFT metadata
- `set_athlete_address(token_id, athlete)` - Set athlete wallet for fund distribution

### Public Functions
- `buy(token_id, amount)` - Purchase NFTs (auto-distributes funds)
- `get_metadata(token_id)` - Get NFT metadata (name, price, rarity, beneficiary)
- `available(token_id)` - Get available supply
- `get_balance(token_id, account)` - Get account balance for specific token

## Usage Example

```cairo
// Set up NFT data (owner only)
contract.set_nft_data(
    token_id: 1,
    name: 'Messi Goal',
    price: 100000000000000000, // 0.1 ETH in wei
    rarity: 'legendary',
    beneficiary: 'Youth Football Foundation',
    total_supply: 100
);

// Mint NFTs to contract for sale (owner only)
contract.mint(token_id: 1, amount: 100, recipient: contract_address);

// Users can buy NFTs
contract.buy(token_id: 1, amount: 1);
```

## Testing

```bash
scarb test
```

## Fund Distribution

When a purchase is made, funds are automatically distributed:
- **50%** → Athlete wallet
- **30%** → Beneficiary project
- **20%** → Platform wallet

The distribution is calculated and logged via events for transparency.
