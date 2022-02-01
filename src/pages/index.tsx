import axios from 'axios';
import { CardContainer, Card } from '../styles/indexPage';

import { Button } from '../components/Button';
import { useEffect, useState } from 'react';

import { ComicProps } from '../types/ComicProps';
import { formatCurrency } from '../utils/formatCurrency';

function Home() {
  const [data, setData] = useState<ComicProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const baseURL = `https://gateway.marvel.com/v1/public/comics?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`;

    axios.get(baseURL).then(res => {
      setData(res.data.data.results);
      setIsLoading(false);
    });
  });

  return (
    <div>
      <h1>Loja de HQ's</h1>

      <CardContainer>
        {isLoading
          ? 'Loading...'
          : data.map(comic => (
              <Card key={comic.id}>
                <img
                  src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />

                <h2>{comic.title}</h2>

                <p>{formatCurrency(comic.prices[0].price)}</p>

                <Button>Comprar</Button>
              </Card>
            ))}
      </CardContainer>
    </div>
  );
}

export default Home;
