import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContent, CardImage } from './styles';
import { ThemeContext } from '../../contexts/theme';

const containerStyle = {
  width: 240,
  flex: 1,
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)',
};

export default function Card({
  capital,
  region,
  flagPng,
  population,
  commonName,
  cca2,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <Link style={containerStyle} to={`/country/${cca2}`}>
      <CardImage src={flagPng} alt="Country flag" />
      <CardContent className={theme === 'light' ? 'light' : 'dark'}>
        <h1>{commonName}</h1>
        <p>
          <strong>Population:</strong>
          {population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital && capital.join(', ')}
        </p>
      </CardContent>
    </Link>
  );
}

Card.propTypes = {
  capital: PropTypes.arrayOf(PropTypes.string).isRequired,
  region: PropTypes.string.isRequired,
  flagPng: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  commonName: PropTypes.string.isRequired,
  cca2: PropTypes.string.isRequired,
};
