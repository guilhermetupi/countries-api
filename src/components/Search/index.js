import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, RegionSelect, SearchInput } from './styles';
import { ThemeContext } from '../../contexts/theme';
import SearchLight from '../../assets/images/search-light.png';
import SearchDark from '../../assets/images/search-dark.png';

const regions = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania'];

export default function Search({ handleSearch, handleRegionFilter }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <SearchInput className={theme === 'light' ? 'light' : 'dark'}>
        <img
          src={theme === 'light' ? SearchLight : SearchDark}
          alt="Search icon"
        />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </SearchInput>
      <RegionSelect className={theme === 'light' ? 'light' : 'dark'}>
        <select onChange={(e) => handleRegionFilter(e.target.value)}>
          <option value="" defaultValue>
            Filter by region
          </option>
          {regions.sort().map((region) => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </RegionSelect>
    </Container>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleRegionFilter: PropTypes.func.isRequired,
};
