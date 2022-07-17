import {cache} from '@emotion/css';
import {CacheProvider} from '@emotion/react';
import type {AppProps} from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';

const App = ({Component, pageProps}: AppProps) => {
  const Layout = (Component as any).getLayout?.() ?? (({children}) => children);

  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
};

export default App;
