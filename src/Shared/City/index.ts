import { ICoordinates } from "../Coordinates";
import { EDiseaseType } from "../Enums/DiseaseType";

/**
 * City class.
 * Creates an instance of a city. 
 */
export class City {
    constructor(
        id: CityId,
        population: number,
        name: string,
        coordinates: ICoordinates,
        neighborCityIds: CityId[],
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
    private _id: CityId;
    private _name: string;
    private _population: number = 0;
    private _coordinates: ICoordinates;
    private _neighborCityIds: CityId[];
    private _diseaseType: EDiseaseType;
    private _diseaseCount: number = 0;
    private _hasOutbreak: boolean = false;
    public hasResearchStation: boolean = false;

    // Methods 
    /**
     * Id
     */
    get id(): CityId {
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
    get neighboringCityIds(): CityId[] {
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
     * Returns the copy of the current class instance
     * @returns {City} Cloned object of the current class instance
     */
    public clone(): City {
        return new City(this.id, this.population, this.name, this.coordinates, this.neighboringCityIds, this.diseaseType, this.diseaseCount)
    }
}

export type CityId = "sanfrancisco" | "losangeles" | "chicago" | "atlanta" | "mexicocity" | "lima" | "santiago" | "atlanta" | "miami" | "bogota" | "buenosaires" | "saopaulo" | "montreal" | "newyork" | "washington" | "saopaulo" | "madrid" | "london" | "paris" | "lagos" | "algiers" | "kinshasa" | "essen" | "milan" | "stpetersburg" | "istanbul" | "cairo" | "khartoum" | "johannesburg" | "moscow" | "baghdad" | "riyadh" | "tehran" | "karachi" | "mumbai" | "delhi" | "chennai" | "kolkata" | "bangkok" | "jakarta" | "beijing" | "shanghai" | "hongkong" | "hochiminhcity" | "seoul" | "taipei" | "manila" | "tokyo" | "osaka" | "sydney"
