import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { CardList } from './styles';
import Loader from '../../components/Loader';

export default function Home() {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleSearch(value) {
    if (value.length) {
      setLoading(true);
      setFilteredCountriesData(
        countriesData.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setLoading(true);
      setFilteredCountriesData(countriesData);
    }
    setLoading(false);
  }

  function handleRegionFilter(value) {
    if (value.length) {
      setLoading(true);
      setFilteredCountriesData(
        countriesData.filter((country) => country.region === value)
      );
    } else {
      setLoading(true);
      setFilteredCountriesData(countriesData);
    }
    setLoading(false);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountriesData(response.data);
        setFilteredCountriesData(response.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Search
        handleSearch={handleSearch}
        handleRegionFilter={handleRegionFilter}
      />
      {loading && <Loader />}
      {filteredCountriesData && (
        <CardList>
          {filteredCountriesData
            .sort()
            .map(({ capital, region, flags, population, name, cca2 }) => (
              <Card
                capital={capital}
                region={region}
                flagPng={flags.png}
                population={population}
                commonName={name.common}
                cca2={cca2}
                key={cca2}
              />
            ))}
        </CardList>
      )}
    </>
  );
}
