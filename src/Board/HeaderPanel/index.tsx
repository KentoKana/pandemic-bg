import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Container } from "reactstrap";
import { EDiseaseType } from "../../Shared/Enums/DiseaseType";
import { useStores } from "../../Shared/Stores";

export const HeaderPanel = observer(() => {
  const { gameStore } = useStores();

  // Update selected city state via cities object
  useEffect(() => {
    if (gameStore.currentSelectedCity) {
      gameStore.currentSelectedCity =
        gameStore.cities[gameStore.currentSelectedCity.id];
    }
  }, [gameStore, gameStore.cities, gameStore.currentSelectedCity]);

  const getBgColorClassName = (diseaseType?: EDiseaseType) => {
    switch (diseaseType) {
      case EDiseaseType.Red:
        return "text-disease--red";
      case EDiseaseType.Blue:
        return "text-disease--blue";
      case EDiseaseType.Yellow:
        return "text-disease--yellow";
      case EDiseaseType.Black:
        return "text-disease--black";
      default:
        return "";
    }
  };

  return (
    <div className="header-panel d-flex mb-3">
      <Container className="d-flex align-items-center justify-content-end py-3">
        <div>
          <div>
            Outbreaks:{" "}
            {Array.from(Array(8), () => 0).map((_, index) => {
              return (
                <span
                  key={index}
                  className={
                    gameStore.outbreakCount > index
                      ? "text-outbreak"
                      : "text-mute"
                  }
                >
                  <FontAwesomeIcon icon={faVirus} />
                </span>
              );
            })}
          </div>
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
                        ? getBgColorClassName(
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
      </Container>
    </div>
  );
});
