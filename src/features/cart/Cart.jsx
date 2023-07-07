import CartItem from './CartItem';
import Button from '../../ui/Button';
import { getMenu } from '../../Services/apiMenu';

const fakeCart = [
  {
    name: 'Harami Steak',
    price: 3000,
    quantity: 4,
    menuId: 1,
    totalPrice: 12000,
  },
  {
    name: 'Harami Steak',
    price: 2000,
    quantity: 3,
    menuId: 2,
    totalPrice: 6000,
  },
  {
    name: 'Harami Steak',
    price: 2400,
    quantity: 2,
    menuId: 3,
    totalPrice: 4800,
  },
  {
    name: 'Harami Steak',
    price: 2400,
    quantity: 2,
    menuId: 4,
    totalPrice: 4800,
  },
  {
    name: 'Harami Steak',
    price: 2400,
    quantity: 2,
    menuId: 5,
    totalPrice: 4800,
  },
  {
    name: 'Harami Steak',
    price: 2400,
    quantity: 2,
    menuId: 6,
    totalPrice: 4800,
  },
  {
    name: 'Harami Steak',
    price: 2400,
    quantity: 2,
    menuId: 7,
    totalPrice: 4800,
  },
];

function Cart() {
  const cart = fakeCart;
  return (
    <div className="bg-black px-4 py-3 text-white">
      <div className="mt-4 flex items-center justify-center">
        <Button to="/menu">&larr; Back to menu</Button>
      </div>
      <h2 className="mt-10 text-lg font-semibold">Your cart</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            key={item.menuId}
          />
        ))}
      </ul>
      <p className="border-t-stone-200 py-10 text-lg font-semibold lg:pr-14 lg:text-right">
        Toatl : 150,000
      </p>
      <div className="my-6 space-x-4 text-center lg:my-10 lg:space-x-14">
        <Button to="/order/created" type="primary">
          Submit order
        </Button>

        <Button type="primary2">Clear cart</Button>
      </div>
    </div>
  );
}

export async function loader() {
  const cart = await getMenu();
  return cart;
}

export default Cart;
