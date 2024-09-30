import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import LoginPage from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import Test from "./pages/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <Product /> },
      { path: "contact", element: <Contact></Contact> },
      { path: "test", element: <Test /> },
    ],
  },
  { path: "/admin", element: <Admin /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/Register", element: <Register /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
