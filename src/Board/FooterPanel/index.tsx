import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "reactstrap";
import { DiseaseCounters } from "./DiseaseCounters";

export const FooterPanel = observer(() => {
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
          {/* Disease Counter */}
          <Col className="py-3">
            <Row>
              <DiseaseCounters />
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
});
