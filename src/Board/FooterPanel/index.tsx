import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "reactstrap";
import { PlayersCard } from "../../UI/PlayersCard";

export const FooterPanel = observer(() => {
  return (
    <div
      className="footer-panel d-flex justify-content-end"
      style={{
        position: "fixed",
        width: "100%",
        bottom: "0",
        right: "0",
        // minHeight: "200px",
        zIndex: 100,
      }}
    >
      <Container className="position-relative">
        <Row>
          <Col></Col>
          <Col
            lg={3}
            // className="position-absolute"
            // style={{ top: 0, right: 0 }}
          >
            <PlayersCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
});
