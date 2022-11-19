import cover from "../assets/img/cover.png";
import "./SingleCard.css";

function SingleCard({ card, handleChoice }) {
  const handleClick = (event) => {
    handleChoice(card);
    console.log(event.target);
  };

  return (
    <div className="card">
      <img className="front" src={card.src} alt="" />
      <img className="back" onClick={handleClick} src={cover} alt="" />
    </div>
  );
}

export default SingleCard;
