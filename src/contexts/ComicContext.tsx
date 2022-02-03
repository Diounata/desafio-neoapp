import { createContext, ReactNode, useContext, useState } from 'react';

import { ComicProps } from '../types/ComicProps';

const ComicContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  allComics: ComicProps[];
  isLoadingComics: boolean;

  getComicById(id: number): ComicProps;
  updateAllComics(value: ComicProps[]): void;
  updateIsLoadingComic(value: boolean): void;
}

export function ComicProvider({ children }: ChildrenProps) {
  const [allComics, setAllComics] = useState<ComicProps[]>();
  const [isLoadingComics, setIsLoadingComics] = useState(true);

  function updateAllComics(value: ComicProps[]): void {
    setAllComics(value);
  }

  function updateIsLoadingComic(value: boolean): void {
    setIsLoadingComics(value);
  }

  function getComicById(id: number): ComicProps {
    const comic = allComics.find(item => item.id === id);

    if (comic) return comic;
  }

  return (
    <ComicContext.Provider
      value={{
        allComics,
        isLoadingComics,
        getComicById,
        updateIsLoadingComic,
        updateAllComics,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
}

export function useComic() {
  return useContext(ComicContext);
}
