import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import React from 'react';
import store from '../store';
import { Layout, ModalLogin } from '../components';

import 'antd/dist/antd.css';
import './_app.sass';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout />
      <Modals />
      <Component {...pageProps} />
    </Provider>
  );
}

const Modals = () => <>
  <ModalLogin />
</>;

export default App;
