import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
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

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}

export default CardsView;
