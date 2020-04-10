import Layout from '../components/layout';
import Prices from '../components/prices';
import Fetch from 'isomorphic-unfetch';


const index=(props) =>(
    <Layout>
<div>
<h1>Well come to next react </h1>
<span>Current Bit Coins Rate </span>
<Prices bpi={props.bpi}/>

</div>
</Layout>
);
index.getInitialProps = async function(){
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data= await res.json();
    return {
        bpi:data
    }
}
export default index;