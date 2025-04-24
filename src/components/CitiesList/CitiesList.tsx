import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import City from "../../Types/City";

interface CitiesListProps {
  cities: City[];
  heightToReduce: number;
}

const CitiesList: React.FC<CitiesListProps> = ({ cities, heightToReduce }) => {
  const navigate = useNavigate();
  const columnCount = 4;

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const city = cities[rowIndex * columnCount + columnIndex];
    if (!city) return <div style={style} />;

    return (
      <div style={{ ...style, display: "flex", justifyContent: "center" }}>
        <Card
          key={`${city.coords.lat}${city.coords.lng}`}
          title={city.name}
          subTitle={city.country}
          description={city.description}
          backgroundImage={city.image}
          onClick={() => navigate("/city", { state: { city } })}
        />
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <Grid
          columnCount={columnCount}
          columnWidth={(width - 20) / columnCount}
          height={height - heightToReduce}
          rowCount={Math.ceil(cities.length / columnCount)}
          rowHeight={480}
          width={width}
        >
          {Cell}
        </Grid>
      )}
    </AutoSizer>
  );
};

export default CitiesList;
