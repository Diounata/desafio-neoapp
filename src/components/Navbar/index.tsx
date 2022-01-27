import Link from 'next/link';
import { Nav } from './styles';

import { FaHome, FaShoppingCart } from 'react-icons/fa';

export function Navbar() {
  return (
    <Nav>
      <Link href="/">
        <button title="Ir à Loja">
          <FaHome />
        </button>
      </Link>

      <Link href="/carrinho">
        <button title="Ir ao Carrinho">
          <FaShoppingCart />
        </button>
      </Link>
    </Nav>
  );
}
