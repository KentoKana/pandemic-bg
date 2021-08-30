import { makeAutoObservable, runInAction } from "mobx";
import { Player } from "../../Player";

export class UIStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _selectedPlayer: Player | undefined = undefined;

    get selectedPlayer(): Player | undefined {
        return this._selectedPlayer;
    }
    set selectedPlayer(newSelectedPlayer: Player | undefined) {
        runInAction(() => {
            this._selectedPlayer = newSelectedPlayer;
        })
    }
}