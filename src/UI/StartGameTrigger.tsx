import { Button, Col, Container, Row } from "reactstrap";

interface IStartGameTriggerProps {
  onStartGame: () => void;
}
export const StartGameTrigger = ({ onStartGame }: IStartGameTriggerProps) => {
  return (
    <div>
      <Container style={{ width: "100vw" }}>
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="justify-content-center align-items-center">
            <Col>
              <Button color="primary" onClick={onStartGame}>
                Start Game
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
