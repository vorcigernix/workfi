import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
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
          <a className="text-blue-600" href="https://nextjs.org">
            WorkFi
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          <Connect />

          {isMounted && data && (
            <>
              <Account />
              <NetworkSwitcher />
            </>
          )}
        </p>

        <Link href="/page3" passHref>
          <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Contract call &rarr;</h3>
            <p className="mt-4 text-xl">Linked to be prefetched</p>
          </a>
        </Link>
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
