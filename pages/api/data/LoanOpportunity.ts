//Mock data to represent smart contract calls
//Ethereum data type equivalent is commented beside the field


//Loan Opportunity represents the type of funds used to create the investment opportunity

export type LoanOpportunity = {
    id: number;	// uint 256 
    idBounty: number; // uint 256 - reference to the corresponding bounty
    bounty: number; // uint 256 - represents USD value    ? Needs a oracle to find the price of erc20Amount ?
    stableAddress: string; // address - token address of the corresponding stablecoin
    stableAmount: number; // uint 256 - represents the USD amount of stable coins 
    erc20Address: string; // address - token address of the corresponding native token
    erc20Amount: number; // uint 256 - represents the number of native tokens
    erc20Price: number; // uint 256 - ? needs a oracle to find the price of erc20Amount ?
    rewards: number; // uint 256 - 1:100 - Represents a percentage
    yield: number; // uint 256 - represents percentage
    stableRatio: number; // uint 256 - represents the ratio of the stablecoin to the native token
}