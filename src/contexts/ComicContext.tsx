import { createContext, ReactNode, useContext, useState } from 'react';
import { ComicProps } from '../types/ComicProps';

const ComicContext = createContext({} as ContextProps);

interface CartItemProps extends ComicProps {
  amount: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  cartItems: CartItemProps[];

  alterProductAmount(type: 'increase' | 'decrease', id: number): void;
}

export function ComicProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([
    {
      id: 82967,
      title: 'Marvel Previews (2017)',
      description: '',

      prices: [{ type: 'printPrice', price: 1 }],
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
        extension: 'jpg',
      },
      amount: 1,
    },
  ]);

  function alterProductAmount(type: 'increase' | 'decrease', id: number): void {
    const selectedItem = cartItems.find(item => item.id === id);

    if (selectedItem) {
      if (type === 'increase') selectedItem.amount++;
      else {
        if (selectedItem.amount === 1) return;

        selectedItem.amount--;
      }
    }

    const newCartItems = cartItems.map(item => (item.id !== id ? item : selectedItem));

    setCartItems(newCartItems);
  }

  return <ComicContext.Provider value={{ cartItems, alterProductAmount }}>{children}</ComicContext.Provider>;
}

export function useComic() {
  return useContext(ComicContext);
}
