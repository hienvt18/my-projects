import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './router'
import GlobalStyle  from './components/common/GlobalStyle';
import {StateProvider} from './store/StateProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider>
      <GlobalStyle><RouterProvider router={router}/></GlobalStyle>
    </StateProvider>
);


