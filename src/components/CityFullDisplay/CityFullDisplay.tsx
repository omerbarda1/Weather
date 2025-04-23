import { useLocation } from "react-router-dom";
import City from "../../Types/City";

const CityFullDisplay: React.FC = () => {
  const location = useLocation();
  const city = location.state?.city as City;

  if (!city) return <div>No city data</div>;

  return (
    <div>
      <h1>{city.name}</h1>
      <p>{city.country}</p>
      <img src={city.image} alt={city.name} />
      <p>{city.description}</p>
    </div>
  );
};

export default CityFullDisplay;
