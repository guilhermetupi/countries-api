import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../assets/styles/themes/default';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    try {
      setTheme(JSON.parse(localStorage.getItem('theme')));
    } catch (e) {
      setTheme('light');
    }
  }, []);

  function handleToggleTheme() {
    setTheme((prevState) => {
      localStorage.setItem(
        'theme',
        JSON.stringify(prevState === 'light' ? 'dark' : 'light')
      );
      return prevState === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <ThemeContext.Provider
      value={{ theme: theme || 'light', handleToggleTheme }}
    >
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
