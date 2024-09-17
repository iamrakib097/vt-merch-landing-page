import Button from "../ui/Button";
import signature from "../assets/img/pat-signature.png";
import redBook from "../assets/img/img(1).png";
import whiteBook from "../assets/img/img(8).png";
const Collection = () => {
  return (
    <section className="bg-black px-20 py-20 font-montserrat flex">
      <div className="">
        <div className="text-white text-3xl tracking-widest">
          Patrick Bet-David's
        </div>
        <div className="mt-6">
          <h2 className=" text-white text-5xl  font-bold  mt-6 leading-[60px]">
            <span className="bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] text-transparent bg-clip-text">
              Signed
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] text-transparent bg-clip-text">
              Collection
            </span>
          </h2>
        </div>
        <div className="mt-6">
          <Button text="Shop now" />
        </div>

        <img src={signature} alt="" />
      </div>
      <div className="flex justify-between items-center ">
        <img
          src={redBook}
          alt=""
          className="w-[300px] max-w-screen-sm -mr-12"
        />
        <img src={whiteBook} alt="" className="w-[230px]  max-w-screen-sm" />
      </div>
    </section>
  );
};

export default Collection;
