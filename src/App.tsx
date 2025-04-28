import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Board } from "./components/Board";
import {Card} from "./components/Card";
import "./stylings/Shared.css";


const App: React.FC = () => {

  const sampleDeck = [
    { name: "Goblin", attack: 2, health: 3 },
    { name: "Elf", attack: 3, health: 2 },
    { name: "Orc", attack: 6, health: 4 },
    { name: "Dragon", attack: 12, health: 12 },
    { name: "Archer", attack: 5, health: 3 },
    { name: "Golem", attack: 8, health: 8 },
  ];

  return (
    <Router>
      <div>
        <h1>Cards and Monsters</h1>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/board" element={<Board/>}/>
          <Route path="/card" element={<Card name="Demo" attack={1} health={1} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
