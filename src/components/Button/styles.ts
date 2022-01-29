import styled from 'styled-components';

const ButtonStyles = styled.button`
  padding: 0.7rem 2rem;
  width: 100%;

  border: none;
  border-radius: 10px;

  background: #e62429;
  color: #fff;

  font-size: 1.2rem;

  transition: 0.2s;

  &:hover,
  &:focus {
    filter: brightness(80%);
  }
`;

export { ButtonStyles };
