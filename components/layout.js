import Head from 'next/head';
import Navebar from '../components/navebar';

const Layout =(props) =>(
<div >
    <Head>
        <title>DMProfile!</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <Navebar />
    <div className="container">
    {props.children}
    </div>

</div>
);

export default Layout;