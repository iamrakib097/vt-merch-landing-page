import React from "react";

const FutureCard = ({ title, image, price, originalPrice }) => {
  return (
    <div className="">
      <img src={image} alt="" className="rounded-lg" />
      <div className="font-inter  mt-6">
        <p>{title}</p>
        <div className="flex gap-2 mt-3">
          <p>{price}</p>
          <p className="text-opacity-70 text-gray-600 line-through	">
            {originalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureCard;
