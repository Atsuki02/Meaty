import { useState } from 'react';

function MenuItem({ item, i }) {
  const [soldOut, setSoldOut] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <li
      key={i}
      className="flex flex-col gap-4 py-2 lg:flex-row lg:gap-8 lg:py-8"
    >
      <img src={item.img} alt="" className="lg:h-68 lg:w-80" />
      <div className="flex grow justify-between">
        <div className="m-5 flex flex-col justify-around lg:items-start lg:justify-center">
          <p>{item.name}</p>
          {!soldOut ? (
            <p>{item.price} &yen;</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
        <div className=" mr-10 flex flex-row items-center justify-end space-x-4 text-lg">
          <button
            onClick={() => (count > 0 ? setCount((cur) => cur - 1) : null)}
            className="h-8 w-8 rounded-full bg-white text-black"
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => setCount((cur) => cur + 1)}
            className="h-8 w-8 rounded-full bg-white text-black"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
{
  /* <div className="m-5 hidden items-center lg:mr-4 lg:flex">
  <Button>Add to cart</Button>
</div> */
}

export default MenuItem;
