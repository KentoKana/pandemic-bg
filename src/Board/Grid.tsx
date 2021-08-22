import { useEffect, useState } from "react";
import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { cities } from "../Shared/Data/Cities";
import { Cell } from "./Cell";

interface IGridProps {
  /**
   * Grid size of the board
   */
  selectedCity?: City;
  gridSize: { horizontal: number; vertical: number };
  onCitySelect: (selectedCity: City) => void;
}
export const Grid = ({ gridSize, onCitySelect }: IGridProps) => {
  const [citiesState, setCitiesState] = useState(cities);
  const [selectedCity, setSelectedCity] = useState<City>();

  // Send updated selected city state to parent
  useEffect(() => {
    if (selectedCity) {
      onCitySelect(citiesState[selectedCity.id]);
    }
  }, [citiesState, selectedCity, onCitySelect]);

  return (
    <>
      <div>
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
                        onCitySelect={(selectedCity) => {
                          setSelectedCity(selectedCity);
                        }}
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
                              newCityState.hasOutbreak = false;
                              return {
                                ...prevCitiesState,
                                [newCityState.id]: newCityState,
                                ...updatedNeighbors,
                              };
                            });
                          }
                        }}
                        city={cityForCell}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
