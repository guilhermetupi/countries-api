import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { Container } from './styles';
import Moon from '../../assets/images/moon.png';
import MoonOutlined from '../../assets/images/moon-outlined.png';

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container className={theme === 'light' ? 'light' : 'dark'}>
      <strong>Where in the world?</strong>
      <button type="button" onClick={handleToggleTheme}>
        <img src={theme === 'light' ? MoonOutlined : Moon} alt="Moon" />
        Dark Theme
      </button>
    </Container>
  );
}
