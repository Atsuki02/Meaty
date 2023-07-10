import { useState } from 'react';
import { formatCurrency } from '../../utils/helper';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ item, i }) {
  const { unitPrice, name, img } = item;
  const [soldOut, setSoldOut] = useState(false);

  return (
    <li
      key={i}
      className="flex flex-col gap-4 py-2 lg:flex-row lg:gap-8 lg:py-8"
    >
      <img
        src={new URL(`${img}`, import.meta.url).pathname}
        alt=""
        className="lg:h-68 lg:w-80"
      />
      <div className="flex grow justify-between">
        <div className="m-5 flex flex-col justify-around lg:items-start lg:justify-center lg:text-lg">
          <p>{name}</p>
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
        <UpdateItemQuantity item={item} />
      </div>
    </li>
  );
}

export default MenuItem;
