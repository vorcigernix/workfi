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
      id: 1,
      label: 'Write smart contracts',
      organization: 'MyDAO',
      description: 'Make UI amazing',
      duration: 40,
      bounty: 1,
      recruiter: 'Recruiter 1',
      postDate: new Date(Date.UTC(2022, 5, 1, 10)),
      startDate: new Date(Date.UTC(0, 0, 0)),
      worker: '',
      status: Status.PaymentCompleted,
    },
    {
      id: 2,
      label: 'Build UI',
      organization: 'MyDAO',
      description: 'Make UI amazing',
      duration: 40,
      bounty: 1,
      recruiter: 'Recruiter 1',
      postDate: new Date(Date.UTC(2022, 5, 1)),
      startDate: new Date(Date.UTC(2022, 5, 3)),
      worker: '',
      status: Status.PaymentCompleted,
    },
    {
      id: 3,
      label: 'Take prizes!',
      organization: 'MyDAO',
      description: 'Make UI amazing',
      duration: 40,
      bounty: 1,
      recruiter: 'Recruiter 1',
      postDate: new Date(Date.UTC(2022, 5, 1)),
      startDate: new Date(Date.UTC(2022, 5, 3)),
      worker: '',
      status: Status.Progress,
    },
  ])

  return (
    <>
      <div className="my-5  flex items-center justify-between rounded-lg bg-white shadow-lg">
        <div className="py-10 px-20">
          <div className="text-xl font-bold">Dear recruiter</div>
          <div className="text-stone-500">
            Monitor your open sponsorships or create a new one
          </div>
        </div>
        <img src="workfi 3.png" alt="" />
      </div>
      <div className="my-5  grid rounded-lg bg-white py-5 px-20 shadow-lg">
        <div className="text-xl font-bold" style={{ marginTop: '1rem' }}>
          Easily create a sponsorship for your bounties
        </div>
        <div className="text-stone-500" style={{ marginBottom: '2rem' }}>
          Ise a partner job and get your sponsorship oppurtunity running now
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="grid">
            <span className="font-bold">1. Choose a job board</span>
            <span className="text-stone-500">
              WorkFi works with the most trustfull onchian job boards.
            </span>
            <div className="flex gap-3">
              <img src="image 5.png" className="h-10 w-11" />
              <img src="image 6.png" className="h-10 w-11" />
              <img src="image 7.png" className="h-10 w-11" />
            </div>
          </div>
          <div className="grid">
            <span className="font-bold">2. Create your sponsorship</span>
            <span className="text-stone-500">
              Simply indicate your ERC20 tokens, it's price and the incentive
              you're willing to give to your investors.
            </span>
          </div>
          <div className="grid">
            <span className="font-bold">3. And that's it</span>
            <span className="text-stone-500">
              Manage your bounties in the job board, all the payment flow with
              your workers and your investors is automated.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {sponsorships.map((bounty: Bounty) => (
          <div key={bounty.id}>
            <BountyInSponsorList bounty={bounty} />
          </div>
        ))}
      </div>
    </>
  )
}

type myType = { bounty: Bounty }

function getStatus(status: Status) {
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
      break
  }
}

function BountyInSponsorList({ bounty }: myType) {
  return (
    <div
      className="grid max-w-sm grid-cols-1 gap-3 rounded-lg bg-white py-3 px-4 text-center shadow-lg"
    >
      <div>
        <div className="truncate whitespace-nowrap rounded-full bg-violet-50 py-1 px-10 text-center leading-none">
          {bounty.label}
        </div>
      </div>
      <div>Bounty: {bounty.bounty}</div>
      <div className="flex justify-between">
        <img src="./dai.svg" alt="dai" className="m-1 h-6 w-6" />
        <span className="m-1 h-6">ERC20</span>
      </div>
      <div>
        <div className="h-1 w-full bg-violet-50">
          <div
            className="h-1 rounded-full bg-emerald-600"
            style={{ width: '45%' }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between">
        <span>40 day, 10% left</span>
        <span className="rounded-full bg-emerald-500 py-1 px-7 text-center text-white">
          {getStatus(bounty.status)}
        </span>
      </div>
      <div className="flex">
        <span className="w-1/2 text-left text-emerald-500">
          Sponsor oppurtunity: $1800
        </span>
        <span className="w-1/2 text-left text-emerald-500">APR: 40%</span>
      </div>
    </div>
  )
}

export default ManageMySponsorship
