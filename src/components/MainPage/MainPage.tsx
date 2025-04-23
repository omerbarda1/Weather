import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cities from "../../data.json";
import City from "../../Types/City";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";

const MainPage: React.FC = () => {
  const [activeCities, setActiveCities] = useState<City[]>([]);
  const [sortedCities, setSortedCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);

  const navigate = useNavigate();
  useEffect(() => {
    const activeCitiesFromJson = cities.cities.filter((city) => city.active);
    setActiveCities(activeCitiesFromJson);
    setFilteredCities(activeCitiesFromJson);
  }, []);
  useEffect(() => {
    console.log(sortedCities, "sddsds");
  }, [sortedCities]);

  return (
    <div>
      <Filters
        cities={sortedCities}
        onFiltersChanged={(filtersValue) => setFilteredCities(filtersValue)}
      />
      <Sort
        cities={activeCities}
        onSortChanged={(sorted) => {
          console.log("Sort change function active");
          console.log(sorted);
          setSortedCities(sorted);
        }}
      />
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
