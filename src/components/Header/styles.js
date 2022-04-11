import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 64px;
  margin: 0 auto;
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.15);
  font-size: 24px;
  z-index: 99;

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.secondary};
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    img {
      height: 16px;
      width: auto;
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 16px 24px;
    font-size: 16px;
  }
`;
