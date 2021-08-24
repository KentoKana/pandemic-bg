import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Disease } from "../../Shared/Disease";
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
              <Col>{diseaseStates[EDiseaseType.Red].diseaseCount}</Col>
              <Col>{diseaseStates[EDiseaseType.Black].diseaseCount}</Col>
              <Col>{diseaseStates[EDiseaseType.Yellow].diseaseCount}</Col>
              <Col>{diseaseStates[EDiseaseType.Blue].diseaseCount}</Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
});
