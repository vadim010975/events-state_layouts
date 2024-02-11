import { v4 as uuidv4 } from "uuid";
import ShopCard from "./ShopCard";

function CardsView({ cards }) {

  return (
    <ul className="cards-view">
      {cards.map((card) => (
        <li key={uuidv4()} className="cards-view__card">
          <ShopCard card={card} />
        </li>
      ))}
    </ul>
  );
}

export default CardsView;
