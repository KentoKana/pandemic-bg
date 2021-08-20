import { Board } from "../Board";
import { City, CityId } from "../Shared/City";

interface IGameProps {
  gridSize: { horizontal: number; vertical: number };
  cities: { [key in CityId]: City };
}

export const Game = ({ gridSize, cities }: IGameProps) => {
  return <Board gridSize={gridSize} cities={cities} />;
};
