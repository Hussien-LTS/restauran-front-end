import { BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
import React from "react";

import GetItems from "./components/Items";
import Navbars from "./components/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Categories from "./components/Category";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let routes = useRoutes([
    { path: "/", element: <Categories /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/categories", element: <Categories /> },
    { path: "/category/:categoryId/items", element: <GetItems /> },
  ]);
  return (
    <>
      <Navbars />
      {routes}
    </>
  );
}

export default App;
