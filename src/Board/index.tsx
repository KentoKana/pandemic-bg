import { useState } from "react";
import { City, CityId } from "../Shared/City";
import { CityCard } from "../UI/CityCard";
import { FooterPanel } from "./FooterPanel";
import { Grid } from "./Grid";
import { GridCanvas } from "./GridCanvas";
import { HeaderPanel } from "./HeaderPanel";

interface IBoardProps {
  gridSize: { horizontal: number; vertical: number };
  cities: { [key in CityId]: City };
}

export const Board = ({ gridSize, cities }: IBoardProps) => {
  const [selectedCity, setSelectedCity] = useState<City>();

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <HeaderPanel />
      <div className="position-relative" style={{ width: "100%" }}>
        <CityCard selectedCity={selectedCity} />
      </div>
      <div className="position-relative">
        <GridCanvas cities={cities} />
        {/* Canvas for drawing lines to selected city's neighbor */}
        <GridCanvas selectedCity={selectedCity} />
        <Grid
          selectedCity={selectedCity}
          gridSize={gridSize}
          cities={cities}
          onCitySelect={(newSelectedCity) => setSelectedCity(newSelectedCity)}
        />
      </div>
      <FooterPanel />
    </div>
  );
};
