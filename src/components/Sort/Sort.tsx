import { useState, useEffect } from "react";
import City from "../../Types/City";
import { calcDistanceToTelAviv } from "../../utils/calcDistanceToTelAviv";
import UnderlineToggle from "../UnderlineToggle/UnderlineToggle";

type SortMethod = "name" | "distance";

interface ISortProps {
  cities: City[];
  onSortChanged: (sortedCities: City[]) => void;
}
const Sort: React.FC<ISortProps> = ({ cities, onSortChanged }) => {
  const [selectedMethod, setSelectedMethod] = useState<SortMethod>("name");
  const sortOptions: SortMethod[] = ["name", "distance"];

  useEffect(() => {
    //The sort method will mutate the same array and will not trigger any state changes
    const citiesCopy = [...cities];
    const sortedCities =
      selectedMethod === "name"
        ? citiesCopy.sort((a, b) => a.name.localeCompare(b.name))
        : citiesCopy.sort((a, b) => {
          const distanceA = calcDistanceToTelAviv({
            longitude: a.coords.lng,
            latitude: a.coords.lat,
          });
          const distanceB = calcDistanceToTelAviv({
            longitude: b.coords.lng,
            latitude: b.coords.lat,
          });
          return distanceA - distanceB;
        });
    onSortChanged(sortedCities);
  }, [selectedMethod, cities]);

  const handleMethodChange = (method: SortMethod) => {
    setSelectedMethod(method);
  };

  return (
    <UnderlineToggle<SortMethod>
      title={"Sort By"}
      options={sortOptions}
      getLabel={(option) => option}
      defaultOption="name"
      onSelect={(selected) => handleMethodChange(selected)}
    />
  );
};

export default Sort;
