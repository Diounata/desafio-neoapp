import styled from 'styled-components';

const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 0.25fr));
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  margin: 1rem 0;
  margin-bottom: 2rem;
`;

const Card = styled.article`
  height: 10rem;

  background: rgba(0, 0, 0, 0.1);
  transition: 0.2s;

  &:hover,
  &:focus {
    transform: translateY(-5px);
  }
`;

export { CardContainer, Card };
