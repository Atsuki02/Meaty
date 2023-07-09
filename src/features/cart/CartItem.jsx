import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helper';
import { deleteItem, getCurrentQuantityById } from './cartSlice';
import UpdateItemQuantity from './updateItemQuantity';

function CartItem({ item }) {
  const { name, price, quantity, id, totalPrice } = item;
  const dispatch = useDispatch();
  return (
    <li className="py-3 lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6">
      <p className="mb-1 lg:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between lg:gap-4 ">
        <p className="pr-2 text-lg">{formatCurrency(totalPrice)}</p>
        <div className="justify-beween flex">
          <UpdateItemQuantity item={item} />
          <Button type="small" onClick={() => dispatch(deleteItem(id))}>
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
