import { useState } from "react";
import helmet from "./assets/img/helmet-1.png";
import ring from "./assets/img/ring-1.png";
import scroll from "./assets/img/scroll-1.png";
import shield from "./assets/img/shield-1.png";
import sword from "./assets/img/sword-1.png";
import potion from "./assets/img/potion-1.png";
import "./App.css";
import SingleCard from "./Components/SingleCard";

const cardImages = [
  { src: helmet },
  { src: ring },
  { src: scroll },
  { src: shield },
  { src: sword },
  { src: potion },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
