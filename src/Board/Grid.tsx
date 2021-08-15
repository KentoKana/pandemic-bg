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
                          // Inititialize empty object to populate it with cities to update
                          let updatedCities: { [cityId: string]: City } = {};

                          if (newCityState.hasOutbreak) {
                            newCityState?.neighboringCityIds.forEach((key) => {
                              let clone = citiesState[key].clone();
                              clone.diseaseCount += 1;
                              clone.hasOutbreak = false;
                              updatedCities[key] = clone;
                            });
                          }
                          // Update states of all cities
                          setCitiesState((prev) => {
                            return {
                              ...prev,
                              ...updatedCities,
                              [newCityState.id]: newCityState,
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
