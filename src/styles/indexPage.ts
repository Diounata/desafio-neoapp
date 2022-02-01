import styled from 'styled-components';

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  margin: 1rem 0;
  margin-bottom: 2rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  background: rgba(94, 67, 67, 0.04);
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.08);

  padding-top: 1rem;

  transition: 0.2s;

  img {
    align-self: center;
    max-width: 100%;
  }

  h2,
  p {
    font-size: 1.2em !important;
  }

  &:hover,
  &:focus {
    transform: translateY(-5px);
  }
`;

export { CardContainer, Card };
