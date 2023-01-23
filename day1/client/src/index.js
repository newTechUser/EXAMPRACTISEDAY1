import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
}   from "react-router-dom"; 
import App from './App';
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'

  const router = createBrowserRouter([
    {
     path:'/',
     element:<App/>,
     children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Add',
        element:<Add/>
      }
     ]
    }
  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router}/>
); 
  
