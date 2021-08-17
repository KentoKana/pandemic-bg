import { useState } from "react";
import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { Cell } from "./Cell";

interface IGridProps {
  /**
   * Grid size of the board
   */
  gridSize: { horizontal: number; vertical: number };
  cities: { [cityId: string]: City };
}
export const Grid = ({ gridSize, cities }: IGridProps) => {
  const [citiesState, setCitiesState] = useState(cities);

  return (
    <>
      {/* Generate rows (i.e. Y axis)*/}
      {new Array(gridSize.vertical).fill(null).map((_, vIndex) => {
        return (
          <div key={vIndex}>
            <div className="d-flex my-2 align-items-center">
              {/* Generate columns (i.e. X axis) */}
              {new Array(gridSize.horizontal).fill(null).map((_, hIndex) => {
                // Grid logic starts here
                const currentCoords: ICoordinates = { x: hIndex, y: vIndex };

                // Get City if it exists for the current cell
                const cityForCell = City.getCityByCoordinates(
                  citiesState,
                  currentCoords
                );

                return (
                  <span key={hIndex} className="px-1">
                    <Cell
                      onCellUpdate={(newCityState) => {
                        if (newCityState) {
                          // Update states of all cities
                          const updatedNeighbors = applyOutbreakRecursively(
                            newCityState,
                            citiesState,
                            {},
                            []
                          );
                          // let updatedNeighbors: { [key: string]: City } = {};
                          // if (newCityState.hasOutbreak) {
                          //   newCityState.neighboringCityIds.forEach(
                          //     (neighborKey) => {
                          //       updatedNeighbors[neighborKey] =
                          //         citiesState[neighborKey];
                          //       updatedNeighbors[neighborKey].diseaseCount += 1;

                          //       if (updatedNeighbors[neighborKey].hasOutbreak) {
                          //         console.log(updatedNeighbors[neighborKey]);

                          //         updatedNeighbors[
                          //           neighborKey
                          //         ].neighboringCityIds.forEach((key) => {
                          //           updatedNeighbors[key] = citiesState[key];
                          //           updatedNeighbors[key].diseaseCount += 1;
                          //         });
                          //       }
                          //     }
                          //   );
                          // }
                          setCitiesState((prevCitiesState) => {
                            return {
                              ...prevCitiesState,
                              [newCityState.id]: newCityState,
                              ...updatedNeighbors,
                            };
                          });
                        }
                      }}
                      city={cityForCell}
                      coorditnates={currentCoords}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

const applyOutbreakRecursively = (
  currentCity: City,
  cities: {
    [key: string]: City;
  },
  updatedNeighbors: { [key: string]: City },
  citiesAlreadyLookedAt: string[]
) => {
  citiesAlreadyLookedAt.push(currentCity.id);

  if (
    !currentCity.hasOutbreak &&
    citiesAlreadyLookedAt.some(
      (cala) => !currentCity.neighboringCityIds.some((c) => c === cala)
    )
  )
    return updatedNeighbors;

  currentCity.neighboringCityIds.forEach((neighborKey) => {
    updatedNeighbors[neighborKey] = cities[neighborKey];

    if (!citiesAlreadyLookedAt.some((cala) => cala === neighborKey)) {
      updatedNeighbors[neighborKey].diseaseCount += 1;
      return applyOutbreakRecursively(
        updatedNeighbors[neighborKey],
        cities,
        updatedNeighbors,
        citiesAlreadyLookedAt
      );
    }
  });
};
