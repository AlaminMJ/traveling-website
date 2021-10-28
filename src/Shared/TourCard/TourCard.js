import React from "react";
import "./TourCard.css";
import { IoIosFlash } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const TourCard = () => {
  return (
    <div className="tour-card">
      <div className="card-img">
        <img
          src="https://tomap.travelerwp.com/wp-content/uploads/2015/01/iStock_000037401046XXXLarge-680x500.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <div className="location">
          <span className="icon">
            <GoLocation />
          </span>
          <span className="location-name">Chicago, IL, USA</span>
        </div>
        <h3>Harvard: 70-Minute Hahvahd Tour</h3>
        <div className="footer-card">
          <div className="time">
            <span className="icon">
              <BsClock />
            </span>
            <span>4 days</span>
          </div>
          <div className="price-section">
            <span className="icon">
              <IoIosFlash />
            </span>
            <span>from</span>
            <span className="price">$89.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
