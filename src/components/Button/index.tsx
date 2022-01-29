import { ButtonStyles } from './styles';

interface Props {
  children: string;
}

export function Button({ children }: Props) {
  return <ButtonStyles>{children}</ButtonStyles>;
}
