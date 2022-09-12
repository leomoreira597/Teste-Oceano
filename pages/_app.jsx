import '../styles/globals.css'
import { storeWrapper } from '../store/configStore'
import React from 'react';
import Mensagem from '../components/Mensagem';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <Mensagem/>
    </React.Fragment>
  );
}

export default storeWrapper.withRedux(MyApp);
