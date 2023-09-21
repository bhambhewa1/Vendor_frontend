import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { storage as LocalStorage } from "../config/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ children }) => {
  const acc_Token = LocalStorage.fetch.authToken();
  if (acc_Token) {
  } else {
    setTimeout(() => {
      toast.error("Please Log in first ");
    }, 500);
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
