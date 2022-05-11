import {createMockBounty, createMockLoanOpportunity, createMockLoanInvestor} from "./mockData";
import {Bounty} from "./Bounty";
import { LoanOpportunity } from "./LoanOpportunity";
import { LoanInvestor } from "./LoanInvestor";

let Workers = ["0xfe757cae5821dcb5cea45cabe895769625421581", "0xc4cf565a5d25ee2803c9b8e91fc3d7c62e79fe69", "0xca582d9655a50e6512045740deb0de3a7ee5281f", "0xa0efb63be0db8fc11681a598bf351a42a6ff50e0"];
let Investors = ["0x3262f13a39efaca789ae58390441c9ed76bc658a", "0x828103b231b39fffce028562412b3c04a4640e64", "0x091933ee1088cdf5daace8baec0997a4e93f0dd6", " 0x4756eeebf378046f8dd3cb6fa908d93bfd45f139"];
let Recruiters = ["0xd4f638819ed2c349e9cfb6b5168d9e810a9d4f85", "0xe5c5cb9fc6887e4362f435dbe01cac705c7e0f7d", "0x9aed162f5e61e2e42a06d50657c7b5e085319227", "0xb6398fad2f8d238afd3a522a8ceafd400e71ef62"];
let tokens = ["0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39", "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84", "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9"];
let stableTokens = ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0x956F47F50A910163D8BF957Cf5846D573E7f87CA", "0x853d955aCEf822Db058eb8505911ED77F175b99e"];


//To use the mock data, add to top level

// import {buildBounties, buildLoanOpportunities, buildLoanInvestors} from data


// let bounties = buildBounties()
// let loanOpps = buildLoanOpportunities()
// let loanInvestors = buildLoanInvestors()

export const buildBounties = () => {
    let builtBounties: Array<Bounty> = [];
    for (let index = 0; index < Workers.length; index++) {
        const worker = Workers[index];
        const recruiter = Recruiters[index];
        let date = new Date();
        builtBounties.push(createMockBounty({worker: worker, startDate: new Date((new Date()).setDate(date.getDate() + 7)), recruiter: recruiter, id: index }));
    }

    return builtBounties;

}


export const buildLoanOpportunities = (bounties: Array<Bounty>) => {
    let builtOpps: Array<LoanOpportunity> = []; 
    bounties.forEach((element,index) => {
        builtOpps.push(createMockLoanOpportunity({id: index, idBounty: element.id, bounty: 1000, }));
    });

    return builtOpps;

}


export const buildLoanInvestors = (opps: Array<LoanInvestor>) => {
    let builtLoanInvestors: Array<LoanInvestor> = []; 
    opps.forEach((element, index) => {
        builtLoanInvestors.push(createMockLoanInvestor({id: index, idLending: element.id, investor:Investors[index], stableAddress: stableTokens[index], erc20Address: tokens[index]}));
    });

    return builtLoanInvestors;
    
}