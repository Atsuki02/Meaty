import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from '../features/cart/cartSlice';

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  return (
    <header className="lg:text:lg sticky left-0 top-0 z-30 flex h-20 items-center justify-between bg-red-800 p-4 text-xl font-bold text-white lg:px-12 ">
      <Link to="/">
        <h1 className="italic">HOKUDEN</h1>
      </Link>
      <div className="flex items-center justify-between space-x-6 ">
        <Link to="/check">
          <span className="">
            <FontAwesomeIcon icon={faFileInvoiceDollar} size="2xl" />
          </span>
        </Link>
        <div className="flex h-10 w-16 flex-row items-center justify-center rounded-lg bg-white text-red-800 lg:h-10 lg:w-20">
          <Link to="/cart">
            <span className="pr-2 lg:pr-3">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <span>{totalCartQuantity}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
