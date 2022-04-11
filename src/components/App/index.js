import { useContext } from 'react';
import { Container, Content } from './styles';
import GlobalStyle from '../../assets/styles/global';
import Routes from '../../routes';
import { ThemeContext } from '../../contexts/theme';
import Header from '../Header';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container className={theme === 'light' ? 'light' : 'dark'}>
      <GlobalStyle />
      <Header />
      <Content>
        <Routes />
      </Content>
    </Container>
  );
}

export default App;
