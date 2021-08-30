import React from "react";
import { CityCard } from "../Card/CityCard";
import { EpidemicCard } from "../Card/EpidemicCard";
import { EventCard } from "../Card/EventCard";
import { InfectionCard } from "../Card/InfectionCard";
import { cities } from "../Data/Cities";
import { cityCards } from "../Data/CityCards";
import { generateEpidemicCards } from "../Data/EpidemicCards";
import { eventCards } from "../Data/EventCards";
import { infectionCards } from "../Data/InfectionCards";
import { Disease } from "../Disease";
import { EDiseaseType } from "../Enums/DiseaseType";
import { GameUtils } from "../Game/GameUtils";
import { GameStore } from "./GameStore";

export interface IRootStore {
    gameStore: GameStore;
}


class RootStore implements IRootStore {
    gameStore: GameStore;

    constructor() {
        this.gameStore = new GameStore(
            { horizontal: 30, vertical: 20 },
            cities,
            {
                [EDiseaseType.Red]: new Disease(EDiseaseType.Red, 0),
                [EDiseaseType.Blue]: new Disease(EDiseaseType.Blue, 0),
                [EDiseaseType.Yellow]: new Disease(EDiseaseType.Yellow, 0),
                [EDiseaseType.Black]: new Disease(EDiseaseType.Black, 0)
            },
            GameUtils.shuffleArray<(CityCard | EpidemicCard | EventCard)>([...cityCards, ...generateEpidemicCards(4), ...eventCards]),
            GameUtils.shuffleArray<InfectionCard>([...infectionCards]))

    }



}
export const StoresContext = React.createContext<IRootStore>(new RootStore());
export const useStores = () => React.useContext(StoresContext);