import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper, persistor } from 'store';
import Layout from "components/Layout";

import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  )
}

export default wrapper.withRedux(MyApp);
