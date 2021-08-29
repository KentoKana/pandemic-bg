import { runInAction } from "mobx";
import { Player } from ".";
import { CityCard } from "../Card/CityCard";
import { CityId } from "../City";
import { Cities } from "../City/Cities";
import { EPlayerRoleType } from "../Enums/PlayerRoleType";

export class OperationsExpert extends Player {
    get role() {
        return EPlayerRoleType.OperationsExpert;
    }
    get canPlaceResearchStation() {
        return true;
    }
    placeResearchStation(currentCityId: CityId, cities: Cities): void {
        runInAction(() => {
            cities[currentCityId].hasResearchStation = true;
            return this.playerCards.splice(this.playerCards.findIndex((i) => {
                return (i instanceof CityCard) && i.cityId === currentCityId
            }), 1)
        })
    }

}


