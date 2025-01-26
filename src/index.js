import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import { ProductCard } from "./Components/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Kid from "./Components/kid";
import Women from "./Components/women";
import ErrorPage from "./Components/ErrorPage";
import ProductDetails from "./Components/ProductDetails";
import About from "./Components/about";
import { Provider } from "react-redux";
import appStore from "./Store/Store";
import Cart from "./Components/Cart";

const Grocery = lazy(() => import('./Components/Grocery'));
const App = () => {
  return (
    <Provider store={appStore} >
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>

  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />
      },
      {
        path: "/kid",
        element: <Kid />
      },
      {
        path: "/women",
        element: <Women />
      },
      {
        path: "/ProductDetails/:productid",
        element: <ProductDetails />
      },
      {
        path: "/Grocery",
        element: <Suspense fallback={<h1>loading!!!</h1>}><Grocery /></Suspense>
      },
      {
        path: "/cart",
        element:<Cart/>
      },
      {
        path: "/about",
        element: <About />
      }

    ],
    errorElement: <ErrorPage />
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
