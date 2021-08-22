import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Board } from "../Board";
import { GameUtils } from "../Shared/Game/GameUtils";
import { useStores } from "../Shared/Stores";

export const Game = observer(() => {
  const { gameStore } = useStores();
  // Update outbreak count
  useEffect(() => {
    gameStore.outbreakCount = GameUtils.getOutbreakCount(gameStore);
  }, [gameStore.cities, gameStore]);

  // Check if players lost
  useEffect(() => {}, [gameStore.hasLostGame]);
  return <Board />;
});
