import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login.jsx';
import PageRegister from './Pages/register.jsx';
import ErrorPage from './Pages/404.jsx';
import PageProducts from './Pages/products.jsx';
import ProfilePage from './Pages/profile.jsx';
import DetailProductPage from './Pages/DetailProductPage.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

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
  },
  {
    path:'/profile',
    element: <ProfilePage />
  },
  {
    path:'/product/detail/:id',
    element: <DetailProductPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
