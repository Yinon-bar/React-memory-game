import cover from "../assets/img/cover.png";
import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = (event) => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="" />
        <img className="back" onClick={handleClick} src={cover} alt="" />
      </div>
    </div>
  );
}

export default SingleCard;
