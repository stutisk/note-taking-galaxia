import { Mainnav } from "../Navbar/Mainnav";
import { Outlet } from "react-router-dom";
import React from "react";
const PrivateRoute = () => {
  
  return (
    <>
      <Mainnav />
      <Outlet />
    </>
  );
};

export { PrivateRoute };
