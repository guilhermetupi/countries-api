import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  BackButton,
  Container,
  CountryContainer,
  CountryInfo,
  CountryInfoData,
} from './styles';
import { ThemeContext } from '../../contexts/theme';
import BackLight from '../../assets/images/back-light.png';
import BackDark from '../../assets/images/back-dark.png';
import Loader from '../../components/Loader';

export default function Country() {
  const [countryData, setCountryData] = useState();
  const [loading, setLoading] = useState(true);
  const [borders, setBorders] = useState([]);
  const { cca2 } = useParams();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setBorders([]);
    axios
      .get(`https://restcountries.com/v3.1/alpha/${cca2}`)
      .then((response) => {
        setCountryData(response.data[0]);
        response.data[0]?.borders.forEach((border) => {
          axios
            .get(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res) => {
              setBorders((prevState) => [
                ...new Set([...prevState, res.data[0]]),
              ]);
            });
        });
      })
      .finally(() => setLoading(false));
  }, [cca2]);

  return (
    <Container className={theme === 'light' ? 'light' : 'dark'}>
      {loading && <Loader />}
      <BackButton to="/" className={theme === 'light' ? 'light' : 'dark'}>
        <img src={theme === 'light' ? BackLight : BackDark} alt="Back" />
        Back
      </BackButton>
      {countryData && (
        <CountryContainer>
          <img src={countryData.flags.png} alt={countryData.name.common} />
          <CountryInfo>
            <h1>{countryData.name.common}</h1>
            <CountryInfoData>
              <p>
                <strong>Native name:</strong>
                {Object.values(countryData.name.nativeName)
                  .map((name) => name.common)
                  .join(', ')}
              </p>
              <p>
                <strong>Capital:</strong>
                {countryData.capital}
              </p>
              <p>
                <strong>Population:</strong>
                {countryData.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong>
                {countryData.region}
              </p>
              <p>
                <strong>Subregion:</strong>
                {countryData.subregion}
              </p>
              <p>
                <strong>Languages:</strong>
                {Object.values(countryData.languages).join(', ')}
              </p>
              <p>
                <strong>Currencies:</strong>
                {Object.values(countryData.currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
              </p>
              <p>
                <strong>Top level domain:</strong>
                {countryData.tld.join(', ')}
              </p>
              {borders.length ? (
                <p className="border">
                  <strong>Border countries:</strong>
                  {borders.map(({ name, cca2: borderCca2 }) => (
                    <Link
                      to={`/country/${borderCca2}`}
                      className={theme === 'light' ? 'light' : 'dark'}
                      key={borderCca2}
                    >
                      {name.common}
                    </Link>
                  ))}
                </p>
              ) : null}
            </CountryInfoData>
          </CountryInfo>
        </CountryContainer>
      )}
    </Container>
  );
}
