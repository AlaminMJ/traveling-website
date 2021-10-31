import React, { useEffect, useState } from "react";
import DistinationCard from "../../Shared/DistinationCard/DistinationCard";
import { Spinner, Button, Container } from "react-bootstrap";

import TourCard from "../../Shared/TourCard/TourCard";

const Home = () => {
  const [tourList, setTourList] = useState([]);
  useEffect(() => {
    fetch("https://howling-grave-27683.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setTourList(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <div className="container py-5 ">
          <h1 className="display-1 text-white pt-5 mt-5">
            Welcome to
            <br />
            <span className="text-warning">Traveler</span>
          </h1>
          <h5 className="display-6 text-white"> Where you like to go?</h5>
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
      {/*  */}
      <Container>
        <h3 className="display-6 ">Top Destinations</h3>
        <div className="destaintions-container py-5">
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2015/02/virgi_3-1024x1024-370x370.jpg"
            }
            name={"Virginia"}
            property={"20 properties"}
          ></DistinationCard>
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2015/02/san_francisco-1024x1024-370x370.jpg"
            }
            name={"Virginia"}
            property={"20 properties"}
          ></DistinationCard>
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2014/11/cali_5-1024x1024-370x370.jpg"
            }
            name={"California"}
            property={"17 properties"}
          ></DistinationCard>
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2015/02/cheapest-car-insurance-in-new-jersey-nj-story-370x370.jpg"
            }
            name={"San Francisco"}
            property={"15properties"}
          ></DistinationCard>
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2015/02/san_francisco-1024x1024-370x370.jpg"
            }
            name={"Alexiya malo"}
            property={"18 properties"}
          ></DistinationCard>
          <DistinationCard
            img={
              "https://homap.travelerwp.com/wp-content/uploads/2018/12/nevaga_2-1024x1024-370x370.jpg"
            }
            name={"Navada"}
            property={"20 properties"}
          ></DistinationCard>
        </div>
      </Container>
      {/* Rental */}
      <section className="py-5 Rental">
        <Container className="py-5">
          <h4 className="display-4">Add Your Rental Listing</h4>
          <h5 className="display-6" style={{ color: " #5e6d77" }}>
            Homes highly rated for thoughtful design
          </h5>
          <Button className="px-5 mt-3">Create Listening</Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
