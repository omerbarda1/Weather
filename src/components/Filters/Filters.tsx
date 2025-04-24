import { useState, useEffect } from "react";
import "./Filters.css"
import debounce from "lodash/debounce";
import ContinentDropdown from "../ContinentsDropDown";
import { Continent } from "../../constants/continents";
import City from "../../Types/City";

interface IFiltersProps {
  cities: City[];
  onFiltersChanged: (filteredCities: City[]) => void;
}
interface FiltersData {
  citySearchText: string;
  continent: Continent | "";
}
const Filters: React.FC<IFiltersProps> = ({ cities, onFiltersChanged }) => {
  const [filters, setFilters] = useState<FiltersData>({
    citySearchText: "",
    continent: "",
  });

  const handleSearch = debounce((value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      citySearchText: value,
    }));
  }, 300);

  const handleContinentChange = (continent: Continent | "") => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      continent,
    }));
  };

  useEffect(() => {
    const { citySearchText, continent } = filters;

    const filteredCities = cities.filter((city) => {
      const regex = new RegExp(citySearchText, "i");
      const matchesSearch = regex.test(city.name) || regex.test(city.country);
      const matchesContinent = continent === "" || city.continent === continent;

      return matchesSearch && matchesContinent;
    });

    onFiltersChanged(filteredCities);
    // eslint-disable-next-line
  }, [filters.citySearchText, filters.continent, cities]);

  return (
    <>
      <div>
        <h3> Search </h3>
        <input
          type="text"
          className="custom-field"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="search a city"
        />
      </div>
      <ContinentDropdown onSelect={handleContinentChange} />
    </>
  );
};

export default Filters;
