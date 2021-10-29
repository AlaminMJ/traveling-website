import React from "react";
import "./TourCard.css";
import { IoIosFlash } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const TourCard = ({ data }) => {
  const { location, title, photoURL, time, cost } = data;
  return (
    <div className="tour-card ">
      <div className="card-img">
        <img src={photoURL} alt="" />
      </div>
      <div className="content">
        <div className="location">
          <span className="icon">
            <GoLocation />
          </span>
          <span className="location-name">{location}</span>
        </div>
        <h3>{title}</h3>
        <div className="footer-card">
          <div className="time">
            <span className="icon">
              <BsClock />
            </span>
            <span>{time}</span>
          </div>
          <div className="price-section">
            <span className="icon">
              <IoIosFlash />
            </span>
            <span>from</span>
            <span className="price">${cost}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
