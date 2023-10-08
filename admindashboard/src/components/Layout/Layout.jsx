import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import Bookings from "../../pages/Cars";


const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
       
          
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
