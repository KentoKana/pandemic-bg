import { City, CityId } from "../City";
import { EDiseaseType } from "../Enums/DiseaseType";

export const cities: { [key in CityId]: City } = {
    atlanta: new City(
        "atlanta",
        10000,
        "Atlanta",
        { x: 4, y: 4 },
        ["chicago"],
        EDiseaseType.Blue,
        0
    ),
    chicago: new City(
        "chicago",
        1000,
        "Chicago",
        { x: 3, y: 2 },
        ["sanfrancisco", "atlanta", "montreal"],
        EDiseaseType.Blue,
        0
    ),
    sanfrancisco: new City(
        "sanfrancisco",
        1012030,
        "San Francisco",
        { x: 0, y: 2 },
        ["chicago", "losangeles"],
        EDiseaseType.Blue,
        0
    ),
    losangeles: new City(
        "losangeles",
        10400,
        "Los Angeles",
        { x: 0, y: 5 },
        ["chicago", "sanfrancisco", "mexicocity"],
        EDiseaseType.Yellow,
        0
    ),
    mexicocity: new City(
        "mexicocity",
        10020,
        "Mexico City",
        { x: 3, y: 6 },
        ["chicago", "losangeles", "miami"],
        EDiseaseType.Yellow,
        0
    ),
    montreal: new City(
        "montreal",
        10020,
        "Montreal",
        { x: 5, y: 2 },
        ["chicago", "newyork"],
        EDiseaseType.Blue,
        0
    ),
    newyork: new City(
        "newyork",
        10020,
        "New York",
        { x: 7, y: 3 },
        ["montreal", "washington", "madrid", "london"],
        EDiseaseType.Blue,
        0
    ),
    washington: new City(
        "washington",
        10020,
        "Washington",
        { x: 6, y: 4 },
        ["montreal", "newyork"],
        EDiseaseType.Blue,
        0
    ),
    london: new City(
        "london",
        129321,
        "London",
        { x: 10, y: 1 },
        ["newyork", "madrid"],
        EDiseaseType.Blue,
        0
    ),
    madrid: new City(
        "madrid",
        129321,
        "Madrid",
        { x: 10, y: 4 },
        ["london", "newyork"],
        EDiseaseType.Blue,
        0
    ),
    paris: new City(
        "paris",
        129321,
        "Paris",
        { x: 11, y: 3 },
        ["london", "madrid", "essen"],
        EDiseaseType.Blue,
        0
    ),
    essen: new City(
        "essen",
        129321,
        "Essen",
        { x: 11, y: 2 },
        ["london", "paris", "milan", "stpetersburg"],
        EDiseaseType.Blue,
        0
    ),
    stpetersburg: new City(
        "stpetersburg",
        129321,
        "St. Petersburg",
        { x: 14, y: 0 },
        ["essen", "moscow", "istanbul"],
        EDiseaseType.Blue,
        0
    ),
    milan: new City(
        "milan",
        129321,
        "Milan",
        { x: 12, y: 2 },
        ["essen", "paris", "istanbul"],
        EDiseaseType.Blue,
        0
    ),
    istanbul: new City(
        "istanbul",
        129321,
        "Istanbul",
        { x: 13, y: 4 },
        ["milan", "algiers", "cairo", "baghdad", "moscow", "stpetersburg"],
        EDiseaseType.Black,
        0
    ),
    algiers: new City(
        "algiers",
        129321,
        "Algiers",
        { x: 11, y: 5 },
        ["essen", "paris", "istanbul"],
        EDiseaseType.Black,
        0
    ),
    moscow: new City(
        "moscow",
        129321,
        "Moscow",
        { x: 16, y: 2 },
        ["stpetersburg", "istanbul", "tehran"],
        EDiseaseType.Black,
        0
    ),
    baghdad: new City(
        "baghdad",
        129321,
        "Baghdad",
        { x: 16, y: 5 },
        ["istanbul", "riyadh", "cairo", "tehran", "karachi"],
        EDiseaseType.Black,
        0
    ),
    tehran: new City(
        "tehran",
        129321,
        "Tehran",
        { x: 18, y: 4 },
        ["moscow", "karachi", "delhi", "baghdad"],
        EDiseaseType.Black,
        0
    ),
    cairo: new City(
        "cairo",
        129321,
        "Cairo",
        { x: 13, y: 6 },
        ["algiers", "istanbul", "baghdad", "riyadh", "khartoum"],
        EDiseaseType.Black,
        0
    ),
    riyadh: new City(
        "riyadh",
        129321,
        "Riyadh",
        { x: 16, y: 8 },
        ["cairo", "baghdad", "karachi"],
        EDiseaseType.Black,
        0
    ),
    karachi: new City(
        "karachi",
        129321,
        "Karachi",
        { x: 18, y: 8 },
        ["baghdad", "tehran", "delhi", "riyadh", "mumbai"],
        EDiseaseType.Black,
        0
    ),
    delhi: new City(
        "delhi",
        129321,
        "Delhi",
        { x: 20, y: 7 },
        ["tehran", "karachi", "mumbai", "chennai", "kolkata"],
        EDiseaseType.Black,
        0
    ),
    mumbai: new City(
        "mumbai",
        129321,
        "Mumbai",
        { x: 16, y: 10 },
        ["karachi", "chennai", "delhi"],
        EDiseaseType.Black,
        0
    ),
    chennai: new City(
        "chennai",
        129321,
        "Chennai",
        { x: 18, y: 12 },
        ["mumbai", "delhi", "kolkata", "bangkok", "jakarta"],
        EDiseaseType.Black,
        0
    ),
    kolkata: new City(
        "kolkata",
        129321,
        "Kolkata",
        { x: 22, y: 8 },
        ["delhi", "chennai", "bangkok", "hongkong"],
        EDiseaseType.Black,
        0
    ),
    bangkok: new City(
        "bangkok",
        129321,
        "Bangkok",
        { x: 22, y: 10 },
        ["kolkata", "chennai", "hongkong", "jakarta", "hochiminhcity"],
        EDiseaseType.Red,
        0
    ),
    jakarta: new City(
        "jakarta",
        129321,
        "Jakarta",
        { x: 22, y: 14 },
        ["bangkok", "chennai", "hochiminhcity"],
        EDiseaseType.Red,
        0
    ),
    hochiminhcity: new City(
        "hochiminhcity",
        129321,
        "Ho Chi Minh City",
        { x: 23, y: 12 },
        ["bangkok", "chennai", "hochiminhcity"],
        EDiseaseType.Red,
        0
    ),
    hongkong: new City(
        "hongkong",
        129321,
        "Hong Kong",
        { x: 24, y: 9 },
        ["bangkok", "kolkata", "hochiminhcity", "shanghai", "taipei", "manila"],
        EDiseaseType.Red,
        0
    ),
    shanghai: new City(
        "shanghai",
        129321,
        "Shanghai",
        { x: 24, y: 7 },
        ["beijing", "seoul", "tokyo", "taipei"],
        EDiseaseType.Red,
        0
    ),
    beijing: new City(
        "beijing",
        129321,
        "Hong Kong",
        { x: 24, y: 5 },
        ["beijing", "seoul", "tokyo", "taipei"],
        EDiseaseType.Red,
        0
    ),
    taipei: new City(
        "taipei",
        129321,
        "Taipei",
        { x: 26, y: 9 },
        ["hongkong", "osaka", "manila", "shanghai"],
        EDiseaseType.Red,
        0
    ),
    seoul: new City(
        "seoul",
        129321,
        "Seoul",
        { x: 26, y: 5 },
        ["beijing", "tokyo", "shanghai"],
        EDiseaseType.Red,
        0
    ),
    tokyo: new City(
        "tokyo",
        129321,
        "Tokyo",
        { x: 28, y: 6 },
        ["seoul", "osaka", "shanghai", "sanfrancisco"],
        EDiseaseType.Red,
        0
    ),
    osaka: new City(
        "osaka",
        129321,
        "Osaka",
        { x: 28, y: 8 },
        ["tokyo", "taipei"],
        EDiseaseType.Red,
        0
    ),
    manila: new City(
        "manila",
        129321,
        "Manila",
        { x: 26, y: 12 },
        ["taipei", "sanfrancisco", "sydney", "hochiminhcity", "hongkong"],
        EDiseaseType.Red,
        0
    ),
    sydney: new City(
        "sydney",
        129321,
        "Sydney",
        { x: 27, y: 18 },
        ["jakarta", "manila", "losangeles"],
        EDiseaseType.Red,
        0
    ),
    miami: new City(
        "miami",
        1020,
        "Miami",
        { x: 5, y: 6 },
        ["atlanta", "washington", "bogota", "mexicocity"],
        EDiseaseType.Yellow,
        0
    ),
    bogota: new City(
        "bogota",
        1020,
        "Bogota",
        { x: 5, y: 8 },
        ["miami", "mexicocity", "lima", "buenosaires", "saopaulo"],
        EDiseaseType.Yellow,
        0
    ),
    lima: new City(
        "lima",
        1020,
        "Lima",
        { x: 4, y: 11 },
        ["mexicocity", "bogota", "santiago"],
        EDiseaseType.Yellow,
        0
    ),
    santiago: new City(
        "santiago",
        1020,
        "Santiago",
        { x: 4, y: 14 },
        ["lima"],
        EDiseaseType.Yellow,
        0
    ),
    buenosaires: new City(
        "buenosaires",
        1020,
        "Buenos Aires",
        { x: 6, y: 14 },
        ["bogota", "saopaulo"],
        EDiseaseType.Yellow,
        0
    ),
    saopaulo: new City(
        "saopaulo",
        1020,
        "Sao Paulo",
        { x: 7, y: 11 },
        ["buenosaires", "bogota", "lagos"],
        EDiseaseType.Yellow,
        0
    ),
    lagos: new City(
        "lagos",
        1020,
        "Lagos",
        { x: 10, y: 12 },
        ["kinshasa", "saopaulo", "khartoum"],
        EDiseaseType.Yellow,
        0
    ),
    khartoum: new City(
        "khartoum",
        1020,
        "Khartoum",
        { x: 13, y: 12 },
        ["lagos", "cairo", "johannesburg", "kinshasa"],
        EDiseaseType.Yellow,
        0
    ),
    kinshasa: new City(
        "kinshasa",
        1020,
        "Kinshasa",
        { x: 12, y: 12 },
        ["lagos", "khartoum", "johannesburg"],
        EDiseaseType.Yellow,
        0
    ),
    johannesburg: new City(
        "johannesburg",
        1020,
        "Johannesburg",
        { x: 10, y: 15 },
        ["kinshasa", "khartoum"],
        EDiseaseType.Yellow,
        0
    ),
};
