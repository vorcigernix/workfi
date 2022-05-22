import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Account } from '../components/Account';
import { NetworkSwitcher } from '../components/NetworkSwitcher';
import { useIsMounted } from '../components/hooks/useIsMounted';
import { useAccount } from 'wagmi';

const Home: NextPage = () => {
	const isMounted = useIsMounted();
	const { data } = useAccount();
	return (
		<div className="flex min-h-screen flex-col justify-start py-2">
			<Head>
				<title>WorkFi</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto py-24">
				<h1 className="text-6xl font-bold">
					Welcome to{' '}
					<a className="text-emerald-600" href="https://workfi.com">
						WorkFi
					</a>
				</h1>
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
									Simply indicate your ERC20 token, its price and the incentive you’re willing to give to your
									investors.
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
			</main>
		</div>
	);
};

export default Home;
