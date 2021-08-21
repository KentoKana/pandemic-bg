import { City, CityId } from "../Shared/City";
import { Grid } from "./Grid";
import { GridCanvas } from "./GridCanvas";

interface IBoardProps {
  gridSize: { horizontal: number; vertical: number };
  cities: { [key in CityId]: City };
}

export const Board = ({ gridSize, cities }: IBoardProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <GridCanvas cities={cities} />
      <Grid gridSize={gridSize} cities={cities} />
    </div>
  );
};
