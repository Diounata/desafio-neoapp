import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyles } from './styles';

interface Props {
  children: string | ReactNode;
  attributes?: ButtonHTMLAttributes<HTMLElement>;
}

export function Button({ children, attributes }: Props) {
  return <ButtonStyles {...attributes}>{children}</ButtonStyles>;
}
