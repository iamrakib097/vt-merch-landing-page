import rightArrow from "../assets/Icon/rightArrow.svg";
function Button() {
  return (
    <div>
      <button className="font-montserrat text-black px-4 py-1 rounded-lg bg-white tracking-tight flex gap-2">
        Shop now{" "}
        <span>
          <img src={rightArrow} alt="" width={24} height={24} />
        </span>
      </button>
    </div>
  );
}

export default Button;
