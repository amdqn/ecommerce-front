import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const home = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/home",
  //   element: <Header />,
  // },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
]);


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement ? rootElement : document.createElement('div'));
root.render(
  <React.StrictMode>
       <RouterProvider router={home} />
  </React.StrictMode>
);

reportWebVitals();