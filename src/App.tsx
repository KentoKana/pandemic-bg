import "./App.css";
import { Game } from "./Game";
import { cities } from "./Shared/Data/Cities";

function App() {
  return (
    <div className="App">
      <Game gridSize={{ horizontal: 20, vertical: 10 }} cities={cities} />
    </div>
  );
}

export default App;
