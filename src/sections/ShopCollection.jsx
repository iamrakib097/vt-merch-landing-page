import tShirt from "../assets/img/img(2).jpeg";
import bag from "../assets/img/img(3).jpeg";
import caps from "../assets/img/img(7).png";
import pot from "../assets/img/img(8).jpeg";
import tShirt2 from "../assets/img/img(9).jpeg";
import books from "../assets/img/img(2).png";
import vGuard from "../assets/img/vGuard.png";
import Button from "../ui/Button";
const styles = {
  heading: {
    color: "",
    WebkitTextFillColor: "transparent", // Will override color
    WebkitTextStroke: "1px white",
  },
};
const ShopCollection = () => {
  return (
    <section className="font-montserrat px-20 py-20 grid grid-cols-4 grid-rows-6 gap-4 grid-flow-dense relative bg-gradient-to-b from-[#2C2A2A] to-[#000000]">
      <div className="col-span-2 row-span-2 rounded-lg h-full">
        <div>
          <h1 className="text-white text-5xl">SHOP</h1>
          <h1
            style={styles.heading}
            className="text-5xl font-mono mt-6 mb-6 text-transparent stroke-[1px] stroke-white"
          >
            COLLECTION
          </h1>
          <Button text="VIEW ALL" />
        </div>
      </div>
      <div className="relative row-start-3 row-span-4 col-span-1 h-full w-full inline-flex justify-end items-end">
        <div>
          <img src={bag} alt="Bag" className="rounded-lg h-[400px] w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
            <p className="absolute text-white text-2xl bottom-6 left-6">
              THE BOSS <br /> COLLECTION
            </p>
          </div>
        </div>
      </div>
      <div className="relative row-start-3 row-span-2 col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img src={caps} alt="Caps" className="h-[220px] w-full rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-2xl bottom-6 left-6">
            HEADWEAR
          </p>
        </div>
      </div>
      <div className="relative row-start-5 row-span-2 col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={books}
          alt="Books"
          className="h-full object-cover w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-2xl bottom-6 left-6">
            VALUE BOOKS
          </p>
        </div>
      </div>
      <div className="relative row-span-6 col-start-3 col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={pot}
          alt="Pot"
          className="object-cover h-[550px] rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-2xl bottom-6 left-6 uppercase">
            Accessories
          </p>
        </div>
      </div>
      <div className="relative col-start-4 row-span-3 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={tShirt}
          alt="T-Shirt"
          className="rounded-lg h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-2xl bottom-6 left-6 uppercase">
            The Future Looks Bright Collection
          </p>
        </div>
      </div>
      <div className="relative col-start-4 row-span-3 rounded-lg h-full inline-flex">
        <img
          src={tShirt2}
          alt="T-Shirt 2"
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-2xl bottom-6 left-6 uppercase">
            tops
          </p>
        </div>
      </div>
      {/* <img src={vGuard} alt="" className="absolute z-10" /> */}
    </section>
  );
};

export default ShopCollection;
