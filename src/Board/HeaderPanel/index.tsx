import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "reactstrap";
import { City } from "../../Shared/City";
import { EDiseaseType } from "../../Shared/Enums/DiseaseType";

interface IHeaderPanelProps {
  selectedCity?: City;
}
export const HeaderPanel = ({ selectedCity }: IHeaderPanelProps) => {
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
        {selectedCity && (
          <Row>
            <Col className="text-nowrap">
              Current City: {selectedCity?.name}
            </Col>
            <Col className="text-nowrap">
              Infection Level:{" "}
              {Array.from(Array(3), () => 0).map((_, index) => {
                return (
                  <span
                    key={index}
                    className={
                      selectedCity?.diseaseCount > index
                        ? getBgColorClassName(selectedCity?.diseaseType)
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
};
