import { useState } from 'react';
import { Bounty, Status } from '../pages/api/data/Bounty'

export default function CreateJob() {
    const [label, setLabel] = useState('');
    const [organization, setOrganization] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [bounty, setBounty] = useState(0);
    const [recruiter, setRecruiter] = useState('');

    const bountyObj: Bounty = {
        id:1,
        label,
        organization,
        description,
        duration,
        bounty,
        recruiter,
        postDate: new Date(new Date().getTime()),
        startDate: new Date(Date.UTC(0, 0, 0)),
        worker: '',
        status: Status.open
    }

    function handlePostJobEvent(){
        console.log('Job is posted', bountyObj);
    }
          
    return (
      <div style={{display:'grid', gap:'15px'}}>
        <div style={{display:'grid', gap:'15px', gridTemplateColumns:'auto 1fr'}}>
          <label>Label</label><input type='text' value={label} onChange={e=>setLabel(e.target.value)} className='border' />
          <label>Organization</label><input type='text' value={organization} onChange={e=>setOrganization(e.target.value)} className='border' />
          <label>Duration (Days)</label><input type='number' value={duration} onChange={e=>setDuration(parseInt(e.target.value))} className='border' />
          <label>Bounty (Gwei)</label><input type='number' value={bounty} onChange={e=>setBounty(parseInt(e.target.value))} className='border' />
          <label>Recruiter</label><input type='text' value={recruiter} onChange={e=>setRecruiter(e.target.value)} className='border' />
          <label>Description</label><textarea value={description} onChange={e=>setDescription(e.target.value)} className='border' />
        </div>
        <button type='button' onClick={handlePostJobEvent} className='text-white bg-blue-500 py-2 focus:outline-none hover:bg-pink-600 rounded text-lg' style={{justifySelf:'center', width:'80%'}}>Post Job</button>
      </div>
    )
}
