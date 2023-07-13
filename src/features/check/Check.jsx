import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { getOrderedList, getTotalOrderedListPrice } from '../order/orderSlice';
import CheckedItem from './CheckedItem';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helper';

function Check() {
  const orderedList = useSelector(getOrderedList);
  const totalBillPrice = useSelector(getTotalOrderedListPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handlePayBill() {
    dispatch(clearCart());
    navigate('/check/finished');
  }
  return (
    <div className="min-h-partscreen bg-black px-4 py-3  text-white">
      <div className="mt-4 flex items-center justify-center">
        <Button to="/menu">&larr; Back to menu</Button>
      </div>
      <h2 className="mt-10 text-lg font-semibold">Your Orders</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {orderedList.map((item, i) => (
          <CheckedItem item={item} key={i} />
        ))}
      </ul>
      <p className="border-t-stone-200 py-10 text-lg font-semibold lg:pr-14 lg:text-right">
        Toatl : {formatCurrency(totalBillPrice)}
      </p>
      <div className="my-6 space-x-4 text-center lg:my-10 lg:space-x-14">
        <Button type="primary" onClick={handlePayBill}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}

export default Check;
