import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
// import TourCard from "../../Shared/TourCard/TourCard";
// import useAuth from "../../Hooks/useAuth";
import TourCard from "../../Shared/TourCard/TourCard";

const Home = () => {
  const [tourList, setTourList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setTourList(data));
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <div className="container ">
          <h1 className="display-1 text-white pt-5">
            Welcome to
            <br />
            <span className="">Traveler</span>
          </h1>
          <h5 className="display-5 text-white"> Where you like to go?</h5>
        </div>
      </div>
      {/* Tour section */}
      <div className="container py-5">
        <h3 className="display-6 ">
          Trending: <span className="text-primary">Tour</span>
        </h3>

        <div className="card-container py-2">
          {tourList.length > 0 ? (
            tourList.map((item) => (
              <TourCard key={item._id} data={item}></TourCard>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border my-5" variant="primary" />
            </div>
          )}
        </div>
      </div>
      {/* Get Update section */}
      <section className="py-5 bg-primary">
        <div className="container">
          <div className="d-flex justify-content-space-between aline-item-center">
            <div className="left">LEfg</div>
            <div className="right">Right</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
