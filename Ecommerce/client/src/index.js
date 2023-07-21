import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './router'
import GlobalStyle  from './components/common/GlobalStyle';
import {CartProvider} from './store/CartProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <GlobalStyle><RouterProvider router={router}/></GlobalStyle>
    </CartProvider>
  </React.StrictMode>
);


