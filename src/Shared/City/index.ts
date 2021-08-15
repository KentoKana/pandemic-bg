import { ICoordinates } from "../Coordinates";
import { EDiseaseType } from "../Enums/DiseaseType";

export class City {
    constructor(
        id: string,
        population: number,
        name: string,
        coordinates: ICoordinates,
        neighboringCitiIds: string[],
        diseaseType: EDiseaseType
    ) {
        this._id = id;
        this._population = population;
        this._name = name;
        this._coordinates = coordinates;
        this._neighboringCityIds = neighboringCitiIds;
        this._diseaseType = diseaseType;
    }
    // Properties
    private _id: string;
    private _name: string;
    private _population: number = 0;
    private _coordinates: ICoordinates;
    private _neighboringCityIds: string[];
    private _diseaseType: EDiseaseType;
    private _diseaseCount: number = 0;

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
        return this._neighboringCityIds;
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
        if (newDiseaseCount <= 0) {
            newDiseaseCount = 0;
        }
        if (newDiseaseCount >= 3) {
            newDiseaseCount = 3;
        }
        this._diseaseCount = newDiseaseCount;
    }

    /**
     * Method to find city by coordinates.
     * @param {City[]} cities 
     * @param {ICoordinates} coordinates 
     * @returns {City} City
     */
    static getCityByCoordinates(cities: City[], coordinates: ICoordinates) {
        return cities.find(
            (city) =>
                city.coordinates.x === coordinates.x &&
                city.coordinates.y === coordinates.y
        );
    }

    /**
     * Returns the copy of the current class instance
     * @returns {City} Cloned object of the current class instance
     */
    public clone(): City {
        return new City(this.id, this.population, this.name, this.coordinates, this.neighboringCityIds, this.diseaseType)
    }

}