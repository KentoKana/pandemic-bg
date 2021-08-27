import { ICard } from ".";
import { CityId } from "../City";
import { ECardType } from "../Enums/CardType";

export class InfectionCard implements ICard {
    constructor(cityId: CityId) {
        this.cityId = cityId;
    }
    readonly cardType = ECardType.Infection
    readonly cityId;
}