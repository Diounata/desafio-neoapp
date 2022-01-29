import Link from 'next/link';
import { Container } from '../styles/hqPage';

import { Button } from '../components/Button';

import { FaArrowLeft } from 'react-icons/fa';

function HqPage() {
  return (
    <Container>
      <Link href="/">
        <a title="Voltar">
          <FaArrowLeft />
        </a>
      </Link>

      <header>
        <img src="https://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bb616782e48f/detail.jpg" alt="" />

        <div>
          <h1>Iron Man (2020) #18</h1>
        </div>
      </header>

      <section>
        <Button>Comprar agora</Button>

        <h1>Especificações:</h1>

        <article>
          <h2>Preço</h2>
          <p>R$ 20,00</p>
        </article>

        <article>
          <h2>Páginas</h2>
          <p>32</p>
        </article>

        <h2>Descrição</h2>
        <p className="description">
          Iron Man finally realizes that after all is said and done…he’s become worse than Korvac. And perhaps
          it’s time for Tony Stark to finally lay down his godlike powers and embrace his humanity. But if he
          does so, will he stand one shred of a chance against a cosmically enraged Korvac, or will he be
          destroyed like the small, armored bag of blood, flesh and bones he has once again become? David
          faces off against Goliath in this penultimate issue of the BOOKS OF KORVAC
        </p>
      </section>
    </Container>
  );
}

export default HqPage;
