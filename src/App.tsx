import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layout/Menu/Layout';
import Product from './pages/Product/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '*',
        element: <Error />
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  },

])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
