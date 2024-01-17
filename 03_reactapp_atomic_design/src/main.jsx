import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import PageRegister from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import PageProducts from './Pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Word</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <PageRegister/>
  },
  {
    path: "/products",
    element: <PageProducts/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
