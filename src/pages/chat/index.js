import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { usePusher } from 'Hooks'

const Page = (props) => {
    const { server } = usePusher();
    return (<div className={
        styles.container
    }>
        <Head>
            <title> {
                props.query
            }</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div> {
            props.query
        }</div>
    </div>);
};

export default Page;