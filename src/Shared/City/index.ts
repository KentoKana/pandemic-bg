import { ICoordinates } from "../Coordinates";
import { EDiseaseType } from "../Enums/DiseaseType";

export class City {
    constructor(
        id: string,
        population: number,
        name: string,
        coordinates: ICoordinates,
        neighborCityIds: string[],
        diseaseType: EDiseaseType,
        diseaseCount: number,
        hasOutbreak: boolean
    ) {
        this._id = id;
        this._population = population;
        this._name = name;
        this._coordinates = coordinates;
        this._neighborCityIds = neighborCityIds;
        this._diseaseType = diseaseType;
        this._diseaseCount = diseaseCount;
        this._hasOutbreak = hasOutbreak;
    }
    // Properties
    private _id: string;
    private _name: string;
    private _population: number = 0;
    private _coordinates: ICoordinates;
    private _neighborCityIds: string[];
    private _diseaseType: EDiseaseType;
    private _diseaseCount: number;
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
     * Get cities with updated disease count after outbreak
     * @param cities 
     * @param neighborCityIds 
     * @returns {{ [cityId: string]: City }}
     */
    static getNeighborsAfterOutbreak(cities: { [cityId: string]: City }, neighborCityIds: string[]) {
        // let updatedCities: { [cityId: string]: City } = {};
        // // Populate updatedCities with cities to apply outbreaks for
        // neighborCityIds.forEach((key) => {
        //     let neighborToApplyOutbreak = cities[key].clone();
        //     neighborToApplyOutbreak.diseaseCount += 1;
        //     updatedCities[key] = neighborToApplyOutbreak;
        //     if (neighborToApplyOutbreak.hasOutbreak) {
        //         return this.getNeighborsAfterOutbreak(cities, neighborToApplyOutbreak.neighboringCityIds.filter((ncid) => {
        //             return ncid !== key
        //         }))
        //     }
        // })
        // return {
        //     ...cities,
        //     ...updatedCities
        // }
    }

    /**
     * Returns the copy of the current class instance
     * @returns {City} Cloned object of the current class instance
     */
    public clone(): City {
        return new City(this.id, this.population, this.name, this.coordinates, this.neighboringCityIds, this.diseaseType, this.diseaseCount, this.hasOutbreak)
    }
}