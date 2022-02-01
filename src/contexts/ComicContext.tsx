import { createContext, ReactNode, useContext } from 'react';

const ComicContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {}

export function ComicProvider({ children }: ChildrenProps) {
  return <ComicContext.Provider value={{}}>{children}</ComicContext.Provider>;
}

export function useComic() {
  return useContext(ComicContext);
}
