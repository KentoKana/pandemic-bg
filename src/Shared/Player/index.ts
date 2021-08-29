import { runInAction } from "mobx";
import { PlayerCards } from "../Card";
import { CityCard } from "../Card/CityCard";
import { City, CityId } from "../City";
import { Cities } from "../City/Cities";
import { cities } from "../Data/Cities";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";
interface IPlayer {
    role: EPlayerRoleType;
    canPlaceResearchStation: boolean;
    playerCards: PlayerCards
}
export class Player implements IPlayer {

    get role(): EPlayerRoleType {
        return this.role;
    }
    private _playerCards: PlayerCards = [];
    private _currentCity: City = cities.atlanta;

    get canPlaceResearchStation() {
        if (this.playerCards.some((card) => card instanceof CityCard && card.cityId === this._currentCity.id)) {
            return true;
        }
        return false;
    }

    /**
     * If user has a city card that matches the city that they are currently on, remove that card from the player's cards, and return it
     * @param currentCityId 
     */
    placeResearchStation(currentCityId: CityId, cities: Cities): CityCard | void {
        if (this.canPlaceResearchStation) {
            runInAction(() => {
                cities[currentCityId].hasResearchStation = true;
                return this._playerCards.splice(this._playerCards.findIndex((i) => {
                    return (i instanceof CityCard) && i.cityId === currentCityId
                }), 1)
            })
        }
    }

    get playerCards() {
        return this._playerCards;
    }
    set playerCards(playerCards: PlayerCards) {
        runInAction(() => {
            this._playerCards = playerCards;
        })
    }

    get currentCity() {
        return this._currentCity;
    }
    set currentCity(newCity: City) {
        runInAction(() => { this._currentCity = newCity; });
    }
}
