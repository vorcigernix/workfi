import { useConnect, useDisconnect, useNetwork } from 'wagmi';

import { useIsMounted } from '../components/hooks/useIsMounted';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Props = {
	children: JSX.Element | JSX.Element[];
};

export default function Layout({ children }: Props) {
	const isMounted = useIsMounted();
	const { activeConnector, connect, connectors, isConnecting, pendingConnector } = useConnect();
	const { disconnect } = useDisconnect();
	const [connectDialog, setConnectDialog] = useState(false);
	const network = useNetwork();
	useEffect(() => {
		network.activeChain?.id != 80001 && network.switchNetwork?.(80001);
	}, [network.activeChain?.id]);

	return (
		<div className="min-h-full bg-stone-50">
			{/* Navigation */}
			<header className="body-font text-gray-600">
				<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
					<a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0" href="/">
						<svg width="256" height="64" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 24c0-3 1-5 4-5s5 2 5 5v16c0 6 4 9 8 9s9-3 9-9V23c0-2 3-4 5-4s5 2 5 5v16c0 6 4 9 9 9s9-3 9-9V23c0-2 2-4 5-4s5 2 5 5v16c0 13-9 18-18 18-6 0-11-1-15-5-3 4-8 5-13 5-9 0-19-6-19-18V24z"
								fill="#0076bb"
							/>
							<path
								d="M80 38c0-10 9-20 21-20s20 9 20 20-9 20-20 20a20 20 0 0 1-21-20zm21 11c14 0 14-21 0-21-5 0-8 2-10 5-4 7 0 16 10 16zm25-12c0-10 9-18 14-18 3 0 4 2 4 5 0 1 0 4-3 4-6 3-6 8-6 13v12c0 3-3 4-5 4s-4-1-4-4V37z"
								fill="#00b3ab"
							/>
							<path
								d="M152 4c3 0 5 2 5 5v23c8 0 13-4 17-11 1-2 3-2 4-2l4 2v5c-4 6-10 11-17 13 3 6 9 10 17 10 6 0 7 8 0 8-4 0-17 0-25-12v8c0 3-2 4-5 4s-4-1-4-4V9c0-3 2-5 4-5z"
								fill="#ffc52f"
							/>
							<path
								d="M195 5h28c6 0 6 9 0 9h-23v13h18l3 1 2 3v1c0 2-2 4-5 4h-18v17c0 3-2 4-5 4s-4-1-4-4V9c0-3 2-4 4-4zm41 14c2 0 5 2 5 4v30c0 3-3 4-5 4s-5-2-5-4V23c0-2 2-4 5-4zm0-15c6 0 6 9 0 9s-6-9 0-9z"
								fill="#f4b21f"
							/>
						</svg>
					</a>
					<nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
						<Link href={`/createopportunity`}>
							<a className="mr-5 font-bold text-amber-400 hover:text-yellow-600">Opportunities</a>
						</Link>
						<Link href={`/manageMySponsorship`}>
							<a className="mr-5 font-bold text-emerald-400 hover:text-emerald-600">Dashboard</a>
						</Link>
					</nav>
					{activeConnector ? (
						<>
							<button
								className="mt-6 inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 font-bold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 md:mt-0"
								onClick={() => disconnect()}>
								Disconnect
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="ml-1 h-4 w-4"
									viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</button>
						</>
					) : (
						isMounted && (
							<div className="flex justify-center">
								<div>
									<div className="dropdown relative">
										<button
											className="mt-6 inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 font-bold text-white shadow-sm hover:bg-emerald-700 focus:outline-none md:mt-0"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											onClick={() => setConnectDialog(!connectDialog)}
											aria-expanded="false">
											Connect
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="ml-1 h-4 w-4"
												viewBox="0 0 24 24">
												<path d="M5 12h14M12 5l7 7-7 7"></path>
											</svg>
										</button>

										<ul
											className="absolute z-50 float-left m-0 mt-1 min-w-max list-none rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg"
											aria-labelledby="dropdownMenuButton1"
											hidden={!connectDialog}>
											{connectors.map((x) => (
												<li key={`${x.id}li`}>
													<button
														key={x.id}
														onClick={() => connect(x)}
														className="block w-full whitespace-nowrap  bg-transparent py-2 px-4 text-sm font-normal text-gray-700 hover:bg-gray-100">
														{x.name}
														{isConnecting && x.id === pendingConnector?.id && ' (connecting)'}
													</button>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						)
					)}
				</div>
			</header>

			{/* End of header, start of body */}
			<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">{children}</div>
			</div>
		</div>
	);
}
