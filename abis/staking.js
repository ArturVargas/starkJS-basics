export const staking = [
  {
    name: "constructor",
    type: "function",
    inputs: [
      {
        name: "staking_token",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "token_rewards",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    outputs: [],
    state_mutability: "external",
  },
  {
    name: "balanceStaked",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    outputs: [
      {
        type: "core::integer::u256",
      },
    ],
    state_mutability: "view",
  },
  {
    name: "earnedRewards",
    type: "function",
    inputs: [
      {
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    outputs: [
      {
        type: "core::integer::u256",
      },
    ],
    state_mutability: "view",
  },
  {
    name: "stakingToken",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    state_mutability: "view",
  },
  {
    name: "token_rewards",
    type: "function",
    inputs: [],
    outputs: [
      {
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
    state_mutability: "view",
  },
  {
    name: "stake",
    type: "function",
    inputs: [
      {
        name: "amount",
        type: "core::integer::u256",
      },
    ],
    outputs: [],
    state_mutability: "external",
  },
  {
    name: "claimRewards",
    type: "function",
    inputs: [],
    outputs: [],
    state_mutability: "external",
  },
  {
    name: "withdrawStake",
    type: "function",
    inputs: [],
    outputs: [],
    state_mutability: "external",
  },
  {
    name: "Deposit",
    type: "event",
    inputs: [
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "value",
        type: "core::integer::u256",
      },
    ],
  },
  {
    name: "Withdraw",
    type: "event",
    inputs: [
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "value",
        type: "core::integer::u256",
      },
    ],
  },
  {
    name: "Claim_Rewards",
    type: "event",
    inputs: [
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "value",
        type: "core::integer::u256",
      },
    ],
  },
];
