import React from "react";

const DistinationCard = ({ img, name, property }) => {
  return (
    <div className="distinationCard d-flex justify-content-center  align-items-center">
      <img src={img} alt={name} />
      <div className=" content  text-center text-white">
        <h2 className="">{name}</h2>
        <h5>{property}</h5>
      </div>
    </div>
  );
};

export default DistinationCard;
