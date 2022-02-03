import Link from 'next/link';
import axios from 'axios';
import { CardContainer, Card } from '../styles/indexPage';

import { Button } from '../components/Button';

import { useComic } from '../contexts/ComicContext';
import { formatCurrency } from '../utils/formatCurrency';
import { ComicProps } from '../types/ComicProps';
import { useEffect } from 'react';
import { Title } from '../utils/Title';

interface Props {
  data: ComicProps[];
}

export default function Home({ data }: Props) {
  const { allComics, isLoadingComics, updateAllComics, updateIsLoadingComic } = useComic();

  useEffect(() => {
    updateAllComics(data);
    updateIsLoadingComic(false);
  });

  return (
    <div>
      <Title value="Loja" />
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

export async function getStaticProps() {
  const baseURL = `https://gateway.marvel.com/v1/public/comics?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`;

  const data = await axios.get(baseURL).then(res => {
    const data: ComicProps[] = res.data.data.results;

    return data;
  });

  return {
    props: { data },
  };
}
