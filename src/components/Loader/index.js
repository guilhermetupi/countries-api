import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './styles';
import { ThemeContext } from '../../contexts/theme';

export default function Loader() {
  const { theme } = useContext(ThemeContext);

  return ReactDOM.createPortal(
    <Overlay>
      <div className={`loader ${theme === 'light' ? 'light' : 'dark'}`} />
    </Overlay>,
    document.getElementById('loader-root')
  );
}
