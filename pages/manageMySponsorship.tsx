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
  let a = [1,2,3];
  a.map(x => x+1)

  return (
    <>
        <header className='bg-white rounded-full my-5 rounded-lg shadow-lg flex justify-between items-center'>
            <div className=' p-10'>
            <div className='font-bold text-xl'>Dear recruiter</div>
            <div className='text-gray-500'>Monitor your open sponsorships or create a new one</div>
            </div>
            <img src='workfi 3.png' alt='' className='object-cover ' />
        </header>
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
            break;
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
