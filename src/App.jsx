import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Check from './features/check/Check';
import CreatedOrder from './features/order/CreatedOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import FinishedCheck from './features/check/FinishedCheck';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <CreatedOrder />,
      },
      {
        path: 'Check',
        element: <Check />,
      },
      {
        path: 'Check/finished',
        element: <FinishedCheck />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
