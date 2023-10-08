import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cars from "../pages/Cars";
import Settings from "../pages/Settings";
import CreateCar from "../pages/CreateCar";
import Bookings from "../pages/Book";


const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Navigate to="/cars" />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/createcar" element={<CreateCar />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
};

export default Router;
