
# SportBlocks Deployment Instructions

## Prerequisites

1. **Install Cairo and StarkNet tools**:
```bash
# Install Scarb (Cairo package manager)
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh

# Install Starkli (StarkNet CLI)
curl https://get.starkli.sh | sh
starkliup
```

2. **Set up StarkNet account**:
```bash
# Create account keystore
starkli signer keystore from-key ~/.starkli-wallets/deployer/account.json

# Set environment variables
export STARKNET_ACCOUNT=~/.starkli-wallets/deployer/account.json
export STARKNET_KEYSTORE=~/.starkli-wallets/deployer/keystore.json
export STARKNET_RPC=https://starknet-sepolia.public.blastapi.io/rpc/v0_7
```

## Deployment Steps

1. **Build the contract**:
```bash
cd contracts
scarb build
```

2. **Declare the contract class**:
```bash
starkli declare target/dev/sportblocks_nft_SportBlocksNFT.contract_class.json
```
*Save the class hash from the output*

3. **Deploy the contract**:
```bash
# Replace with your actual addresses
export OWNER_ADDRESS=0x1234...  # Your wallet address (contract owner)
export PLATFORM_WALLET=0x5678...  # Platform revenue wallet

starkli deploy <CLASS_HASH> $OWNER_ADDRESS $PLATFORM_WALLET
```
*Save the contract address from the output*

4. **Configure environment variables**:
```bash
# Create .env file
cp .env.example .env

# Update .env with your contract address
VITE_SPORTBLOCKS_CONTRACT_ADDRESS=0x<your_contract_address>
VITE_PLATFORM_WALLET_ADDRESS=0x<your_platform_wallet>
```

5. **Test the deployment**:
```bash
# Test contract functions
starkli call <CONTRACT_ADDRESS> get_owner
```

## Verification

After deployment, verify that:
1. Contract is accessible at the deployed address
2. Owner is set correctly
3. Platform wallet is configured
4. Frontend can connect to the contract

## Development vs Production

**Development Mode**: 
- If contract address is not set, the app will use simulation mode
- NFT creation and purchases will be logged to database only
- Useful for testing UI without deploying contracts

**Production Mode**:
- Set `VITE_SPORTBLOCKS_CONTRACT_ADDRESS` in environment
- All NFT operations will interact with the actual StarkNet contract
- Purchases will execute real blockchain transactions

## Troubleshooting

**Common Issues**:

1. **Transaction rejected**: Check account balance and permissions
2. **Contract not found**: Verify contract address and network
3. **RPC errors**: Try different RPC endpoint or check network status

**Useful Commands**:
```bash
# Check account balance
starkli balance $OWNER_ADDRESS

# Get transaction status
starkli receipt <TX_HASH>

# Call contract function
starkli call <CONTRACT_ADDRESS> <FUNCTION_NAME> <ARGS>
```
