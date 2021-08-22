import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
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
    <Container>
      <div className="header-panel d-flex justify-content-between">
        <div></div>
        {gameStore.currentSelectedCity && (
          <Row>
            <Col className="text-nowrap">
              Current City: {gameStore.currentSelectedCity?.name}
            </Col>
            <Col className="text-nowrap">
              Infection Level:{" "}
              {Array.from(Array(3), () => 0).map((_, index) => {
                return (
                  <span
                    key={index}
                    className={
                      gameStore.currentSelectedCity!.diseaseCount > index
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
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
});
