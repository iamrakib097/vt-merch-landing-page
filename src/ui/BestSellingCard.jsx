const BestSellingCard = ({ image, title, price, originalPrice }) => {
  return (
    <div className="flex bg-white rounded-lg p-4">
      <div className=" space-y-4">
        <img src={image} alt="" className="rounded-lg" />
        <div className="space-y-2">
          <p>{title}</p>
          <p>
            {price} <span>{originalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
