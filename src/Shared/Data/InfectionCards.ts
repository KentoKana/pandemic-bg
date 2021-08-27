import { InfectionCard } from "../Card/InfectionCard";
import { CityId } from "../City";
import { cities } from "./Cities";

export const infectionCards = Object.keys(cities).map((cityKey) => {
    const cityId = cityKey as CityId;
    return new InfectionCard(cityId);
})