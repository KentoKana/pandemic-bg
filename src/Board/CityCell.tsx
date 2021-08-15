import { useState } from "react";
import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { EDiseaseType } from "../Shared/Enums/DiseaseType";

interface ICityCellProps {
  coorditnates: ICoordinates;
}

export const CityCell = ({ coorditnates }: ICityCellProps) => {
  const [city, setCity] = useState<City | undefined>(
    City.getCityByCoordinates(cities, coorditnates)
  );

  return (
    <div>
      {city && (
        <>
          <div>{city.name}</div>
          <div>{city.population}</div>
          <div>{city.diseaseType}</div>
          <div>{city.diseaseCount}</div>
        </>
      )}
      <span className="px-1">
        ({coorditnates.y},{coorditnates.x})
      </span>
      {city && (
        <button
          onClick={() => {
            setCity((prevCityState) => {
              const clone = prevCityState?.clone();
              if (clone) {
                clone.diseaseCount += 3;
              }
              return clone;
            });
          }}
        >
          + Disease Count
        </button>
      )}
    </div>
  );
};

const cities: City[] = [
  new City(
    "city1",
    10000,
    "Atlanta",
    { x: 10, y: 3 },
    ["city2"],
    EDiseaseType.Yellow
  ),
  new City("city2", 1000, "Osaka", { x: 2, y: 4 }, ["city2"], EDiseaseType.Red),
];
