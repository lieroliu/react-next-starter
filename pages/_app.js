import '../styles/globals.css';
import wrapper from '../modules';

const WrappedApp = ({Component, pageProps}) => <Component {...pageProps} />;

export default wrapper.withRedux(WrappedApp);
