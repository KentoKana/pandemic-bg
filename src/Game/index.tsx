import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Board } from "../Board";
import { GameUtils } from "../Shared/Game/GameUtils";
import { Medic } from "../Shared/Player/Medic";
import { OperationsExpert } from "../Shared/Player/OperationsExpert";
import { useStores } from "../Shared/Stores";
import { StartGameTrigger } from "../UI/StartGameTrigger";

export const Game = observer(() => {
  const { gameStore } = useStores();
  const [startGame, setStartGame] = useState<boolean>(false);

  useEffect(() => {
    // Update Outbreak count
    gameStore.outbreakCount = GameUtils.getOutbreakCount(gameStore);
  }, [gameStore.cities, gameStore]);

  // Check if players lost
  useEffect(() => {
    if (gameStore.hasLostGame) {
      alert("Game Over");
    }
  }, [gameStore.hasLostGame]);

  // Start game
  useEffect(() => {
    if (startGame) {
      gameStore.playerCards = gameStore.playerCards.slice(5);
    }
  }, [startGame, gameStore]);

  useEffect(
    () => {
      // Call method to activate Player turn acitons
      // check if player's action counter is 4
      // if no, allow actions
      //
      // Call method to activate CPU turn actions
    },
    [
      // Player
    ]
  );

  return startGame ? (
    <Board />
  ) : (
    <StartGameTrigger onStartGame={() => setStartGame(true)} />
  );
});
