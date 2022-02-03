import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  margin: 2rem 0;

  thead {
    background: #f7f7f7;

    @media (max-width: 800px) {
      display: none;
    }
  }

  tfoot {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 2rem;
  }

  thead tr,
  tbody tr {
    display: grid;
    grid-template-columns: 0.15fr 0.3fr 1fr 0.4fr 0.5fr 0.4fr;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 2px solid #eaeaea;
    padding: 0.6rem 0;
  }

  th {
    padding: 0.4rem 0;
    font-weight: 500;
    text-transform: uppercase;
    text-align: start;
  }

  td {
    img {
      max-height: 100px;
      margin-left: 0;
    }
  }

  @media (max-width: 800px) {
    tbody tr {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      background: rgba(94, 67, 67, 0.04);
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.08);

      td {
        margin: 0.3rem auto;
        font-size: 1.3em;
      }
    }

    tfoot {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border-radius: 50%;
  border: 1px solid #999;
  color: #999;

  padding: 0.4rem;
`;

const PriceText = styled.span`
  color: #2dc17a;
  font-weight: 500;
`;

const NegativePriceText = styled.span`
  color: #e74c3c;
  font-weight: 500;
`;

const QuantityField = styled.div`
  display: flex;
  gap: 0.1rem;

  button,
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    background: inherit;
    border: 1px solid #eaeaea;
    font-weight: 300;
    font-size: 0.9em;
  }
`;

const CouponField = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    padding: 0.3rem 0.5rem;
    border: 1px solid #eaeaea;
    outline: none;
  }

  button {
    width: fit-content;
    font-size: 1em;
    padding: 0.3em 0.8em;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 1rem auto;

    width: 100%;
    font-size: 1.1rem;

    input {
      width: 100%;
    }
  }
`;

const TotalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  tr {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.2em !important;
  }

  button {
    width: fit-content;
    padding: 0.3rem 3rem;

    font-size: 1.2em;
  }

  @media (max-width: 800px) {
    tr {
      justify-content: space-between;
      gap: 0.3rem;
    }

    button {
      margin: auto;
    }
  }
`;

export { Table, DeleteButton, PriceText, NegativePriceText, QuantityField, CouponField, TotalField };
