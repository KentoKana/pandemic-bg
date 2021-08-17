import "./App.css";
import { Game } from "./Game";
import { City } from "./Shared/City";
import { EDiseaseType } from "./Shared/Enums/DiseaseType";

function App() {
  return (
    <div className="App">
      <Game gridSize={{ horizontal: 20, vertical: 10 }} cities={cities} />
    </div>
  );
}

const cities: { [cityId: string]: City } = {
  city1: new City(
    "city1",
    10000,
    "Atlanta",
    { x: 10, y: 3 },
    ["city3"],
    EDiseaseType.Yellow,
    0
  ),
  city2: new City(
    "city2",
    1000,
    "Osaka",
    { x: 2, y: 4 },
    ["city3"],
    EDiseaseType.Red,
    0
  ),
  city3: new City(
    "city3",
    10030,
    "Algerie",
    { x: 3, y: 8 },
    ["city1", "city2", "city4"],
    EDiseaseType.Blue,
    0
  ),
  city4: new City(
    "city4",
    1000,
    "Tokyo",
    { x: 5, y: 8 },
    ["city3"],
    EDiseaseType.Red,
    0
  ),
};

export default App;
