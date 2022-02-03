import { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

import { Button } from '../components/Button';

import { useCart } from '../contexts/CartContext';

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
  const {
    cartItems,
    totalPrice,
    totalItems,
    coupon,
    isUsingCoupon,
    alterProductAmount,
    deleteProduct,
    addCoupon,
  } = useCart();

  const [couponField, setCouponField] = useState('');

  function handleCouponInsertion(): void {
    addCoupon(couponField);
  }

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
            <tr key={item.id}>
              <td>
                <DeleteButton onClick={() => deleteProduct(item.id)}>
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
            <tr>
              <h3>Quantidade de itens:</h3> <p>{totalItems}</p>
            </tr>

            <tr>
              <h3>Subtotal:</h3>
              <p>
                <PriceText>{formatCurrency(totalPrice)}</PriceText>
              </p>
            </tr>

            <tr>
              <h3>Cupom de desconto:</h3>
              <p>
                {coupon} {isUsingCoupon && <NegativePriceText>(-10%)</NegativePriceText>}
              </p>
            </tr>

            <tr>
              <h3>Total:</h3>
              <p>
                <PriceText>{formatCurrency(isUsingCoupon ? totalPrice * 0.9 : totalPrice)}</PriceText>
              </p>
            </tr>

            <Button attributes={{ onClick: () => alert('Compra efetivada!') }}>Finalizar compra</Button>
          </TotalField>

          <CouponField>
            <label htmlFor="couponLabel">Cupom de desconto</label>

            <input
              type="text"
              id="couponLabel"
              maxLength={20}
              onChange={e => setCouponField(e.target.value)}
            />

            <Button attributes={{ onClick: handleCouponInsertion }}>Usar cupom</Button>
          </CouponField>
        </tfoot>
      </Table>
    </div>
  );
}

export default CartPage;
