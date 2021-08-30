import { observer } from "mobx-react-lite";
import { City } from "../Shared/City";
import { CityUtils } from "../Shared/City/CityUtils";
import { GameUtils } from "../Shared/Game/GameUtils";
import { useStores } from "../Shared/Stores";
import { Tooltip } from "../UI/Tooltip";

interface ICityCellProps {
  city: City;
}

export const CityCell = observer(({ city }: ICityCellProps) => {
  const { gameStore } = useStores();

  const handleDiseaseCountUpdate = (
    diseaseCount: number,
    newCityState: City
  ) => {
    let updatedNeighbors: { [key: string]: City } | undefined;
    if (diseaseCount > 3) {
      updatedNeighbors = GameUtils.getCityNeighborsAfterOutbreak(
        newCityState,
        gameStore.cities,
        {},
        []
      );
    }
    gameStore.cities = {
      ...gameStore.cities,
      [newCityState.id]: newCityState,
      ...updatedNeighbors,
    };
  };
  const cityClassName = city
    ? "cursor-pointer text-primary d-flex align-items-center justify-content-center city position-relative " +
      CityUtils.getDiseasedCityClassName(
        gameStore.cities[city.id]?.diseaseType,
        gameStore.cities[city.id].diseaseCount
      )
    : "";
  return (
    <>
      <div
        id={`${city?.id ?? ""}`}
        className={cityClassName}
        onClick={() => {
          gameStore.currentSelectedCity = gameStore.cities[city.id];
        }}
      >
        {/* {city.coordinates.x},{city.coordinates.y} */}
        <Tooltip target={city.id} type="uncontrolled">
          {city && (
            <>
              <div>{city.name}</div>
              <div>Population: {city.population}</div>
              <div>Disease Type: {city.diseaseType}</div>
              <div className="text-danger">
                Infection Level: {city.diseaseCount}
              </div>
              {/* <span>
                {city.coordinates.x},{city.coordinates.y}
              </span> */}
            </>
          )}
          <div>
            <button
              onClick={() => {
                gameStore.cities[city.id].diseaseCount += 1;
                handleDiseaseCountUpdate(
                  gameStore.cities[city.id].diseaseCount + 1,
                  gameStore.cities[city.id]
                );
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                gameStore.cities[city.id].diseaseCount -= 1;
                handleDiseaseCountUpdate(
                  gameStore.cities[city.id].diseaseCount - 1,
                  gameStore.cities[city.id]
                );
              }}
            >
              -
            </button>
          </div>
        </Tooltip>
        <div
          className="position-absolute text-nowrap"
          style={{ zIndex: 10, fontSize: 12, bottom: -20 }}
        >
          {city.name}
        </div>
      </div>
    </>
  );
});
