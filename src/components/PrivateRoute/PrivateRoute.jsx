import { Mainnav } from "../Navbar/Mainnav";
import { Outlet, Navigate, useLocation } from "react-router-dom";
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
