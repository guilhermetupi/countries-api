import styled from 'styled-components';

export const CardContainer = styled.div`
  box-shadow: '0px 0px 6px rgba(0, 0, 0, 0.1)';
  width: 240px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  height: 144px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CardContent = styled.div`
  padding: 24px 32px;

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.secondary};
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 4px;
    text-overflow: ellipsis;

    strong {
      margin-right: 8px;
    }
  }
`;
