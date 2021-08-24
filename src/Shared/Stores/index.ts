import React from "react";
import { cities } from "../Data/Cities";
import { Disease } from "../Disease";
import { EDiseaseType } from "../Enums/DiseaseType";
import { GameStore } from "./GameStore";

export interface IRootStore {
    gameStore: GameStore;
}

class RootStore implements IRootStore {
    gameStore: GameStore

    constructor() {
        this.gameStore = new GameStore(
            { horizontal: 30, vertical: 20 },
            cities,
            1,
            {
                [EDiseaseType.Red]: new Disease(EDiseaseType.Red, 0),
                [EDiseaseType.Blue]: new Disease(EDiseaseType.Blue, 0),
                [EDiseaseType.Yellow]: new Disease(EDiseaseType.Yellow, 0),
                [EDiseaseType.Black]: new Disease(EDiseaseType.Black, 0)
            })
    }

}
export const StoresContext = React.createContext<IRootStore>(new RootStore());
export const useStores = () => React.useContext(StoresContext);