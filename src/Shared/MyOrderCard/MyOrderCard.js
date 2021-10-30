import React from "react";
import { IoIosFlash } from "react-icons/io";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { Button } from "react-bootstrap";
import DeleteMModal from "../DeleteModal/DeleteModal";

const TourCard = ({ data, handelDeleteOrder, deleteId }) => {
  const { location, title, photoURL, time, cost } = data;
  const [modalShow, setModalShow] = React.useState(false);

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
        <div className="footer-card mb-2">
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
        <DeleteMModal
          deleteId={deleteId}
          handelDeleteOrder={handelDeleteOrder}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <Button
          variant={"danger"}
          size="sm"
          className="me-auto"
          onClick={() => {}}
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TourCard;
