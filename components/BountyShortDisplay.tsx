import { Bounty } from "../pages/api/data/Bounty";
import calendar from '../public/icons/calendar_month_black_24dp.svg';

export default function BountyShortDisplay({ bounty }:{ bounty:Bounty }) {
    return (
        <div style={{display:'grid', gap:'15px'}}>
            <h1 className='text-3xl font-bold'>{bounty.label}</h1>
            <div style={{display:'flex', gap:'5px'}}>
                <img src="/icons/work_black_24dp.svg" alt="" /> {bounty.duration} days
                <img src="/icons/paid_black_24dp.svg" alt="" /> {bounty.bounty}$
                <img src="/icons/calendar_month_black_24dp.svg" alt="" /> Posted on: {new Date(bounty.postDate).toISOString().slice(0,10)}
                <img src="/icons/corporate_fare_black_24dp.svg" alt="" /> {bounty.organization}</div>
        </div>
    )
}
