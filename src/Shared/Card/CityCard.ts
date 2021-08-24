import { ICard } from ".";
import { CityId } from "../City";
import { ECardType } from "../Enums/CardType";

export class CityCard implements ICard {
    constructor(cityId: CityId) {
        this.cityId = cityId;
    }
    readonly cardType = ECardType.City;
    public cityId: CityId;
}