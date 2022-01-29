import Link from 'next/link';
import { Nav, CartContainer } from './styles';

import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { MLogo } from '../../img/M';
import { MarvelLogo } from '../../img/Marvel';

export function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <MLogo />
        <MarvelLogo />
      </div>

      <Link href="/">
        <a title="Ir à Loja">
          <FaHome /> <span>Loja</span>
        </a>
      </Link>

      <Link href="/carrinho">
        <a title="Ir ao Carrinho">
          <CartContainer>
            <FaShoppingCart />
            <span>2</span>
          </CartContainer>

          <span>Carrinho</span>
        </a>
      </Link>
    </Nav>
  );
}
