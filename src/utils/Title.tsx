import Head from 'next/head';

interface Props {
  value: string;
}

export function Title({ value }: Props) {
  return (
    <Head>
      <title>{value}</title>
    </Head>
  );
}
