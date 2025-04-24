import { useState } from "react";
import { Continent, continents } from "../constants/continents";

interface ContinentDropdownProps {
  onSelect: (continent: Continent | "") => void;
}

const ContinentDropdown: React.FC<ContinentDropdownProps> = ({ onSelect }) => {
  const [selected, setSelected] = useState<Continent | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Continent;
    setSelected(value);
    onSelect(value);
  };


  return (
    <div>
      <h3> continent </h3>
      <select className="custom-field" value={selected} onChange={handleChange}>
        <option value="">Select a continent</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContinentDropdown;
