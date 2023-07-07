import { getMenu } from '../../Services/apiMenu';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <select className="sticky top-20 h-14 w-full bg-stone-900 text-center font-medium text-white outline-stone-100">
        <option value="" className="">
          Main
        </option>
        <option value="">Side</option>
        <option value="">Drink</option>
        <option value="">Dessert</option>
      </select>
      <ul className="divide-y divide-stone-200 bg-black text-white  ">
        {menu.map((item, i) => (
          <MenuItem item={item} i={i} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
