import { ECardType } from "../Enums/CardType";
import { CityCard } from "./CityCard";
import { EpidemicCard } from "./EpidemicCard";
import { EventCard } from "./EventCard";

export interface ICard {
  cardType: ECardType;
}

export type PlayerCards = (EpidemicCard | CityCard | EventCard)[];
