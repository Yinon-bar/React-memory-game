import cover from "../assets/img/cover.png";
import "./SingleCard.css";

function SingleCard({ card }) {
  return (
    <div className="card">
      <img className="front" src={card.src} alt="" />
      <img className="back" src={cover} alt="" />
    </div>
  );
}

export default SingleCard;
