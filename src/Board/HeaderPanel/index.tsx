import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { useStores } from "../../Shared/Stores";
import { DiseaseCounters } from "../FooterPanel/DiseaseCounters";
import { CityStats } from "./CityStats";
import { GameStats } from "./GameStats";

export const HeaderPanel = observer(() => {
  const { gameStore } = useStores();

  // Update selected city state via cities object
  useEffect(() => {
    if (gameStore.currentSelectedCity) {
      gameStore.currentSelectedCity =
        gameStore.cities[gameStore.currentSelectedCity.id];
    }
  }, [gameStore, gameStore.cities, gameStore.currentSelectedCity]);

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
