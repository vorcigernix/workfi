import type { NextPage } from 'next/types'
import { GetServerSideProps } from 'next'
import { ethers } from 'ethers'

import { contractAddress, ownerAddress } from '../config'

import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'

interface Props {
  message: string;
}

const CallContract: NextPage<Props> = ({message}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {message}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let provider
  if (process.env.ENVIRONMENT === 'local') {
    provider = new ethers.providers.JsonRpcProvider()
  } else if (process.env.ENVIRONMENT === 'testnet') {
    provider = new ethers.providers.JsonRpcProvider(
      'https://rpc-mumbai.matic.today'
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
