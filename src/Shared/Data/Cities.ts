import { City } from "../City";
import { EDiseaseType } from "../Enums/DiseaseType";

export const cities: { [cityId: string]: City } = {
    city1: new City(
        "city1",
        10000,
        "Atlanta",
        { x: 10, y: 3 },
        ["city3"],
        EDiseaseType.Yellow,
        0
    ),
    city2: new City(
        "city2",
        1000,
        "Osaka",
        { x: 2, y: 4 },
        ["city3"],
        EDiseaseType.Red,
        0
    ),
    city3: new City(
        "city3",
        1012030,
        "Algerie",
        { x: 3, y: 8 },
        ["city1", "city2", "city4"],
        EDiseaseType.Blue,
        0
    ),
    city4: new City(
        "city4",
        10400,
        "Tokyo",
        { x: 5, y: 8 },
        ["city3", "city5"],
        EDiseaseType.Red,
        0
    ),
    city5: new City(
        "city5",
        10020,
        "Melbourne",
        { x: 3, y: 1 },
        ["city4", "city6"],
        EDiseaseType.Red,
        0
    ),
    city6: new City(
        "city6",
        10020,
        "Melbourne",
        { x: 16, y: 6 },
        ["city5", "city7"],
        EDiseaseType.Blue,
        0
    ),
    city7: new City(
        "city7",
        10020,
        "Melbourne",
        { x: 7, y: 9 },
        ["city6", "city8"],
        EDiseaseType.Yellow,
        0
    ),
    city8: new City(
        "city8",
        10020,
        "Melbourne",
        { x: 18, y: 4 },
        ["city7"],
        EDiseaseType.Black,
        0
    ),
};
