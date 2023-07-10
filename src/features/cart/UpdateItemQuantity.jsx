import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  decreseItemQuantity,
  getCurrentQuantityById,
  increseItemQuantity,
} from './cartSlice';
import Button from '../../ui/Button';

function UpdateItemQuantity({ item }) {
  const { id, unitPrice, name } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <div className="mr-4 flex flex-row items-center justify-end space-x-2 text-lg lg:mr-10 lg:space-x-3">
        {isInCart && (
          <>
            <Button
              type="round"
              onClick={() => dispatch(decreseItemQuantity(id))}
            >
              -
            </Button>
            <span>{currentQuantity}</span>
            <Button
              type="round"
              onClick={() => dispatch(increseItemQuantity(id))}
            >
              +
            </Button>
          </>
        )}
        {!isInCart && (
          <Button type="small" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
      </div>
    </>
  );
}

export default UpdateItemQuantity;
