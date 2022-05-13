import { useState } from 'react'
import { Bounty, Status } from '../pages/api/data/Bounty'

export default function CreateJob() {
  //const [label, setLabel] = useState('');
  //const [organization, setOrganization] = useState('');
  //const [description, setDescription] = useState('');
  //const [duration, setDuration] = useState(0);
  //const [bounty, setBounty] = useState(0);
  //const [recruiter, setRecruiter] = useState('');

  const [bountyData, setBountyData] = useState<Bounty>({
    id: 1,
    label: '',
    organization: '',
    description: '',
    duration: 0,
    bounty: 0,
    recruiter: '',
    postDate: new Date(new Date().getTime()),
    startDate: new Date(Date.UTC(0, 0, 0)),
    worker: '',
    status: Status.open,
  })

  function handlePostJobEvent() {
    console.log('Job is posted', bountyData)
  }

  return (
    <div style={{ display: 'grid', gap: '15px' }}>
      <div
        style={{
          display: 'grid',
          gap: '15px',
          gridTemplateColumns: 'auto 1fr',
        }}
      >
        <label>Label</label>
        <input
          type="text"
          value={bountyData.label}
          onChange={(e) =>
            setBountyData({ ...bountyData, label: e.target.value })
          }
          className="border"
        />
        <label>Organization</label>
        <input
          type="text"
          value={bountyData.organization}
          onChange={(e) =>
            setBountyData({ ...bountyData, organization: e.target.value })
          }
          className="border"
        />
        <label>Duration (Days)</label>
        <input
          type="number"
          value={bountyData.duration}
          onChange={(e) =>
            setBountyData({ ...bountyData, duration: parseInt(e.target.value) })
          }
          className="border"
        />
        <label>Bounty (Gwei)</label>
        <input
          type="number"
          value={bountyData.bounty}
          onChange={(e) =>
            setBountyData({ ...bountyData, bounty: parseInt(e.target.value) })
          }
          className="border"
        />
        <label>Recruiter</label>
        <input
          type="text"
          value={bountyData.recruiter}
          onChange={(e) =>
            setBountyData({ ...bountyData, recruiter: e.target.value })
          }
          className="border"
        />
        <label>Description</label>
        <textarea
          value={bountyData.description}
          onChange={(e) =>
            setBountyData({ ...bountyData, description: e.target.value })
          }
          className="border"
        />
      </div>
      <button
        type="button"
        onClick={handlePostJobEvent}
        className="rounded bg-purple-500 py-2 text-lg text-white hover:bg-pink-600 focus:outline-none"
        style={{ justifySelf: 'center', width: '80%' }}
      >
        Post Job
      </button>
    </div>
  )
}
