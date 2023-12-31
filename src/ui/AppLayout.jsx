import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
