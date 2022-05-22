import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Account } from '../components/Account'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { useIsMounted } from '../components/hooks/useIsMounted'
import { useAccount } from 'wagmi'

const Home: NextPage = () => {
  const isMounted = useIsMounted()
  const { data } = useAccount()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>WorkFi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-emerald-600" href="https://nextjs.org">
            WorkFi
          </a>
        </h1>
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
      </main>


      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
