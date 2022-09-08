import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Favourite from "../pages/favorite";
import ProductForm from "../pages/create";

import { setProducts } from "../store/slices/productSlice";
import LOGIN_TOKEN from "../config/token";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://upayments-studycase-api.herokuapp.com/api/products",
        {
          headers: {
            Authorization: `Bearer ${LOGIN_TOKEN}`,
          },
        }
      );
      dispatch(setProducts(response.data.products));
    })();
  }, [dispatch]);

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
