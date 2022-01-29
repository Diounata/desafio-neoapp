import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100vw;
  height: 4rem;

  background: #151515;

  a {
    padding: 0.5rem 2rem;

    border: none;
    border-radius: 8px;
    background: inherit;
    color: #fff;

    font-size: 1.5em;

    transition: 0.2s;

    &:hover,
    &:focus {
      color: #e62429;
      filter: brightness(75%);
    }
  }
`;

export { Nav };
