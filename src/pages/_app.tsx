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

          <footer>&copy;2022 MARVEL</footer>
        </main>
      </Container>
    </>
  );
}

export default MyApp;
