import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "reactstrap";
import { DiseaseCounters } from "../FooterPanel/DiseaseCounters";
import { CityStats } from "./CityStats";
import { GameStats } from "./GameStats";

export const HeaderPanel = observer(() => {
  return (
    <div className="header-panel d-flex mb-3">
      <Container className="py-3">
        <Row className="justify-content-between align-items-center">
          <Col>
            <GameStats />
          </Col>
          <Col>
            <DiseaseCounters />
          </Col>
          <Col>
            <CityStats />
          </Col>
        </Row>
      </Container>
    </div>
  );
});
