import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from '../../styles/hqPage';

import { Button } from '../../components/Button';

import { ComicProps } from '../../types/ComicProps';
import { FaArrowLeft } from 'react-icons/fa';

import { useComic } from '../../contexts/ComicContext';
import { formatCurrency } from '../../utils/formatCurrency';

function HqPage() {
  const { getComicById, addItemToCart } = useComic();
  const [comic, setComic] = useState<ComicProps>();

  const router = useRouter();

  function handleLink() {
    addItemToCart({ ...comic, amount: 1 });
    router.push('/carrinho');
  }

  useEffect(() => {
    const { id } = router.query;

    setComic(() => getComicById(Number(id)));
  }, []);

  if (!comic) return 'Loading...';

  return (
    <Container>
      <Link href="/">
        <a title="Voltar">
          <FaArrowLeft />
        </a>
      </Link>
      <header>
        <img
          src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
          alt={comic.title}
        />

        <div>
          <h1>{comic.title}</h1>
        </div>
      </header>
      <section>
        <Button attributes={{ onClick: handleLink }}>Comprar agora</Button>

        <h1>Especificações:</h1>

        <article>
          <h2>Preço</h2>
          <p>{formatCurrency(comic.prices[0].price)}</p>
        </article>

        <article>
          <h2>Páginas</h2>
          <p>{comic.pageCount}</p>
        </article>

        <h2>Descrição</h2>
        <p className="description">{comic.description || 'Não encontrado :('}</p>
      </section>
    </Container>
  );
}

export default HqPage;
