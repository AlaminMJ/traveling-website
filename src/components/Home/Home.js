import React from "react";
// import TourCard from "../../Shared/TourCard/TourCard";
// import useAuth from "../../Hooks/useAuth";
import TourCard from "../../Shared/TourCard/TourCard";

const Home = () => {
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
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
          <TourCard></TourCard>
        </div>
      </div>
      {/* Get Update section */}
      <section className="py-5 bg-primary">
        <div className="container py-5"></div>
      </section>
    </div>
  );
};

export default Home;
