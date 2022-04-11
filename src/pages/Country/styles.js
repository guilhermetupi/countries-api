import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  &.dark {
    color: ${({ theme }) => theme.colors.dark.textColor};
  }

  &.light {
    color: ${({ theme }) => theme.colors.light.textColor};
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.secondary};
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.secondary};
  }

  img {
    margin-right: 8px;
  }
`;

export const CountryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 112px;

  img {
    width: calc(50% - 56px);
    height: auto;
  }

  @media screen and (max-width: 800px) {
    gap: 32px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 56px);

  h1 {
    margin-bottom: 48px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CountryInfoData = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  p {
    width: calc(50% - 16px);

    strong {
      margin-right: 8px;
    }

    &.border {
      width: 100%;
      margin-top: 40px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;

      span {
        border-radius: 4px;
        padding: 8px;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

        &.dark {
          background-color: ${({ theme }) => theme.colors.dark.secondary};
        }

        &.light {
          background-color: ${({ theme }) => theme.colors.light.secondary};
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    p {
      width: 100%;

      &.border {
        strong {
          width: 100%;
        }
      }
    }
  }
`;
