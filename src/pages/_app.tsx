import { GlobalStyles, Container } from '../styles/main';

import { Navbar } from '../components/Navbar';

import { ComicProvider } from '../contexts/ComicContext';

function MyApp({ Component, pageProps }) {
  return (
    <ComicProvider>
      <GlobalStyles />

      <Container>
        <Navbar />

        <main>
          <Component {...pageProps} />

          <footer>&copy;2022 MARVEL</footer>
        </main>
      </Container>
    </ComicProvider>
  );
}

export default MyApp;
