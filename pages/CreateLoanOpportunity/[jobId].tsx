import BountyShortDisplay from '../../components/BountyShortDisplay';
import CreateLoanOpportunity from '../../components/CreateLoanOpportunity';
import { Bounty } from '../api/data/Bounty';

export default function Jobs({ bounty }: { bounty: Bounty}) {

    return (<div style={{display:'grid', gap:'15px'}}>
        <BountyShortDisplay bounty={bounty} />
        <hr />
        <CreateLoanOpportunity />
    </div>);
}


export async function getServerSideProps({ params }: { params: any }) {
    const req = await fetch('http://localhost:3000/mockData.json');     // Should come from the Blockchain.
    const obj : {defaultBounty: Bounty} = await req.json();
    const bounty = obj.defaultBounty as Bounty;

    return {
        props: { bounty }
    };

}
