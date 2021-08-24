import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Disease } from "../../Shared/Disease";
import { DiseaseUtils } from "../../Shared/Disease/DiseaseUtils";
import { EDiseaseType } from "../../Shared/Enums/DiseaseType";
import { useStores } from "../../Shared/Stores";

export const FooterPanel = observer(() => {
  const { gameStore } = useStores();
  const [diseaseStates, setDiseaseStates] = useState<
    { [key in EDiseaseType]: Disease }
  >(gameStore.diseaseStates);
  useEffect(() => {
    setDiseaseStates(gameStore.diseaseStates);
  }, [gameStore.cities, gameStore.diseaseStates]);
  return (
    <div
      className="footer-panel d-flex justify-content-end"
      style={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        right: "0",
      }}
    >
      <Container>
        <Row>
          <Col></Col>
          <Col className="py-3">
            <Row>
              {Object.keys(diseaseStates).map((diseaseKey) => {
                const diseaseType = parseInt(diseaseKey) as EDiseaseType;
                return (
                  <Col
                    style={{ width: 100, height: 100 }}
                    className="position-relative d-flex justify-content-center align-items-center"
                  >
                    <span
                      style={{
                        zIndex: -1,
                        fontSize: 50,
                        opacity: 0.5,
                      }}
                      className={`position-absolute ${DiseaseUtils.getDiseaseColorClassName(
                        diseaseType
                      )}`}
                    >
                      <FontAwesomeIcon icon={faVirus} />
                    </span>
                    <span style={{ fontSize: 30, fontWeight: "bold" }}>
                      {diseaseStates[diseaseType].diseaseCount}
                    </span>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
});
