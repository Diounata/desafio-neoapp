import styled from 'styled-components';

const Container = styled.div`
  a {
    display: inline-block;
    margin-bottom: 1rem;

    font-size: 1.4rem;
    color: #000;
  }

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    margin-bottom: 1rem;

    img {
      width: fit-content;
      margin: auto;

      border-radius: 5px;
      background: rgba(0, 0, 0, 0.1);
    }

    h1 {
      padding: 0;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 1rem 0;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .description {
    text-align: justify;
    font-size: 0.9rem;
    line-height: 1.4rem;
  }

  @media (min-width: 800px) {
    header {
      flex-direction: row;

      img {
        margin: 0 !important;
      }
    }

    section {
      width: 40rem;
    }

    button {
      width: fit-content;
    }

    .description {
      font-size: 1rem;
    }
  }
`;

export { Container };
