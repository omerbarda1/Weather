import React, { useEffect, useState } from "react";
import "./MainPage.css"
import { useNavigate } from "react-router-dom";
import cities from "../../data.json";
import City from "../../Types/City";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";
import UnderlineToggle from "../UnderlineToggle/UnderlineToggle";
import { useTemperature } from "../../context/DegreeContext";

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
    <div>
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
        <UnderlineToggle<"C"|"F"> defaultOption={temperatureContext.degree} title={"Degrees"} options={["C", "F"]} getLabel={(option) => option}  onSelect={((selected)=>temperatureContext.setDegree(selected))}/>
      </div>
      {filteredCities.map((city) => (
        <Card
          key={`${city.coords.lat}${city.coords.lng}`}
          title={city.name}
          subTitle={city.country}
          description={city.description}
          backgroundImage={city.image}
          onClick={() => navigate("/city", { state: { city } })}
        />
      ))}
    </div>
  );
};

export default MainPage;
