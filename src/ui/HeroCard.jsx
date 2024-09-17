const HeroCard = ({ image, title, price, originalPrice }) => {
  return (
    <div className="flex-shrink-0 px-5">
      <div className="flex flex-col items-start mt-10 space-y-3">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg h-60 object-cover"
        />
        <div className="text-white text-start px-2">
          <p>{title}</p>
          <p className="space-x-6">
            <span>{price}</span>
            {originalPrice && (
              <span className="line-through">{originalPrice}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
