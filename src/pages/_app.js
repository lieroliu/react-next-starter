import 'styles/globals.css';
import React from 'react';
import App from 'next/app';
import wrapper, { initialiseStore } from 'src/modules';

const WrappedApp = ({ Component, pageProps }) => <Component {...pageProps} />;

WrappedApp.getInitialProps = async ({ Component, ctx }) => {
	const appProps = await App.getInitialProps({ Component, ctx });
	//initialise redux store on server side
	const reduxStore = initialiseStore({});
	const { dispatch } = reduxStore;

	appProps.pageProps = {
		...appProps.pageProps,
		initialReduxState: reduxStore.getState(),
		...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
		// Some custom thing for all pages
		appProp: ctx.pathname,
	};

	return appProps;
};

export default wrapper.withRedux(WrappedApp);
