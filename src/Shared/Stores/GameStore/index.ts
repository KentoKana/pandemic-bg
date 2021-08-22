import { Cities } from "../../City/Cities"
import { makeAutoObservable, runInAction } from "mobx"
import { City } from "../../City";

export class GameStore {
    constructor(
        gridSize: { horizontal: number, vertical: number },
        cities: Cities,
        numberOfPlayers: number,
    ) {
        makeAutoObservable(this);
        this.gridSize = gridSize;
        this._cities = cities;
        this.numberOfPlayers = numberOfPlayers;
    }
    public gridSize: { horizontal: number, vertical: number } = { horizontal: 30, vertical: 20 }
    public _cities: Cities;
    private _currentSelectedCity?: City;
    private _currentOutbreakCount: number = 0;
    private _hasLostGame: boolean = false;
    private _infectionRate: number = 2;
    public numberOfEpidemicCardsDrawn = 0;
    public numberOfPlayers = 1;

    get cities() {
        return this._cities;
    }
    set cities(newCitiesState: Cities) {
        runInAction(() => {
            this._cities = newCitiesState;
        })
    }

    get currentSelectedCity(): City | undefined {
        return this._currentSelectedCity;
    }
    set currentSelectedCity(newSelectedCity: City | undefined) {
        runInAction(() => {
            this._currentSelectedCity = newSelectedCity;
        })
    }

    get hasLostGame(): boolean {
        if (this._currentOutbreakCount > 7) {
            this._hasLostGame = true;
        }
        return this._hasLostGame;
    }

    get infectionRate(): number {
        for (let i = 0; i < this.numberOfEpidemicCardsDrawn; i++) {
            if (i <= 2) {
                this._infectionRate = 2
            } else if (i <= 4) {
                this._infectionRate = 3
            } else {
                this._infectionRate = 4
            }
        }
        return this._infectionRate;
    }
}