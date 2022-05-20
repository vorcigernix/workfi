import type { NextPage } from 'next/types';
import type { LoanOpportunity } from '../api/data/LoanOpportunity';
import { defaultBounty } from '../api/data/mockData';
import { useEffect, useState } from 'react';
import { Approve } from '../../components/Approve';
import DummyWorkFi from '../../artifacts/contracts/DummyWorkFi.sol/DummyWorkFi.json';
import { useContractWrite } from 'wagmi';
import { contractAddressMumbai } from '../../config';
import { WriteContractConfig } from '@wagmi/core';

//Opportunity Participation Form
const OpportunityParticipation: NextPage = () => {
	const [opportunity, setOpportunity] = useState<LoanOpportunity>({
		idBounty: defaultBounty.id,
		bounty: defaultBounty.bounty,
		stableAddress: '',
		stableAmount: 0,
		erc20Address: '',
		erc20Amount: 0,
		erc20Price: 0,
		rewards: 0,
		yield: 0,
		stableRatio: 20,
	} as LoanOpportunity);
	const [openDialog, setOpenDialog] = useState(false);

	function setRatio(ratio: number) {
		if (ratio > 0) {
			setOpportunity({
				...opportunity,
				stableRatio: ratio,
				stableAmount:  opportunity.bounty * (ratio / 100),
				erc20Amount: opportunity.bounty * (ratio / 50), //lazy me, e20 price is 0.5 so I hack it here
			});
		}
	}

	const { write, data, error, isLoading, isError, isSuccess } = useContractWrite(
		{
			addressOrName: contractAddressMumbai,
			contractInterface: DummyWorkFi.abi,
		},
		'invest'
	);

	const [callSmartContract, setCallSmartContract] = useState<(overrideConfig?: WriteContractConfig | undefined) => void>(() => {});
	useEffect(()=>{
		setCallSmartContract(() => {
			return () => {
				const bountyId = opportunity.idBounty;
				const stableAmount = opportunity.stableAmount;
				write({ args: [bountyId, stableAmount] })
			}
		})
	}, [opportunity, write])

	return (
		<div className="min-h-screen">
			<section className="flex flex-col items-start justify-start py-2">
				<div>
					<h1 className="mb-2 text-3xl font-bold leading-9">Project Galaxy Core Contract Gas Optimizations</h1>
					<div className="mt-5 flex flex-col gap-8 text-sm font-normal leading-5 text-stone-600 md:flex-row">
						<span className="flex flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
								<path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
							</svg>
							30 Days
						</span>
						<span className="flex flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
								<path
									fillRule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
									clipRule="evenodd"
								/>
							</svg>
							${opportunity.bounty}
						</span>
						<span className="flex flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clipRule="evenodd"
								/>
							</svg>
							Posted on: May 10, 2022
						</span>
						<span className="flex flex-row items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							Project Galaxy HQ
						</span>
					</div>
				</div>
			</section>

			<section className="flex flex-col py-2">
				<div className="mt-10 sm:mt-0">
					<div className="md:grid md:grid-cols-2 md:gap-6">
						<div className="mt-5 md:col-span-1 md:mt-0">
							<div className="overflow-hidden">
								<div className="py-6">
									<div className="grid grid-cols-4 gap-6">
										<div className="col-span-6">
											<h1 className="text-2xl font-bold leading-7 text-stone-600">
												Invest ${opportunity.stableAmount}
											</h1>
										</div>
										<div className="col-span-6 sm:col-span-4">
											<ul className=" mb-6 list-disc space-y-2 pl-6  text-stone-600">
												Provide stablecoin for this bounty:
												<li>
													You buy native token with a discount you get rewarded during the duration of the bounty
													(yield)
												</li>
												<li>If the bounty is cancelled, you get your stable coins back and the yield for the period</li>
											</ul>
											<label htmlFor="erc-20-ratio" className="block text-sm font-medium text-stone-600">
												Receive {opportunity.stableAmount * 2} ERC Tokens
											</label>
											<input
												type="range"
												value={opportunity.stableRatio}
												onChange={(e) => setRatio(+e.target.value)}
												className=" mt-1 block w-full rounded-md border-stone-100  accent-emerald-500 focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
												min="0"
												max="100"
												id="erc-20-ratio"
											/>
										</div>
										<div className="col-span-6 sm:col-span-4">
											<ul className=" mb-6 list-disc space-y-2 pl-6  text-stone-600">
												<li>ERC20 token price: $0.5</li>
												<li>Additional rewards for the bounty period : 40% APR</li>
												<li>
													Maximum lock period: 40 days.The Total maximum duration is the work period + 15% prior and 15%
													after the work period.
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 text-right sm:px-6">
									<button
										type="button"
										onClick={() => setOpenDialog(true)}
										className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
										Validate
									</button>
								</div>
								<div className="px-4 py-3 text-right sm:px-6">
									{isError && <div>{error?.message}</div>}
									{isSuccess && <div><a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>See transaction</a></div>}
								</div>
							</div>
						</div>
						<div className="mt-5 md:col-span-1">
							<div className="rounded-md bg-white p-5 text-stone-600 shadow-md sm:m-5 md:mx-12 md:px-12">
								<h3 className="hidden overflow-hidden rounded-full bg-emerald-200 p-2 text-center text-xs font-medium leading-6 text-emerald-400 md:mx-12">
									Project Galaxy Core Contract Gas Optimizations
								</h3>
								<div className="mt-3 flex flex-row items-center justify-center text-base  text-stone-600">
									<span>Bounty</span>
									<span className=" ml-4 font-bold">${opportunity.bounty}</span>
								</div>
								<div className="mt-3 flex flex-row items-center justify-around text-base text-stone-600">
									<img src="./dai.svg" alt="dai" className="m-4 h-6 w-6" />
									<img src="./ethereum.svg" alt="ethereum" className="m-4 h-6 w-6" />
								</div>
								<div className="w-full rounded-full bg-stone-100 font-bold">
									<div className="w-1/4 rounded-l-full bg-emerald-600 p-0.5 text-center text-xs leading-none text-emerald-100">
										25%
									</div>
								</div>
								<div className="mt-3 flex flex-row items-center justify-around text-sm text-stone-600">
									<span className="w-40 text-center">40 days, 100% left</span>
									<span className="w-40  rounded-full bg-slate-300 px-4 py-2 text-center font-bold opacity-50">
										Not started
									</span>
								</div>
								<div className="mt-6 flex flex-row items-center justify-around text-sm text-emerald-600">
									<span className="w-40 text-center">Loan opportunity: $2400</span>
									<span className="w-40 text-center">APR: 40%</span>
								</div>

								<div className="mt-6 hidden flex-row items-center justify-around text-sm">
									<button className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
										Sponsor opportunity
									</button>
								</div>
							</div>
						</div>
						<div className="mt-12 md:col-span-2">
							{<Approve
								message={'ERC 20'}
								maxcost={2000}
								erc20={1800}
								dai={200}
								lock={20}
								open={openDialog}
								setOpen={setOpenDialog}
								callSmartContract={callSmartContract}
							/>}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OpportunityParticipation;
