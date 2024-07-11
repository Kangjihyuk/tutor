import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from "./Pages/login"
import Register from "./Pages/register"
import Error from "./Pages/error"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Pages/products"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/products",
    element: <Products/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
