import { ReactNode } from 'react';
import { Button } from './styles';

interface Props {
  children: ReactNode;
}

export function BuyButton({ children }: Props) {
  return (
    <Button>{children}</Button>
  ) 
}
