import PropTypes from 'prop-types';

function ShopCard({ card }) {

  return (
    <>
      <div className="card__name">{card.name}</div>
      <div className="card__color">{card.color}</div>
      <div className="card__img-wrapper">
        <img src={card.img} alt={card.name} className="card__img" />
      </div>
      <div className="card__footer">
        <div className="card__price">{card.price}</div>
        <button className="card__button">ADD TO CART</button>
      </div>
    </>
  );
}

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  })
}


export default ShopCard;
