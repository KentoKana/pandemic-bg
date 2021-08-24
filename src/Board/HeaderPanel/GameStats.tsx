import { faVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";
import { useStores } from "../../Shared/Stores";

export const GameStats = observer(() => {
  const { gameStore } = useStores();

  return (
    <>
      <div>
        Outbreaks:{" "}
        {Array.from(Array(8), () => 0).map((_, index) => {
          return (
            <span
              key={index}
              className={
                gameStore.outbreakCount > index ? "text-outbreak" : "text-mute"
              }
            >
              <FontAwesomeIcon icon={faVirus} />
            </span>
          );
        })}
      </div>
      <div>Infection Rate:</div>
    </>
  );
});
