import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';
import ShopItem from "./ShopItem";

function ListView({ items }) {

  return (
    <ul>
      {items.map(item => (
        <li key={uuidv4()} className="item">
          <ShopItem item={item} />
        </li>
      ))}
    </ul>
  );
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

export default ListView;
