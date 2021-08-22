import { City, CityId } from "../City";
import { Cities } from "../City/Cities";
import { GameStore } from "../Stores/GameStore";

export class GameUtils {
    /**
     * Updates outbreak counts based on each city having an "hasOutbreak" status of "true".
     * @param gameStore 
     * @returns 
     */
    static getOutbreakCount(gameStore: GameStore) {
        for (const key in gameStore.cities) {
            const cityKey = key as CityId;
            if (gameStore.cities[cityKey].hasOutbreak) {
                gameStore.outbreakCount += 1;
                gameStore.cities[cityKey].hasOutbreak = false;
            }
        }
        return gameStore.outbreakCount;
    }

    /**
     * Get cities with updated disease count after an outbreak
     *
     * @param currentCity 
     * @param allCities 
     * @param neighborsToUpdate 
     * @param cityIdsAlreadyLookedAt - 
     * @returns {{neighborKey: City }} Updated neighboring cities state after outbreak 
     */
    static getCityNeighborsAfterOutbreak(currentCity: City,
        allCities: Cities,
        neighborsToUpdate: { [key: string]: City },
        cityIdsAlreadyLookedAt: CityId[]) {
        // Keep track of cities that outbreaks have already been applied to
        cityIdsAlreadyLookedAt.push(currentCity.id);

        // Base case: If the city does not have an outbreak status and the overflow of outbreak disease count have not been applied to this city,
        // return the state of neighbors post outbreak
        if (
            !currentCity.hasOutbreak &&
            cityIdsAlreadyLookedAt.some(
                (cala) => !currentCity.neighboringCityIds.some((c) => c === cala)
            )
        )
            return neighborsToUpdate;

        // Iterate through each neighbors of the current city.
        // If neighboring cities have not already been traversed, apply the disease count overflow logic.
        currentCity.neighboringCityIds.forEach((neighborKey) => {
            neighborsToUpdate[neighborKey] = allCities[neighborKey];

            if (!cityIdsAlreadyLookedAt.some((cala) => cala === neighborKey)) {
                neighborsToUpdate[neighborKey].diseaseCount += 1;
                return this.getCityNeighborsAfterOutbreak(
                    neighborsToUpdate[neighborKey],
                    allCities,
                    neighborsToUpdate,
                    cityIdsAlreadyLookedAt
                );
            }
        });

        return neighborsToUpdate;
    }

}