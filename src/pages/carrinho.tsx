import { FaShoppingCart, FaTimes } from 'react-icons/fa';

import { Button } from '../components/Button';

import { useComic } from '../contexts/ComicContext';

import {
  Table,
  DeleteButton,
  PriceText,
  NegativePriceText,
  QuantityField,
  CouponField,
  TotalField,
} from '../styles/carrinhoPage';
import { formatCurrency } from '../utils/formatCurrency';

function CartPage() {
  const { cartItems, alterProductAmount } = useComic();

  return (
    <div>
      <h1>
        <FaShoppingCart /> Carrinho
      </h1>

      <Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map(item => (
            <tr>
              <td>
                <DeleteButton>
                  <FaTimes />
                </DeleteButton>
              </td>
              <td>
                <img
                  src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`}
                  alt={item.title}
                />
              </td>
              <td>{item.title}</td>
              <td>
                <PriceText>{formatCurrency(item.prices[0].price)}</PriceText>
              </td>
              <td>
                <QuantityField>
                  <button onClick={() => alterProductAmount('decrease', item.id)}>-</button>
                  <div>{item.amount}</div>
                  <button onClick={() => alterProductAmount('increase', item.id)}>+</button>
                </QuantityField>
              </td>
              <td>
                <PriceText>{formatCurrency(item.prices[0].price * item.amount)}</PriceText>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <TotalField>
            <div>
              <h3>Quantidade de itens:</h3> <p>{cartItems.length}</p>
            </div>

            <div>
              <h3>Subtotal:</h3>
              <p>
                <PriceText>R$ 92,00</PriceText>
              </p>
            </div>

            <div>
              <h3>Cupom de desconto:</h3>
              <p>
                <NegativePriceText>-R$ 4,00</NegativePriceText> (-20%)
              </p>
            </div>

            <div>
              <h3>Total:</h3>
              <p>
                <PriceText>R$ 90,00</PriceText>
              </p>
            </div>

            <Button>Finalizar compra</Button>
          </TotalField>

          <CouponField>
            <label htmlFor="couponLabel">Cupom de desconto</label>

            <input type="text" id="couponLabel" maxLength={20} />

            <Button>Usar cupom</Button>
          </CouponField>
        </tfoot>
      </Table>
    </div>
  );
}

export default CartPage;
