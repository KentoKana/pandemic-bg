import { observer } from "mobx-react-lite";
import { Game } from "./Game";

const App = observer(() => {
  return (
    <div className="App">
      <Game />
    </div>
  );
});

export default App;
