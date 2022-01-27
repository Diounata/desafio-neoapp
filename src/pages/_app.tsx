import { GlobalStyles } from '../styles/main';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
