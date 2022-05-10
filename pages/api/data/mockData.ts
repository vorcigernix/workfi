
import { LoanOpportunity } from "./LoanOpportunity";
import { Bounty, Status } from "./Bounty";
import { LoanInvestor } from "./LoanInvestor";


const defaultBounty: Bounty = {
    id:	0,
    label: "work",
    organization: "Crypto Jobs",
    description: "Special task needed to bring product to life",
    duration: 30,
    bounty: 1000,
    recruiter: "0xd240A74c8766cbe9Fc0ba2B242C089aAE164D5dF", //zoz.eth ;.)
    postDate: new Date(),
    startDate: new Date(),
    worker: "0x63aea877b5d5fa234a1532f1b26a4f6d9051866e", //workman.eth - I mean, who else!
    status:	Status.open
  }


const createMockBounty = (overwrites: Partial<Bounty> = {}) => ({
    ...defaultBounty,
    ...overwrites
  });


const defaultLoanOpportunity: LoanOpportunity =  {
    id: 0,
    idBounty: 0,
    bounty: 0,
    stableAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC 
    stableAmount: 5, 
    erc20Address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", //SHIB Woof Woof 
    erc20Amount: 20, 
    erc20Price: 100000, // $1000.00 dollars
    rewards: 15, //15%
    yield: 20, //20%
}


const createMockLoanOpportunity = (overwrites: Partial<LoanOpportunity> = {}) => ({
    ...defaultLoanOpportunity,
    ...overwrites
  });


const defaultLoanInvestor: LoanInvestor = {
    id: 0,
    idLending: 0,
    investor: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045", //vitalik.eth
    stableAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC 
    stableAmount: 500, // $500.00 USD
    erc20Address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE", //SHIB Woof Woof 
    erc20Amount: 20 
  }


const createMockLoanInvestor = (overwrites: Partial<LoanInvestor> = {}) => ({
    ...defaultBounty,
    ...overwrites
  });



  export {
      createMockBounty,
      createMockLoanOpportunity,
      createMockLoanInvestor
      
      

  }