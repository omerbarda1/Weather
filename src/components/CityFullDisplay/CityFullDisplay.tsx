import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import City from "../../Types/City";
import { useTemperature } from "../../context/DegreeContext";
import { getWeatherData } from "../../API/weatherAPI";

const CityFullDisplay: React.FC = () => {
  const location = useLocation();
  const city = location.state?.city as City | undefined;
  const { degree } = useTemperature();

  const { data, isLoading } = useQuery({
    queryKey: city ? ['city', city.coords.lat, city.coords.lng] : ['city', 'none'],
    queryFn: () => getWeatherData(city!.coords.lat, city!.coords.lng),
    enabled: !!city,
  });

  if (!city) return <div>No city data</div>;

  const { name, country, description, image } = city;
  console.log(data?.list[0].main.temp)
  return (
    <div>
      <h1>{name}</h1>
      <h2>Temperature: {isLoading ? "Loading..." : `${data?.list[0].main.temp}${degree}°`}</h2>
      <p>{country}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default CityFullDisplay;
