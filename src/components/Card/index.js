import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CardContainer, CardContent, CardImage } from './styles';
import { ThemeContext } from '../../contexts/theme';

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
    <CardContainer>
      <Link to={`/country/${cca2}`}>
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
    </CardContainer>
  );
}

Card.propTypes = {
  capital: PropTypes.arrayOf(PropTypes.string),
  region: PropTypes.string.isRequired,
  flagPng: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  commonName: PropTypes.string.isRequired,
  cca2: PropTypes.string.isRequired,
};

Card.defaultProps = {
  capital: null,
};
