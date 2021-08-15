import { useState } from "react";
import { Board } from "../Board";
import { City } from "../Shared/City";

interface IGameProps {
  gridSize: { horizontal: number; vertical: number };
  cities: { [cityId: string]: City };
}

export const Game = ({ gridSize, cities }: IGameProps) => {
  const [citiesState] = useState<{ [cityId: string]: City }>(cities);

  return <Board gridSize={gridSize} cities={citiesState} />;
};
