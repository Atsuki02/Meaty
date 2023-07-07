import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link to="/menu">
        <Button>&larr; Back to menu</Button>
      </Link>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some items :)
      </p>
    </div>
  );
}

export default EmptyCart;
