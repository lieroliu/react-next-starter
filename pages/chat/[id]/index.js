import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import wrapper from '../../../modules';

const Page = (props) => {
	// const { chat, boundAdd } = useChat();
    console.log(props)

	return (
		<div className={styles.container}>
			<Head>
				<title>{props.query}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
				<div>{props.query}</div>
		</div>
	);
};

// preload data before page loading

// Page.getInitialProps = wrapper.getInitialPageProps(
// 	(store) =>
// 		({ pathname, req, res }) => {
// 			console.log(pathname);
// 			console.log(store);
// 		}
// );

// preload data in server side

// export const getServerSideProps = wrapper.getServerSideProps(
// 	(store) =>
// 		async ({ pathname, req, res }) => {
//             await store.dispatch(await_function())
//             const count = store.getState().chat.count
// 			return {
// 				props: {
// 					count: count,
// 				},
// 			};
// 		}
// );

export default Page;
