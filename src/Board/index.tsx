import { useState } from "react";
import { City } from "../Shared/City";
import { Cities } from "../Shared/City/Cities";
import { FooterPanel } from "./FooterPanel";
import { Grid } from "./Grid";
import { GridCanvas } from "./GridCanvas";
import { HeaderPanel } from "./HeaderPanel";

interface IBoardProps {
  gridSize: { horizontal: number; vertical: number };
  cities: Cities;
}

export const Board = ({ gridSize, cities }: IBoardProps) => {
  const [selectedCity, setSelectedCity] = useState<City>();

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <HeaderPanel selectedCity={selectedCity} />
      <div className="position-relative">
        <GridCanvas cities={cities} />
        {/* Canvas for drawing lines to selected city's neighbor */}
        <GridCanvas selectedCity={selectedCity} />
        <Grid
          selectedCity={selectedCity}
          gridSize={gridSize}
          onCitySelect={(newSelectedCity) => {
            setSelectedCity(newSelectedCity);
          }}
        />
      </div>
      <FooterPanel />
    </div>
  );
};
