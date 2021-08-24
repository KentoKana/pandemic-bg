import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "reactstrap";

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
        </Row>
      </Container>
    </div>
  );
});
