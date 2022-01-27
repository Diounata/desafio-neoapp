import { GlobalStyles, Container } from '../styles/main';

import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Navbar />

        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </>
  );
}

export default MyApp;
