import { useState } from 'react';
import IconeSwitch from './IconSwitch';
import products from '../products';
import CardsView from './CardsView';
import ListView from './ListView';

function Store() {

  const [icon, setIcon] = useState("view_module");

  return (
    <>
      <IconeSwitch icon={icon} onSwitch={() => {
        setIcon(icon => {
          return icon === "view_module" ? "view_list" : "view_module";
        })
      }} />
      {icon === "view_module" ? <CardsView cards={products} /> : <ListView items={products} />}
    </>

  )
}

export default Store;
