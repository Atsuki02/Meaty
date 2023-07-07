import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="lg:text:lg sticky left-0 top-0 flex h-20 items-center justify-between bg-red-800 p-8 text-xl font-bold text-white lg:px-12 ">
      <Link to="/">
        <h1 className="">Hokuden</h1>
      </Link>
      <div className="flex h-10 w-20 flex-row items-center justify-center rounded-lg bg-white text-red-800">
        <Link to="/cart">
          <span className="pr-3">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className="">3</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
