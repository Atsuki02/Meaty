import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helper';

function CartItem({ name, price, quantity, menuId, totalPrice }) {
  return (
    <li className="py-3 lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-6">
      <p className="mb-1 lg:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between lg:gap-4 ">
        <p className="text-lg">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
