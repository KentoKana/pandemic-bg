import { Board } from "../Board";
import { Cities } from "../Shared/City/Cities";

interface IGameProps {
  gridSize: { horizontal: number; vertical: number };
  cities: Cities;
}

export const Game = ({ gridSize, cities }: IGameProps) => {
  return <Board gridSize={gridSize} cities={cities} />;
};
