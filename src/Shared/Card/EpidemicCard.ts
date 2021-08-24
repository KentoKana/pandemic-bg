import { ICard } from ".";
import { ECardType } from "../Enums/CardType";

export class EpidemicCard implements ICard {
    readonly cardType = ECardType.Epidemic;
}