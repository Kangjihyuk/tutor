import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from "./Pages/login"
import Register from "./Pages/register"
import Error from "./Pages/error"
import User from "./Pages/user";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./Pages/products";
import DetailProductPages from "./Pages/detailProductPages";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/products/:id",
    element: <DetailProductPages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Navbar /> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
