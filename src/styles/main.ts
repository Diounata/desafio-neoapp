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
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export { GlobalStyles, Container };
