import React from "react";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className=" space-y-2 text-white ">
      <img src={icon} alt="" width={32} />
      <p className="font-montserrat text-xl font-semibold"> {title}</p>
      <p className="font-inter">{description}</p>
    </div>
  );
};

export default InfoCard;
