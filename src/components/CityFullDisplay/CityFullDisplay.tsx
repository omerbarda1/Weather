import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import City from "../../Types/City";
import { useTemperature } from "../../context/DegreeContext";
import { getCityTempreture } from "../../API/weatherAPI";

const CityFullDisplay: React.FC = () => {
  const location = useLocation();
  const city = location.state?.city as City | undefined;
  const { degree } = useTemperature();

  const {
    data: temperature,
    isLoading,
    error,
  } = useQuery({
    queryKey: city
      ? ["city", city.coords.lat, city.coords.lng]
      : ["city", "none"],
    queryFn: () =>
      getCityTempreture(city!.coords.lat, city!.coords.lng, degree),
    enabled: !!city,
  });

  if (!city) return <div>No city data</div>;
  if (error) return <div>error in loading temperature</div>;

  const { name, country, description, image } = city;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        Temperature: {isLoading ? "Loading..." : `${temperature}${degree}°`}
      </h2>
      <p>{country}</p>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default CityFullDisplay;
