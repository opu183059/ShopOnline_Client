import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/pages/home/HomeLayout.jsx";
import Provider from "./components/provider/Provider.jsx";
import Product from "./components/pages/product/Product.jsx";
import ProductDetails from "./components/pages/product/ProductDetails.jsx";
import Login from "./components/pages/LoginAndRegistration/Login.jsx";
import Registration from "./components/pages/LoginAndRegistration/Registration.jsx";
import Cart from "./components/pages/cart/Cart.jsx";
import Order from "./components/pages/order/Order.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import AllUsers from "./components/pages/Dashboard/AllUsers.jsx";
import AllProducts from "./components/pages/Dashboard/AllProducts.jsx";
import AddProduct from "./components/pages/Dashboard/AddProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productDetails/${params.id}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
