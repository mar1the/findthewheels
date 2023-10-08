import React from "react";
import "../styles/bookings.css";
import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";
import { Link } from "react-router-dom";

const Bookings = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Car Listing</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
           <Link to='/createcar'><button className="add-button">Add A New Car</button></Link>
          </div>

          
        </div>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
