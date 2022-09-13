import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoutes = ({component: Component, ...rest}) => {
//     const isAuthenticated = localStorage.getItem('dataAdmin')
//     return isAuthenticated ? <Outlet/> : <Navigate to="/auth/login" />
// }

// export default ProtectedRoutes;

export default function ProtectedRoutes({ children }) {
    const isAuthenticated = localStorage.getItem('dataAdmin')
  //   const isAuthenticated = false;
    return isAuthenticated ? <Outlet/> : <Navigate to="/auth/login" />
  }