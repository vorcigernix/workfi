import type { NextPage } from 'next/types'
import { GetServerSideProps } from 'next'
import { ethers } from 'ethers'

import { contractAddressMumbai } from '../config'

import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json'
import { ChangeEvent, useState } from 'react'

interface Props {
  message: string;
}

const CallContract: NextPage<Props> = ({ message }: {message:string }) => {
  const [greeting, setGreeting] = useState(message);
  const [newGreeting, setNewGreeting] = useState('');

  async function setNewGreetingHandler() {
    const _provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const contract = new ethers.Contract(
      contractAddressMumbai,
      Greeter.abi,
      _provider.getSigner(0)
    );
  
    await contract.setGreeting(newGreeting);
    const newGreetingFromChain = await contract.greet();
    setGreeting(newGreetingFromChain);
  }

  function handleNewGreetingChange(e: ChangeEvent<HTMLInputElement>){
    setNewGreeting(e.target.value);
  }

  return (
    <div className="grid items-center justify-center py-2">
      {greeting}
      <div className='grid' style={{gridTemplateColumns:'1fr auto', gap: '5px'}}>
        <hr style={{gridColumn:'1/3'}} />
        <span>New greeting:</span><input type='text' value={newGreeting} onChange={handleNewGreetingChange} className='rounded border' />
        <button type='button' onClick={setNewGreetingHandler} className='text-white bg-emerald-500 border-0 py-2 focus:outline-none hover:bg-pink-600 rounded text-lg' style={{gridColumn:'1/3'}}>Set Greeting</button>
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

  const contract = new ethers.Contract(contractAddressMumbai, Greeter.abi, provider);
  const data = await contract.greet();
  return {
    props: {
      message: JSON.parse(JSON.stringify(data))
    },
  }
}

export default CallContract
