//Mock data to represent smart contract calls
//Ethereum data type equivalent is commented beside the field


//Bounty represents a job that can be completed for a payment

export type Bounty = {
    id:	number; //uint256
    label:	string;
    organization: string;
    description: string;
    duration: number; //uint 256 - number in days
    bounty: number; //uint 256 - represents USD value
    recruiter: string; //address - wallet address of the user creating the bounty
    postDate: Date; //
    startDate: Date; //
    worker: string; //address - the wallet address of the user applying for the work
    status:	Status
}

export enum Status {
    open = "OPEN",
    applied = "APPLIED",
    Progress = "PROGRESS",
    PaymentRequested = "PAYMENT REQUESTED",
    PaymentCompleted = "PAYMENT COMPLETED"
}