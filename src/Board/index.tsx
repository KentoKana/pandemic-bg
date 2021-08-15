import { City } from "../Shared/City";
import { Grid } from "./Grid";

interface IBoardProps {
  gridSize: { horizontal: number; vertical: number };
  cities: { [cityId: string]: City };
}

export const Board = ({ gridSize, cities }: IBoardProps) => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <Grid gridSize={gridSize} cities={cities} />
    </div>
  );
};
