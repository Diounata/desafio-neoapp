import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { CartItemProps } from '../types/CartProps';

const CartContext = createContext({} as ContextProps);

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  cartItems: CartItemProps[];
  totalPrice: number;
  totalItems: number;
  coupon: string;
  isUsingCoupon: boolean;

  addProductToCart(item: CartItemProps): void;
  deleteProduct(id: number): void;
  alterProductAmount(type: 'increase' | 'decrease', id: number): void;
  addCoupon(coupon: string): void;
}

export function CartProvider({ children }: ChildrenProps) {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, settotalItems] = useState(0);
  const [coupon, setCoupon] = useState('');
  const [isUsingCoupon, setIsUsingCoupon] = useState(false);

  function addProductToCart(item: CartItemProps): void {
    const hasItemIncludedIn = cartItems.some(i => i.id === item.id);

    if (hasItemIncludedIn) return;

    const newCart = [...cartItems, item];

    setCartItems(newCart);
  }

  function deleteProduct(id: number): void {
    const newCart = cartItems.filter(item => item.id !== id);

    setCartItems(newCart);
  }

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
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalItems,
        coupon,
        isUsingCoupon,
        addProductToCart,
        deleteProduct,
        alterProductAmount,
        addCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
