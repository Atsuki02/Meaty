import { menu } from '../../../data/menu';
import MenuItem from './MenuItem';
import { useState } from 'react';

function Menu() {
  const [selectedType, setSelectedType] = useState('main');
  return (
    <div className="min-h-partscreen bg-black ">
      <select
        onChange={(e) => setSelectedType(e.target.value)}
        className="sticky top-20 h-14 w-full bg-stone-900 text-center font-medium text-white outline-stone-100"
      >
        <option value="main" className="">
          Main
        </option>
        <option value="side">Side</option>
        <option value="drink">Drink</option>
        <option value="dessert">Dessert</option>
      </select>
      <ul className="divide-y divide-stone-200 bg-black text-white  ">
        {menu
          .filter((item) => item.type === selectedType)
          .map((item, i) => (
            <MenuItem item={item} i={i} key={i} />
          ))}
      </ul>
    </div>
  );
}

export default Menu;
