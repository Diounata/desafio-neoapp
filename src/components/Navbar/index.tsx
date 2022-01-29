import Link from 'next/link';
import { Nav } from './styles';

import { FaHome, FaShoppingCart } from 'react-icons/fa';

export function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <a title="Ir à Loja">
          <FaHome />
        </a>
      </Link>

      <Link href="/carrinho">
        <a title="Ir ao Carrinho">
          <FaShoppingCart />
        </a>
      </Link>
    </Nav>
  );
}
