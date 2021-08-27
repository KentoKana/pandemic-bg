import { CityCard } from "../Card/CityCard";
import { CityId } from "../City";
import { cities } from "./Cities";

export const cityCards = Object.keys(cities).map((cityKey) => {
    const cityId = cityKey as CityId;
    return new CityCard(cityId);
})