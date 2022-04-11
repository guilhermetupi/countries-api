import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

export const SearchInput = styled.div`
  width: 320px;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.secondary};

    input::placeholder {
      color: ${({ theme }) => theme.colors.dark.placeholderColor};
    }
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.secondary};

    input::placeholder {
      color: ${({ theme }) => theme.colors.light.placeholderColor};
    }
  }

  img {
    height: 16px;
    width: auto;
    margin-right: 16px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const RegionSelect = styled.div`
  width: 160px;
  border-radius: 6px;
  padding: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  &.dark {
    background-color: ${({ theme }) => theme.colors.dark.secondary};

    select {
      background-color: ${({ theme }) => theme.colors.dark.secondary};
      color: ${({ theme }) => theme.colors.dark.textColor};
    }
  }

  &.light {
    background-color: ${({ theme }) => theme.colors.light.secondary};

    select {
      background-color: ${({ theme }) => theme.colors.light.secondary};
      color: ${({ theme }) => theme.colors.light.textColor};
    }
  }

  select {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
