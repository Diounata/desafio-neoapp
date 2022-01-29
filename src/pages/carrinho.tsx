import { FaShoppingCart, FaTimes } from 'react-icons/fa';

import { Button } from '../components/Button';

import {
  Table,
  DeleteButton,
  PriceText,
  NegativePriceText,
  QuantityField,
  CouponField,
  TotalField,
} from '../styles/carrinhoPage';

function CartPage() {
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
          <tr>
            <td>
              <DeleteButton>
                <FaTimes />
              </DeleteButton>
            </td>
            <td>
              <img
                src="https://i.annihil.us/u/prod/marvel/i/mg/6/e0/4bb616782e48f/detail.jpg"
                alt="Product"
              />
            </td>
            <td>Homem de ferro</td>
            <td>
              <PriceText>R$ 5,00</PriceText>
            </td>
            <td>
              <QuantityField>
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </QuantityField>
            </td>
            <td>
              <PriceText>R$ 5,00</PriceText>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <TotalField>
            <div>
              <h3>Quantidade de itens:</h3> <p>1</p>
            </div>

            <div>
              <h3>Subtotal:</h3>
              <p>
                <PriceText>R$ 92,00</PriceText>
              </p>
            </div>

            <div>
              <h3>Desconto de cupom:</h3>
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

            <Button>Comprar</Button>
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
