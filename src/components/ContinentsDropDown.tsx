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

  const handleClear = () => {
    setSelected("");
    onSelect("");
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        <option value="">Select a continent</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default ContinentDropdown;
