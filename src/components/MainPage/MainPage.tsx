import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cities from "../../data.json";
import City from "../../Types/City";
import Card from "../Card/Card";
import MainPageHeader from "../MainPageHeader/MainPageHeader";

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
      <MainPageHeader
        cities={activeCities}
        onFiltersChanged={setFilteredCities}
        onSortChanged={setSortedCities}
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
