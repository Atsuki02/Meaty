import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../ui/Button';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTableNumber } from './userSlice';

function CreateUser() {
  const [tableNumber, setTableNumber] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!tableNumber) return;
    dispatch(createTableNumber(tableNumber));
    navigate('/menu');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center lg:flex lg:justify-center lg:py-10">
        <h2 className="pb-2 text-left text-sm lg:pb-0 lg:text-lg">
          Plasee start by telling your table number:
        </h2>
        <input
          value={tableNumber}
          onChange={(e) => setTableNumber(Number(e.target.value))}
          type="number"
          placeholder="0"
          className="mx-auto mb-10 mt-2 block rounded-xl px-6 py-2 text-black  focus:outline-red-800 lg:my-0 lg:ml-6 "
          min="1"
          max="15"
        />
      </div>
      <Button type="primary">
        <span className="pr-3">Let's order</span>
        <FontAwesomeIcon icon={faBowlFood} size="lg" />
      </Button>
    </form>
  );
}

export default CreateUser;
