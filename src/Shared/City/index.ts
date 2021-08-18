import { ICoordinates } from "../Coordinates";
import { EDiseaseType } from "../Enums/DiseaseType";

/**
 * City class.
 * Creates an instance of a city. 
 */
export class City {
    constructor(
        id: string,
        population: number,
        name: string,
        coordinates: ICoordinates,
        neighborCityIds: string[],
        diseaseType: EDiseaseType,
        diseaseCount: number,
    ) {
        this._id = id;
        this._population = population;
        this._name = name;
        this._coordinates = coordinates;
        this._neighborCityIds = neighborCityIds;
        this._diseaseType = diseaseType;
        this._diseaseCount = diseaseCount;
    }
    // Properties
    private _id: string;
    private _name: string;
    private _population: number = 0;
    private _coordinates: ICoordinates;
    private _neighborCityIds: string[];
    private _diseaseType: EDiseaseType;
    private _diseaseCount: number = 0;
    private _hasOutbreak: boolean = false;

    // Methods 
    /**
     * Id
     */
    get id(): string {
        return this._id
    }

    /**
     * Name
     */
    get name(): string {
        return this._name;
    }

    /**
     * Population
     */
    get population(): number {
        return this._population
    }

    /**
     * Coordinates
     */
    get coordinates(): ICoordinates {
        return this._coordinates
    }

    /**
     * Neighboring City Ids
     */
    get neighboringCityIds(): string[] {
        return this._neighborCityIds;
    }

    /**
     * Disease Type
     */
    get diseaseType(): EDiseaseType {
        return this._diseaseType;
    }

    /**
     * Disease Count. Minimum value of 0, Maximum value of 3
     */
    get diseaseCount(): number {
        return this._diseaseCount
    }
    set diseaseCount(newDiseaseCount: number) {
        if (newDiseaseCount > 3) {
            this.hasOutbreak = true;
        } else {
            this.hasOutbreak = false;
        }
        if (newDiseaseCount <= 0) {
            newDiseaseCount = 0;
        } else if (newDiseaseCount >= 3) {
            newDiseaseCount = 3;
        }
        this._diseaseCount = newDiseaseCount;
    }

    /**
     * Has Outbreak
     */
    get hasOutbreak(): boolean {
        return this._hasOutbreak;
    }
    set hasOutbreak(newOutbreakState) {
        this._hasOutbreak = newOutbreakState
    }

    /**
     * Method to find city by coordinates.
     * @param {City[]} cities 
     * @param {ICoordinates} coordinates 
     * @returns {City} City
     */
    static getCityByCoordinates(cities: { [cityId: string]: City }, coordinates: ICoordinates) {
        const cityKeys = Object.keys(cities);
        const citiesArray = cityKeys.map((key) => {
            return cities[key]
        })
        return citiesArray.find(
            (city) =>
                city.coordinates.x === coordinates.x &&
                city.coordinates.y === coordinates.y
        );
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
    static getNeighborsAfterOutbreak(currentCity: City,
        allCities: {
            [key: string]: City;
        },
        neighborsToUpdate: { [key: string]: City },
        cityIdsAlreadyLookedAt: string[]) {
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
                return this.getNeighborsAfterOutbreak(
                    neighborsToUpdate[neighborKey],
                    allCities,
                    neighborsToUpdate,
                    cityIdsAlreadyLookedAt
                );
            }
        });
        return neighborsToUpdate;
    }

    /**
     * Returns the copy of the current class instance
     * @returns {City} Cloned object of the current class instance
     */
    public clone(): City {
        return new City(this.id, this.population, this.name, this.coordinates, this.neighboringCityIds, this.diseaseType, this.diseaseCount)
    }
}