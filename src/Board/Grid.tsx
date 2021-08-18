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
            <div className="d-flex align-items-center">
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
                  <div
                    key={hIndex}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Cell
                      onCellUpdate={(newCityState) => {
                        if (newCityState) {
                          // Update states of all cities
                          const updatedNeighbors =
                            City.getNeighborsAfterOutbreak(
                              newCityState,
                              citiesState,
                              {},
                              []
                            );
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
                      coordinates={currentCoords}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
