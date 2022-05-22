import type { NextPage } from 'next/types';
import type { LoanOpportunity } from './api/data/LoanOpportunity';
import { defaultBounty } from './api/data/mockData';
import { useState } from 'react';
import { Bounty, Status } from './api/data/Bounty';

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
	]);

	return (
		<>
			<div className="my-5 flex flex-col-reverse items-center justify-between rounded-lg bg-white shadow-lg md:flex-row">
				<div className="py-10 px-20">
					<div className="text-xl font-bold">Dear recruiter</div>
					<div className="text-stone-500">Monitor your open sponsorships or create a new one</div>
				</div>
				<img src="workfi 3.png" alt="" className=" rounded-full" />
			</div>
			<div className="my-5 rounded-lg bg-white py-5 px-4 shadow-lg md:my-20 md:px-20">
				<div className="-m-4 flex flex-wrap">
					<div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
						<div className="h-full text-center">
							<div className="my-8 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-100 text-3xl">
								1
							</div>
							<p className="font-bold leading-relaxed">Choose a job board</p>
							<span className="mt-6 inline-block h-1 w-10 rounded bg-emerald-500"></span>
							<p className="my-4 leading-relaxed">WorkFi works with the most trustfull onchain job boards </p>

							<div className=" flex justify-center gap-3">
								<img src="image 5.png" className="h-12 w-12 rounded-full border-4 p-1" />
								<img src="image 6.png" className="h-12 w-12 rounded-full border-4 p-1" />
								<img src="image 7.png" className="h-12 w-12 rounded-full border-4 p-1" />
							</div>

							<div className=" hidden justify-center gap-3 font-bold ">
								<span className=" rounded-full bg-amber-500 p-2 text-white">Gitcoin</span>
								<span className=" rounded-full bg-lime-500 p-2 text-white">Dework</span>
								<span className=" rounded-full bg-emerald-500 p-2 text-white">Mayflower</span>
							</div>
						</div>
					</div>
					<div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
						<div className="h-full text-center">
							<div className="my-8 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-200 text-3xl">
								2
							</div>
							<p className="font-bold leading-relaxed">Create a sponsorship</p>
							<span className="mt-6 inline-block h-1 w-10 rounded bg-emerald-500"></span>
							<p className="my-4 leading-relaxed">
								Simply indicate your ERC20 token, its price and the incentive you’re willing to give to your investors.
							</p>
						</div>
					</div>
					<div className="mb-6 p-4 lg:mb-0 lg:w-1/3">
						<div className="h-full text-center">
							<div className="my-8 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-500 bg-emerald-300 text-3xl">
								3
							</div>
							<p className="font-bold leading-relaxed">And that's it</p>
							<span className="mt-6 inline-block h-1 w-10 rounded bg-emerald-500"></span>
							<p className="my-4 leading-relaxed">
								Manage you bounty in the job board, all the payment flow with your workers and your investors is
								automated.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-4 justify-center">
				{sponsorships.map((bounty: Bounty) => (
					<div key={bounty.id}>
						<BountyInSponsorList bounty={bounty} />
					</div>
				))}
			</div>
		</>
	);
};

type myType = { bounty: Bounty };

function getStatus(status: Status) {
	switch (status) {
		case Status.PaymentCompleted:
			return 'Delivered';
		case Status.PaymentRequested:
			return 'payment requested';
		case Status.Progress:
			return 'in progress';
		case Status.applied:
			return 'applied';
		case Status.open:
			return 'not started';

		default:
			return 'no status';
			break;
	}
}

function BountyInSponsorList({ bounty }: myType) {
	return (
		<div className="grid max-w-sm grid-cols-1 gap-3 rounded-lg bg-white py-3 px-4 text-center shadow-lg">
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
					<div className="h-1 rounded-full bg-emerald-600" style={{ width: '45%' }}></div>
				</div>
			</div>
			<div className="flex justify-between">
				<span>40 day, 10% left</span>
				<span className="rounded-full bg-emerald-500 py-1 px-7 text-center text-white">{getStatus(bounty.status)}</span>
			</div>
			<div className="flex">
				<span className="w-1/2 text-left text-emerald-500">Sponsor oppurtunity: $1800</span>
				<span className="w-1/2 text-left text-emerald-500">APR: 40%</span>
			</div>
		</div>
	);
}

export default ManageMySponsorship;
