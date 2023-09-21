import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/register/Register";
import Loginpage from "../pages/login/loginpage";
import Homepage from "../pages/Homepage/homepage";
import { Box } from "@mui/material";
import Products from "../pages/products/products";
import ProductForm from "../pages/products/Add_Edit_Product";
import ProtectedRoute from "./ProtectedRoutes";
import Adminpage from "../pages/AdminPage/Adminpage";
import VendorRequest from "../pages/AdminPage/VendorRequest";
import VendorList from "../pages/AdminPage/VendorList";

const Index = () => {
    return (
      <>
        <Box sx={{ width: "100%", bgcolor: 'white', }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/user/products" exact element={<Products />} />
            <Route path="/user/products/:userID" element={<Products />} />
            <Route path="/product/add" exact element={<ProductForm />} />
            <Route path="/product/add/:productID" element={<ProductForm />} />
            <Route path="/product/edit" element={<ProductForm />} />
            <Route path="/admin" element={<Adminpage />} />
            <Route path="/vendors/request" element={<VendorRequest />} />
            <Route path="/vendors/list" element={<VendorList />} />

          </Routes>
        </Box>
      </>
    )
};

export default Index;