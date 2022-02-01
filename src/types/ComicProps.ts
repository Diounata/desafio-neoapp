interface ComicProps {
  id: number;
  title: string;
  description: string;
  prices: [
    {
      type: string;
      price: number;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  images?: [
    {
      path: string;
      extension: string;
    }
  ];

  characters?: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
  };
}

interface APIResponseProps {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ComicProps[];
  };
}

export type { APIResponseProps, ComicProps };
