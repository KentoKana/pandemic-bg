import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import { useStores } from "../Shared/Stores";
import { Accordion } from "./Accordion";

interface IPlayersCard {}
export const PlayersCard = observer(({}: IPlayersCard) => {
  const { gameStore } = useStores();
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <Button
        color="primary"
        className="d-flex justify-content-between"
        style={{ width: "100%", borderRadius: "10px 10px 0 0" }}
        onClick={() => setCollapse((prev) => !prev)}
      >
        <span>Players</span>
        <span>
          <FontAwesomeIcon icon={collapse ? faAngleDown : faAngleUp} />
        </span>
      </Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            {gameStore.players.map((player) => {
              return (
                <div>
                  <Accordion heading={player.displayName}>
                    <div>Location: {player.currentCity.name}</div>
                  </Accordion>
                </div>
              );
            })}
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
});
