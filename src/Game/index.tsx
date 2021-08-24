import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Board } from "../Board";
import { GameUtils } from "../Shared/Game/GameUtils";
import { useStores } from "../Shared/Stores";

export const Game = observer(() => {
  const { gameStore } = useStores();
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

  return <Board />;
});
