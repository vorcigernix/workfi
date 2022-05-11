//Mock data to represent smart contract calls
//Ethereum data type equivalent is commented beside the field


//Loan Investor represents an investor within a LoanOpportunity

export type LoanInvestor = {
    id: number;	// uint 256
    idLending: number; //uint 256 - LoanOpportunityId
    investor: string; //address
    stableAddress: string; //address - stable coin used
    stableAmount: number; // uint 256 - USD amount 
    erc20Address: string; //address - stable coin used						
    erc20Amount: number; // uint 256 - amount of ERC20 tokens
}