import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="h-16 w-full bg-red-800">
      <Link to="/cart">Open Cart</Link>
    </div>
  );
}

export default CartOverview;
