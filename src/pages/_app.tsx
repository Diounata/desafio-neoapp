import { GlobalStyles, Container } from '../styles/main';

import { Navbar } from '../components/Navbar';

import { ComicProvider } from '../contexts/ComicContext';
import { CartProvider } from '../contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <ComicProvider>
      <CartProvider>
        <GlobalStyles />

        <Container>
          <Navbar />

          <main>
            <Component {...pageProps} />

            <footer>&copy;2022 MARVEL</footer>
          </main>
        </Container>
      </CartProvider>
    </ComicProvider>
  );
}

export default MyApp;
