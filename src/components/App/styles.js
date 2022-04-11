import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.primary};
    * {
      color: ${({ theme }) => theme.colors.dark.textColor};
    }
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.primary};
    * {
      color: ${({ theme }) => theme.colors.light.textColor};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1128px;
  height: 100%;
  padding: 48px 24px;
  margin: 0 auto;
`;
