import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    user-select: none;
  }

  body {
    ::-webkit-scrollbar {
      background: #fff;
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background: #e62429;
      border-radius: 10px;
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  main {
    padding: 2rem;
    margin-bottom: 3rem;

    h1,
    h2,
    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 1.5em;
      font-weight: 500;

      padding: 0.4rem 0;
    }

    > footer {
      font-size: 0.9em;
    }
  }

  @media (min-width: 800px) {
    width: calc(100vw - 6rem);

    main {
      width: calc(100% - 4rem);
      margin: 0 8rem;
      padding: 2rem 0;
    }
  }
`;

export { GlobalStyles, Container };
