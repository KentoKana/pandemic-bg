import { useEffect, useRef, useState } from "react";
import { City, CityId } from "../Shared/City";
import { CityUtils } from "../Shared/City/CityUtils";
import { ICoordinates } from "../Shared/Coordinates";
import { Cell } from "./Cell";

interface IGridProps {
  /**
   * Grid size of the board
   */
  gridSize: { horizontal: number; vertical: number };
  cities: { [key in CityId]: City };
}
export const Grid = ({ gridSize, cities }: IGridProps) => {
  const [citiesState, setCitiesState] = useState(cities);
  const [selectedCity, setSelectedCity] = useState<City>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        if (selectedCity) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.beginPath();
          ctx.shadowBlur = 2.5;
          ctx.shadowColor = "purple";
          CityUtils.connectCityAndNeighborsWithLines(ctx, selectedCity);
        }
      }
    }
  }, [cities, selectedCity]);

  return (
    <div>
      {/* Canvas for drawing lines to selected city's neighbor */}
      <canvas
        ref={canvasRef}
        id="canvas"
        width={900}
        height={600}
        style={{
          zIndex: -1,
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
        }}
      ></canvas>
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
  );
};
