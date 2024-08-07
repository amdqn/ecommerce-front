// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/cart",
    element: <CartPage />, 
  },
]);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement || document.createElement('div'));

root.render(
  <React.StrictMode>
    <CartProvider> 
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
