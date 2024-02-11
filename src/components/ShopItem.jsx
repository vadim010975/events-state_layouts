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

export default ShopItem;
