import PropTypes from 'prop-types';

function ShopItem({ item }) {

  return (
    <>
      <div className="item__img-wrapper">
        <img src={item.img} alt={item.name} className="item__img" />
      </div>
      <div className="item__name">{item.name}</div>
      <div className="item__color">{item.color}</div>
      <div className="item__price">{item.price}</div>
      <button className="item__button">ADD TO CART</button>
    </>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    img: PropTypes.string,
  })
}

export default ShopItem;
