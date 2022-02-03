import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { ComicProps } from '../types/ComicProps';

const ComicContext = createContext({} as ContextProps);

interface CartItemProps extends ComicProps {
  amount: number;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  allComics: ComicProps[];
  isLoadingComics: boolean;
  cartItems: CartItemProps[];
  totalPrice: number;
  totalItems: number;
  coupon: string;
  isUsingCoupon: boolean;

  alterProductAmount(type: 'increase' | 'decrease', id: number): void;
  deleteProduct(id: number): void;
  addItemToCart(item: CartItemProps): void;
  getComicById(id: number): ComicProps;
  addCoupon(coupon: string): void;
  updateAllComics(value: ComicProps[]): void;
  updateIsLoadingComic(value: boolean): void;
}

export function ComicProvider({ children }: ChildrenProps) {
  const [allComics, setAllComics] = useState<ComicProps[]>();
  const [isLoadingComics, setIsLoadingComics] = useState(true);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, settotalItems] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [isUsingCoupon, setIsUsingCoupon] = useState(false);

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

  function deleteProduct(id: number): void {
    const newCart = cartItems.filter(item => item.id !== id);

    setCartItems(newCart);
  }

  function updateAllComics(value: ComicProps[]): void {
    setAllComics(value);
  }

  function updateIsLoadingComic(value: boolean): void {
    setIsLoadingComics(value);
  }

  function addItemToCart(item: CartItemProps): void {
    const hasItemIncludedIn = cartItems.some(i => i.id === item.id);

    if (hasItemIncludedIn) return;

    const newCart = [...cartItems, item];

    setCartItems(newCart);
  }

  function getComicById(id: number): ComicProps {
    const comic = allComics.find(item => item.id === id);

    if (comic) return comic;
  }

  function addCoupon(coupon: string): void {
    const couponValue = coupon.toUpperCase();

    if (couponValue === '10%OFF') {
      setCoupon(couponValue);
      setIsUsingCoupon(true);
    }
  }

  useEffect(() => {
    if (!cartItems.length) {
      setTotalPrice(0);
      settotalItems(0);
      return;
    }
    const totalPrice = cartItems
      .map(item => item.prices[0].price * item.amount)
      .reduce((prev, value) => prev + value);
    const totalItems = cartItems.map(item => item.amount).reduce((prev, value) => prev + value);

    setTotalPrice(totalPrice);
    settotalItems(totalItems);
  }, [cartItems]);

  return (
    <ComicContext.Provider
      value={{
        allComics,
        isLoadingComics,
        cartItems,
        totalPrice,
        totalItems,
        coupon,
        isUsingCoupon,
        alterProductAmount,
        deleteProduct,
        addItemToCart,
        getComicById,
        addCoupon,
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
