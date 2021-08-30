import { Card, CardBody } from "reactstrap";
import { useStores } from "../Shared/Stores";

interface IPlayersCard {}
export const PlayersCard = ({}: IPlayersCard) => {
  const { gameStore } = useStores();
  return (
    <Card>
      <CardBody>
        {gameStore.players.map((player) => {
          return <div>{player.displayName}</div>;
        })}
      </CardBody>
    </Card>
  );
};
