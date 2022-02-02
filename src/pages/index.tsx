import Link from 'next/link';
import { CardContainer, Card } from '../styles/indexPage';

import { Button } from '../components/Button';

import { useComic } from '../contexts/ComicContext';
import { formatCurrency } from '../utils/formatCurrency';

function Home() {
  const { allComics, isLoadingComics } = useComic();

  return (
    <div>
      <h1>Loja de HQ's</h1>

      <CardContainer>
        {isLoadingComics
          ? 'Loading...'
          : allComics.map(comic => (
              <Card key={comic.id}>
                <img
                  src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />

                <h2>{comic.title}</h2>

                <p>{formatCurrency(comic.prices[0].price)}</p>

                <Link href={`/hq/${comic.id}`}>
                  <a>
                    <Button>Comprar</Button>
                  </a>
                </Link>
              </Card>
            ))}
      </CardContainer>
    </div>
  );
}

export default Home;
