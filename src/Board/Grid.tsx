import { observer } from "mobx-react-lite";
import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { useStores } from "../Shared/Stores";
import { Cell } from "./Cell";

export const Grid = observer(() => {
  const { gameStore } = useStores();

  return (
    <>
      <div>
        {/* Generate rows (i.e. Y axis)*/}
        {new Array(gameStore.gridSize.vertical).fill(null).map((_, vIndex) => {
          return (
            <div key={vIndex}>
              <div className="d-flex align-items-center">
                {/* Generate columns (i.e. X axis) */}
                {new Array(gameStore.gridSize.horizontal)
                  .fill(null)
                  .map((_, hIndex) => {
                    // Grid logic starts here
                    const currentCoords: ICoordinates = {
                      x: hIndex,
                      y: vIndex,
                    };
                    // Get City if it exists for the current cell
                    const cityForCell = City.getCityByCoordinates(
                      gameStore.cities,
                      currentCoords
                    );

                    return (
                      <div
                        key={hIndex}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Cell city={cityForCell} />
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
});
