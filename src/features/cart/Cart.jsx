import CartItem from './CartItem';
import Button from '../../ui/Button';
import { getMenu } from '../../Services/apiMenu';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helper';
import EmptyCart from './EmptyCart';
import LinkButton from '../../ui/LinkButton';

function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="bg-black px-4 py-3 text-white">
      <div className="mt-4 flex items-center justify-center">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>
      <h2 className="mt-10 text-lg font-semibold">Your cart</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="border-t-stone-200 py-10 text-lg font-semibold lg:pr-14 lg:text-right">
        Toatl : {formatCurrency(totalCartPrice)}
      </p>
      <div className="my-6 space-x-4 text-center lg:my-10 lg:space-x-14">
        <Button to="/order/created" type="primary">
          Submit order
        </Button>
        <Button type="primary2" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export async function loader() {
  const cart = await getMenu();
  return cart;
}

export default Cart;
