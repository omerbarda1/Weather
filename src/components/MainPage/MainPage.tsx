import React, { useEffect, useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import cities from "../../data.json";
import City from "../../Types/City";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";
import UnderlineToggle from "../UnderlineToggle/UnderlineToggle";
import { useTemperature } from "../../context/DegreeContext";
import CitiesList from "../CitiesList/CitiesList";

const MainPage: React.FC = () => {
  const [activeCities, setActiveCities] = useState<City[]>([]);
  const [sortedCities, setSortedCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const temperatureContext = useTemperature();
  const navigate = useNavigate();

  useEffect(() => {
    const activeCitiesFromJson = cities.cities.filter((city) => city.active);
    setActiveCities(activeCitiesFromJson);
    setFilteredCities(activeCitiesFromJson);
  }, []);

  return (
    <div className="main-page">
      <div className="header">
        <Filters
          cities={sortedCities}
          onFiltersChanged={(filtersValue) => setFilteredCities(filtersValue)}
        />
        <Sort
          cities={activeCities}
          onSortChanged={(sorted) => {
            setSortedCities(sorted);
          }}
        />
        <UnderlineToggle<"C" | "F">
          defaultOption={temperatureContext.degree}
          title="Degrees"
          options={["C", "F"]}
          getLabel={(option) => option}
          onSelect={(selected) => temperatureContext.setDegree(selected)}
        />
      </div>
      <div className="cities-list">
        <CitiesList cities={filteredCities} heightToReduce={50} />
      </div>
    </div>
  );
};

export default MainPage;
