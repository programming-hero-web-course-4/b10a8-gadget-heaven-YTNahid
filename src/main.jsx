import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Contact from './components/Contact/Contact';
import { ToastContainer } from 'react-toastify';

const productsLoader = async () => {
  const response = await fetch('/products.json');
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: productsLoader,
      },
      {
        path: '/product_details/:productId',
        element: <ProductDetails></ProductDetails>,
        loader: productsLoader,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </StrictMode>
);
