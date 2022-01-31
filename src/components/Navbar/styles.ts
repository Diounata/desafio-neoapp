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
    display: flex;
    align-items: center;
    gap: 0.7rem;

    padding: 0.5rem 2rem;

    border: none;
    border-radius: 8px;
    background: inherit;
    color: #fff;

    font-size: 1.5em;
    text-decoration: none;

    transition: 0.2s;

    &:hover,
    &:focus {
      color: #e62429;
      filter: brightness(75%);
    }
  }

  span {
    display: none;
  }

  .logo {
    display: none;
  }

  @media (min-width: 800px) {
    padding: 2rem 0;
    left: 0;

    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;

    width: 100px;
    height: 100vh;

    transition: font-size 0.01s, width 0.35s;

    .logo {
      display: flex;
      justify-content: center;

      svg {
        &:nth-child(1) {
          width: 50%;
        }

        &:nth-child(2) {
          display: none;
        }
      }
    }

    &:hover {
      width: 200px;
      font-size: 0.7em;

      .logo svg {
        &:nth-child(1) {
          display: none;
        }

        &:nth-child(2) {
          display: inline;
        }
      }

      a {
        width: 100%;
        padding: 0.7rem 2rem;
      }

      span {
        display: inline;
      }
    }
  }
`;

const CartContainer = styled.div`
  display: grid;
  place-items: center;

  position: relative;

  span {
    display: inline;

    position: absolute;
    top: -8px;
    right: -8px;

    width: 1.2em;
    height: 1.2em;

    border-radius: 50%;
    background: #e62429;

    text-align: center;
    color: #fff;
    font-size: 0.7em;
    font-weight: 500;
  }
`;

export { Nav, CartContainer };
