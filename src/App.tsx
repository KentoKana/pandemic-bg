import "./App.css";
import { Game } from "./Game";
import { cities } from "./Shared/Data/Cities";

function App() {
  return (
    <div className="App">
      <Game gridSize={{ horizontal: 30, vertical: 20 }} cities={cities} />
    </div>
  );
}

export default App;
