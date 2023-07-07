import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
import { useState } from 'react';

function AppLayout() {
  const [isCartShown, setIsCartShown] = useState(false);
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';
  return (
    <div className="">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      {isCartShown && <CartOverview />}
    </div>
  );
}

export default AppLayout;
