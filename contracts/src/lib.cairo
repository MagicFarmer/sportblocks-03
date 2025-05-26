
use starknet::ContractAddress;

#[starknet::interface]
trait ISportBlocksNFT<TContractState> {
    fn mint(ref self: TContractState, token_id: felt252, amount: u256, recipient: ContractAddress);
    fn buy(ref self: TContractState, token_id: felt252, amount: u256);
    fn get_metadata(self: @TContractState, token_id: felt252) -> (felt252, u256, felt252, felt252);
    fn available(self: @TContractState, token_id: felt252) -> u256;
    fn distribute_funds(ref self: TContractState, token_id: felt252);
    fn set_nft_data(ref self: TContractState, token_id: felt252, name: felt252, price: u256, rarity: felt252, beneficiary: felt252, total_supply: u256);
    fn get_owner(self: @TContractState) -> ContractAddress;
    fn get_balance(self: @TContractState, token_id: felt252, account: ContractAddress) -> u256;
    fn get_athlete_address(self: @TContractState, token_id: felt252) -> ContractAddress;
    fn set_athlete_address(ref self: TContractState, token_id: felt252, athlete: ContractAddress);
}

#[starknet::contract]
mod SportBlocksNFT {
    use starknet::{ContractAddress, get_caller_address, get_contract_address};
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess, Map, StoragePathEntry};

    #[storage]
    struct Storage {
        owner: ContractAddress,
        platform_wallet: ContractAddress,
        // Token balances: token_id -> owner -> balance
        balances: Map<(felt252, ContractAddress), u256>,
        // Token metadata: token_id -> (name, price, rarity, beneficiary)
        token_metadata: Map<felt252, (felt252, u256, felt252, felt252)>,
        // Token supply info: token_id -> (current_supply, max_supply)
        token_supply: Map<felt252, (u256, u256)>,
        // Athlete addresses for each token
        athlete_addresses: Map<felt252, ContractAddress>,
        // Token existence check
        token_exists: Map<felt252, bool>,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        Transfer: Transfer,
        Purchase: Purchase,
        FundsDistributed: FundsDistributed,
    }

    #[derive(Drop, starknet::Event)]
    struct Transfer {
        from: ContractAddress,
        to: ContractAddress,
        token_id: felt252,
        amount: u256,
    }

    #[derive(Drop, starknet::Event)]
    struct Purchase {
        buyer: ContractAddress,
        token_id: felt252,
        amount: u256,
        price: u256,
    }

    #[derive(Drop, starknet::Event)]
    struct FundsDistributed {
        token_id: felt252,
        athlete_amount: u256,
        beneficiary_amount: u256,
        platform_amount: u256,
    }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress, platform_wallet: ContractAddress) {
        self.owner.write(owner);
        self.platform_wallet.write(platform_wallet);
    }

    #[abi(embed_v0)]
    impl SportBlocksNFTImpl of super::ISportBlocksNFT<ContractState> {
        fn mint(ref self: ContractState, token_id: felt252, amount: u256, recipient: ContractAddress) {
            let caller = get_caller_address();
            assert(caller == self.owner.read(), 'Only owner can mint');
            assert(self.token_exists.entry(token_id).read(), 'Token not configured');

            let (current_supply, max_supply) = self.token_supply.entry(token_id).read();
            assert(current_supply + amount <= max_supply, 'Exceeds max supply');

            // Update balance
            let current_balance = self.balances.entry((token_id, recipient)).read();
            self.balances.entry((token_id, recipient)).write(current_balance + amount);

            // Update supply
            self.token_supply.entry(token_id).write((current_supply + amount, max_supply));

            self.emit(Transfer {
                from: Zeroable::zero(),
                to: recipient,
                token_id,
                amount,
            });
        }

        fn buy(ref self: ContractState, token_id: felt252, amount: u256) {
            let caller = get_caller_address();
            assert(self.token_exists.entry(token_id).read(), 'Token does not exist');

            let (current_supply, max_supply) = self.token_supply.entry(token_id).read();
            assert(current_supply >= amount, 'Insufficient supply');

            let (_, price, _, _) = self.token_metadata.entry(token_id).read();
            let total_cost = price * amount;

            // Transfer NFT to buyer
            let contract_balance = self.balances.entry((token_id, get_contract_address())).read();
            assert(contract_balance >= amount, 'Insufficient contract balance');
            
            self.balances.entry((token_id, get_contract_address())).write(contract_balance - amount);
            let buyer_balance = self.balances.entry((token_id, caller)).read();
            self.balances.entry((token_id, caller)).write(buyer_balance + amount);

            // Update available supply
            self.token_supply.entry(token_id).write((current_supply - amount, max_supply));

            self.emit(Purchase {
                buyer: caller,
                token_id,
                amount,
                price: total_cost,
            });

            // Auto-distribute funds
            self.distribute_funds(token_id);
        }

        fn get_metadata(self: @ContractState, token_id: felt252) -> (felt252, u256, felt252, felt252) {
            assert(self.token_exists.entry(token_id).read(), 'Token does not exist');
            self.token_metadata.entry(token_id).read()
        }

        fn available(self: @ContractState, token_id: felt252) -> u256 {
            let (current_supply, _) = self.token_supply.entry(token_id).read();
            current_supply
        }

        fn distribute_funds(ref self: ContractState, token_id: felt252) {
            let (_, price, _, _) = self.token_metadata.entry(token_id).read();
            
            // Calculate distribution: 50% athlete, 30% beneficiary, 20% platform
            let athlete_amount = (price * 50) / 100;
            let beneficiary_amount = (price * 30) / 100;
            let platform_amount = (price * 20) / 100;

            self.emit(FundsDistributed {
                token_id,
                athlete_amount,
                beneficiary_amount,
                platform_amount,
            });
        }

        fn set_nft_data(ref self: ContractState, token_id: felt252, name: felt252, price: u256, rarity: felt252, beneficiary: felt252, total_supply: u256) {
            let caller = get_caller_address();
            assert(caller == self.owner.read(), 'Only owner can set data');

            self.token_metadata.entry(token_id).write((name, price, rarity, beneficiary));
            self.token_supply.entry(token_id).write((0, total_supply));
            self.token_exists.entry(token_id).write(true);
        }

        fn get_owner(self: @ContractState) -> ContractAddress {
            self.owner.read()
        }

        fn get_balance(self: @ContractState, token_id: felt252, account: ContractAddress) -> u256 {
            self.balances.entry((token_id, account)).read()
        }

        fn get_athlete_address(self: @ContractState, token_id: felt252) -> ContractAddress {
            self.athlete_addresses.entry(token_id).read()
        }

        fn set_athlete_address(ref self: ContractState, token_id: felt252, athlete: ContractAddress) {
            let caller = get_caller_address();
            assert(caller == self.owner.read(), 'Only owner can set athlete');
            self.athlete_addresses.entry(token_id).write(athlete);
        }
    }
}
