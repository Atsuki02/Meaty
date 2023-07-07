import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart, { loader as cartLoader } from './features/cart/Cart';
import Order from './features/order/Order';
import Check from './features/check/Check';
import CreatedOrder from './features/order/CreatedOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path: '/order/created',
        element: <CreatedOrder />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
      },
      {
        path: 'Check',
        element: <Check />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
