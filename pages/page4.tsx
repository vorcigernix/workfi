import type { NextPage } from 'next/types'
import {
  useConnect,
  useDisconnect,
  useProvider,
  useContractWrite,
  useContractRead,
  useNetwork,
} from 'wagmi'
import { GetServerSideProps } from 'next'
import { ethers } from 'ethers'

import { contractAddress } from '../config'

import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'
import { useState } from 'react'

interface Props {
  message: string
}

const CallContract: NextPage<Props> = ({ message }: { message: string }) => {
  const [greeting, setGreeting] = useState(message)
  const network = useNetwork()
  const { write, data, error, isLoading, isError, isSuccess } =
    useContractWrite(
      {
        addressOrName: contractAddress,
        contractInterface: Greeter.abi,
      },
      'setGreeting'
    )

  return (
    <div className="grid items-center justify-center py-2">
      {greeting} on {network.activeChain?.name}
      <div
        className="grid"
        style={{ gridTemplateColumns: '1fr auto', gap: '5px' }}
      >
        <hr style={{ gridColumn: '1/3' }} />

        <span>New greeting:</span>
        <input
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          className="rounded border"
        />
        <button
          disabled={isLoading}
          onClick={() => write({ args: greeting })}
          className="rounded border-0 bg-blue-500 py-2 text-lg text-white hover:bg-pink-600 focus:outline-none"
          style={{ gridColumn: '1/3' }}
        >
          Set Greeting
        </button>
        {isError && <div>{error?.message}</div>}
        {isSuccess && <div>Transaction hash: {data?.hash}</div>}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let provider
  if (process.env.ENVIRONMENT === 'local') {
    provider = new ethers.providers.JsonRpcProvider()
  } else if (process.env.ENVIRONMENT === 'testnet') {
    provider = new ethers.providers.JsonRpcProvider(
      'https://matic-mumbai.chainstacklabs.com/'
    )
  } else {
    provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/')
  }

  const contract = new ethers.Contract(contractAddress, Greeter.abi, provider)
  const data = await contract.greet()
  return {
    props: {
      message: JSON.parse(JSON.stringify(data)),
    },
  }
}

export default CallContract
