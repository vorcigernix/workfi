import type { NextPage } from 'next/types'
import type { LoanOpportunity } from './api/data/LoanOpportunity'
import { defaultBounty } from './api/data/mockData'
import { useState } from 'react'
import { Bounty, Status } from './api/data/Bounty'

//Opportunity Creation Form
// This page is used to create a new opportunity, bounty data are mocked from the mockData.ts file
const ManageMySponsorship: NextPage = () => {
  const [sponsorships, setSponsorships] = useState([
    {
        id:	1,
        label: 'Write smart contracts',
        organization: 'MyDAO',
        description: 'Make UI amazing',
        duration: 40,
        bounty: 1,
        recruiter: 'Recruiter 1',
        postDate: new Date(Date.UTC(2022,5,1,10)),
        startDate: new Date(Date.UTC(0,0,0)),
        worker: '',
        status:	Status.PaymentCompleted
    },
    {
        id:	2,
        label: 'Build UI',
        organization: 'MyDAO',
        description: 'Make UI amazing',
        duration: 40,
        bounty: 1,
        recruiter: 'Recruiter 1',
        postDate: new Date(Date.UTC(2022,5,1)),
        startDate: new Date(Date.UTC(2022,5,3)),
        worker: '',
        status:	Status.PaymentCompleted
    },
    {
        id:	3,
        label: 'Take prizes!',
        organization: 'MyDAO',
        description: 'Make UI amazing',
        duration: 40,
        bounty: 1,
        recruiter: 'Recruiter 1',
        postDate: new Date(Date.UTC(2022,5,1)),
        startDate: new Date(Date.UTC(2022,5,3)),
        worker: '',
        status:	Status.Progress
    }
  ]);

  return (
    <>
        <div className='bg-white rounded-full my-5 rounded-lg shadow-lg flex justify-between items-center'>
            <div className='p-10'>
                <div className='font-bold text-xl'>Dear recruiter</div>
                <div className='text-gray-500'>Monitor your open sponsorships or create a new one</div>
            </div>
            <img src='workfi 3.png' alt='' />
        </div>
        <div className='bg-white rounded-full my-5 py-5 px-20 rounded-lg shadow-lg grid'>
            <div className='font-bold text-xl' style={{marginTop: '1rem'}}>Easily create a sponsorship for your bounties</div>
            <div className='text-gray-500' style={{marginBottom: '2rem'}}>Ise a partner job and get your sponsorship oppurtunity running now</div>
            <div className='grid grid-cols-3 gap-6'>
                <div className='grid'>
                    <span className='font-bold'>1. Choose a job board</span>
                    <span className='text-gray-500'>WorkFi works with the most trustfull onchian job boards.</span>
                    <div className='flex gap-3'>
                        <img src='image 5.png' className='w-11 h-10' /> 
                        <img src='image 6.png' className='w-11 h-10' /> 
                        <img src='image 7.png' className='w-11 h-10' /></div>
                </div>
                <div className='grid'>
                    <span className='font-bold'>2. Create your sponsorship</span>
                    <span className='text-gray-500'>Simply indicate your ERC20 tokens, it's price and the incentive you're willing to give to your investors.</span>
                </div>
                <div className='grid'>
                    <span className='font-bold'>3. And that's it</span>
                    <span className='text-gray-500'>Manage your bounties in the job board, all the payment flow with your workers and your investors is automated.</span>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
            {sponsorships.map((bounty: Bounty) =>
                <BountyInSponsorList bounty={bounty} />
            )}
        </div>
    </>
  );
}

type myType = {bounty:Bounty};

function getStatus(status: Status){
    switch (status) {
        case Status.PaymentCompleted:
            return 'Delivered'
        case Status.PaymentRequested:
            return 'payment requested'
        case Status.Progress:
            return 'in progress'
        case Status.applied:
            return 'applied'
        case Status.open:
            return 'not started'
                        
        default:
            return 'no status'
            break;
    }
}

function BountyInSponsorList({bounty}: myType){
    return <div className='rounded-lg shadow-lg bg-white max-w-sm text-center grid grid-cols-1 gap-3 py-3 px-4'>
        <div>
            <div className='py-1 px-10 leading-none text-center whitespace-nowrap bg-violet-50 rounded-full truncate'>{bounty.label}</div>
        </div>
        <div>Bounty: {bounty.bounty}</div>
        <div className='flex justify-between'>
            <img src="./dai.svg" alt="dai" className="m-1 h-6 w-6" />
            <span className='m-1 h-6'>ERC20</span>
        </div>
        <div>
            <div className='w-full h-1 bg-violet-50'>
                <div className='bg-blue-600 h-1 rounded-full' style={{width: '45%'}}></div>
            </div>
        </div>
        <div className='flex justify-between'>
            <span>40 day, 10% left</span>
            <span className='bg-blue-500 text-white text-center py-1 px-7 rounded-full'>{getStatus(bounty.status)}</span>
        </div>
        <div className='flex'>
            <span className='text-blue-500 w-1/2 text-left'>Sponsor oppurtunity: $1800</span>
            <span className='text-blue-500 w-1/2 text-left'>APR: 40%</span>
        </div>
    </div>;
}

export default ManageMySponsorship;
