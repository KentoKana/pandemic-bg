import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { City } from "../Shared/City";
import { cities } from "../Shared/Data/Cities";
import { useStores } from "../Shared/Stores";
import { FooterPanel } from "./FooterPanel";
import { Grid } from "./Grid";
import { GridCanvas } from "./GridCanvas";
import { HeaderPanel } from "./HeaderPanel";

export const Board = observer(() => {
  const { gameStore } = useStores();

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <HeaderPanel />
      <div className="position-relative">
        <GridCanvas cities={cities} />
        {/* Canvas for drawing lines to selected city's neighbor */}
        <GridCanvas selectedCity={gameStore.currentSelectedCity} />
        <Grid />
      </div>
      <FooterPanel />
    </div>
  );
});
