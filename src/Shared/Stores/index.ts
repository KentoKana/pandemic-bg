import React from "react";
import { cities } from "../Data/Cities";
import { GameStore } from "./GameStore";

export interface IRootStore {
    gameStore: GameStore;
}

class RootStore implements IRootStore {
    gameStore: GameStore

    constructor() {
        this.gameStore = new GameStore({ horizontal: 30, vertical: 20 }, cities, 1)
    }

}
export const StoresContext = React.createContext<IRootStore>(new RootStore());
export const useStores = () => React.useContext(StoresContext);