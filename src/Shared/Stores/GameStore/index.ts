import { Cities } from "../../City/Cities"
import { makeAutoObservable, runInAction } from "mobx"
import { City, CityId } from "../../City";
import { Disease } from "../../Disease";
import { EDiseaseType } from "../../Enums/DiseaseType";
import { InfectionCard } from "../../Card/InfectionCard";
import { PlayerCards } from "../../Card";
import { Players } from "../../Player";

export class GameStore {
    constructor(
        gridSize: { horizontal: number, vertical: number },
        cities: Cities,
        diseaseStates: { [key in EDiseaseType]: Disease },
        playerCards: PlayerCards,
        infectionCards: InfectionCard[],
    ) {
        makeAutoObservable(this);
        this.gridSize = gridSize;
        this._cities = cities;
        this._diseaseStates = diseaseStates;
        this._playerCards = playerCards;
        this._infectionCards = infectionCards;
    }
    readonly gridSize: { horizontal: number, vertical: number } = { horizontal: 30, vertical: 20 }
    private _cities: Cities;
    private _currentSelectedCity?: City;
    private _outbreakCount: number = 0;
    private _hasLostGame: boolean = false;
    private _infectionRate: number = 2;
    public numberOfEpidemicCardsDrawn = 0;
    private _diseaseStates: { [key in EDiseaseType]: Disease };
    private _playerCards: PlayerCards;
    private _infectionCards: InfectionCard[];
    private _players: Players = [];
    readonly numberOfPlayers: number = this._players.length;

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

    get outbreakCount() {
        return this._outbreakCount;
    }
    set outbreakCount(outbreakCount: number) {
        this._outbreakCount = outbreakCount;
    }

    get hasLostGame(): boolean {
        if (this._outbreakCount > 7 || this._playerCards.length === 0) {
            runInAction(() => {
                this._hasLostGame = true;
            })
        }
        if (this._playerCards.length === 0) {
            runInAction(() => {
                this._hasLostGame = true;
            })
        }
        return this._hasLostGame;
    }

    get infectionRate(): number {
        runInAction(() => {
            for (let i = 0; i < this.numberOfEpidemicCardsDrawn; i++) {
                if (i <= 2) {
                    this._infectionRate = 2
                } else if (i <= 4) {
                    this._infectionRate = 3
                } else {
                    this._infectionRate = 4
                }
            }
        })
        return this._infectionRate;
    }

    get diseaseStates() {
        for (const diseaseKey in this._diseaseStates) {
            const diseaseType = parseInt(diseaseKey) as EDiseaseType;
            runInAction(() => {
                this._diseaseStates[diseaseType].diseaseCount = 0;
            })
        }
        for (const key in this.cities) {
            const cityKey = key as CityId;
            for (const diseaseKey in this._diseaseStates) {
                const diseaseType = parseInt(diseaseKey) as EDiseaseType;
                if (this._cities[cityKey].diseaseType === diseaseType) {
                    runInAction(() => {
                        this._diseaseStates[diseaseType].diseaseCount +=
                            this._cities[cityKey].diseaseCount;
                    })
                }
            }
        }
        return this._diseaseStates;
    }

    get playerCards() {
        return this._playerCards;
    }
    set playerCards(newPlayerCards: PlayerCards) {
        runInAction(() => {
            this._playerCards = newPlayerCards;
        })
    }

    get infectionCards() {
        return this._infectionCards;
    }
    set infectionCards(newInfectionCards: InfectionCard[]) {
        runInAction(() => {
            this._infectionCards = newInfectionCards;
        })
    }

    get players() {
        return this._players;
    }
    set players(newPlayers: Players) {
        runInAction(() => {
            this._players = newPlayers;
        })
    }

    dealCardsToPlayers(numberOfCardsToDeal: number) {
        runInAction(() => {
            this._players.forEach((player) => {
                player.playerCards = this.playerCards.splice(0, numberOfCardsToDeal)
            })
        })
    }
}