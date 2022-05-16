import type { NextPage } from 'next/types'
import { GetServerSideProps } from 'next'
import { ethers } from 'ethers'

import { contractAddress, ownerAddress } from '../config'

import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'
import { ChangeEvent, useState } from 'react'

import { useContractFunction } from '@usedapp/core'

interface Props {
  message: string;
}

const CallContract: NextPage<Props> = ({ message }: {message:string }) => {
  const [newGreeting, setNewGreeting] = useState('');
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
  let provider1 = new ethers.providers.Web3Provider(window.web3.currentProvider);
  console.log(process.env.ENVIRONMENT , provider1);

  const contract = new ethers.Contract(contractAddress, Greeter.abi, provider)
  const { send: greet } = useContractFunction(contract, 'greet');

 async function setNewGreetingHandler(){
     greet().then(console.log);
  }
  function handleNewGreetingChange(e: ChangeEvent<HTMLInputElement>){
    setNewGreeting(e.target.value);
  }

  return (
    <div className="grid items-center justify-center py-2">
      {message}
      <div className='grid' style={{gridTemplateColumns:'1fr auto', gap: '5px'}}>
        <hr style={{gridColumn:'1/3'}} />
        <span>New greeting:</span><input type='text' value={newGreeting} onChange={handleNewGreetingChange} className='rounded border' />
        <button type='button' onClick={setNewGreetingHandler} className='text-white bg-blue-500 border-0 py-2 focus:outline-none hover:bg-pink-600 rounded text-lg' style={{gridColumn:'1/3'}}>Set Greeting</button>
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
      'https://rpc-mumbai.matic.today'
    )
  } else {
    provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/')
  }

  const contract = new ethers.Contract(contractAddress, Greeter.abi, provider)
  const data = await contract.greet()
  return {
    props: {
      message: JSON.parse(JSON.stringify(data))
    },
  }
}

export default CallContract
