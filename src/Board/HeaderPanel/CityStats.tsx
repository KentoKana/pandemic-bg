import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DiseaseUtils } from "../../Shared/Disease/DiseaseUtils";
import { useStores } from "../../Shared/Stores";

export const CityStats = () => {
  const { gameStore } = useStores();
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
};
