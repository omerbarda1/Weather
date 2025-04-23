import React from "react";
import City from "../../Types/City";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";

interface MainPageHeaderProps {
  cities: City[];
  onFiltersChanged: (filtered: City[]) => void;
  onSortChanged: (sorted: City[]) => void;
}

const MainPageHeader: React.FC<MainPageHeaderProps> = ({
  cities,
  onFiltersChanged,
  onSortChanged,
}) => {
  return (
    <div>
      <Filters cities={cities} onFiltersChanged={onFiltersChanged} />
      <Sort cities={cities} onSortChanged={onSortChanged} />
    </div>
  );
};

export default MainPageHeader;
