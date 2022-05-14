import { useState } from 'react';
import { LoanOpportunity } from '../pages/api/data/LoanOpportunity'

export default function CreateLoanOpportunity() {
  const [erc20Address, setErc20Address] = useState('');
  const [erc20Amount, setErc20Amount] = useState(0);
  const [erc20Price, setErc20Price] = useState(0);
  const [incentive, setIncentive] = useState(0);

  const loanObj: LoanOpportunity = {
    id: 1,
    idBounty: 1,
    bounty:1,
    stableAddress: '',
    stableAmount: 0,
    erc20Address,
    erc20Amount,
    erc20Price,
    rewards: 0,
    yield: incentive,
    stableRatio: 0,
  }

  function handlePostJobEvent(){
    console.log('Job is posted', loanObj);
  }

  return (
    <div style={{display:'grid', gap:'15px'}}>
      <div style={{display:'grid', gap:'15px', gridTemplateColumns:'auto 1fr'}}>
        <label>ERC20 Token address</label><input type='text' value={erc20Address} onChange={e=>setErc20Address(e.target.value)} className='border' />
        <label>Number of Tokens</label><input type='number' value={erc20Amount} onChange={e=>setErc20Amount(parseInt(e.target.value))} className='border' />
        <label>Token price (USD based)</label><input type='number' value={erc20Price} onChange={e=>setErc20Price(parseInt(e.target.value))} className='border' />
        <label>Loan incentive (APR %)</label><input type='number' value={erc20Price} onChange={e=>setIncentive(parseInt(e.target.value))} className='border' />
      </div>
      <button type='button' onClick={handlePostJobEvent} className='text-white bg-purple-500 py-2 focus:outline-none hover:bg-pink-600 rounded text-lg' style={{justifySelf:'center', width:'80%'}}>Post Opportunity</button>
    </div>
  )
}
