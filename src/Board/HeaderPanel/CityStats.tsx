import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { DiseaseUtils } from "../../Shared/Disease/DiseaseUtils";
import { useStores } from "../../Shared/Stores";

export const CityStats = observer(() => {
  const { gameStore } = useStores();
  // Update selected city state via cities object
  useEffect(() => {
    if (gameStore.currentSelectedCity) {
      gameStore.currentSelectedCity =
        gameStore.cities[gameStore.currentSelectedCity.id];
    }
  }, [gameStore, gameStore.cities, gameStore.currentSelectedCity]);
  return (
    <div className="d-flex flex-column align-items-end">
      <div>
        <div className="text-nowrap">
          <div>Current City: {gameStore.currentSelectedCity?.name}</div>
          <div>
            Infection Level:{" "}
            {Array.from(Array(3), () => 0).map((_, index) => {
              return (
                <span
                  key={index}
                  className={
                    gameStore.currentSelectedCity &&
                    gameStore.currentSelectedCity.diseaseCount > index
                      ? DiseaseUtils.getDiseaseColorClassName(
                          gameStore.currentSelectedCity?.diseaseType
                        )
                      : "text-mute"
                  }
                >
                  <FontAwesomeIcon icon={faVirus} />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});
