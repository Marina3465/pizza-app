import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Layout } from './layout/Menu/Layout';
import Product from './pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { AuthLayout } from './layout/Auth/AuthLayout';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import RequireAuth from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
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
        element: <Product />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          const { data } = await axios.get(`${PREFIX}/products/${params.id}`)
          return data
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  }

])
function App() {

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
