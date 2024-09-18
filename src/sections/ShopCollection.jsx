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
    <section className="max-w-[1440px] mx-auto sm:px-20 pt-10 sm:pt-20 font-montserrat px-4 py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-6 gap-4 grid-flow-dense relative bg-gradient-to-b from-[#2C2A2A] to-[#000000]">
      {/* Hero Section */}
      <div className="col-span-1 sm:col-span-2 sm:row-span-2 rounded-lg h-full">
        <div>
          <h1 className="text-white text-4xl sm:text-5xl">SHOP</h1>
          <h1
            style={styles.heading}
            className="text-4xl sm:text-5xl font-mono mt-6 mb-6 text-transparent stroke-[1px] stroke-white"
          >
            COLLECTION
          </h1>
          <Button text="VIEW ALL" />
        </div>
      </div>

      {/* Product Items */}
      <div className="relative sm:row-start-3 sm:row-span-4 sm:col-span-1 h-full w-full inline-flex justify-end items-end">
        <div>
          <img
            src={bag}
            alt="Bag"
            className="rounded-lg h-full sm:h-[400px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
            <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
              THE BOSS <br /> COLLECTION
            </p>
          </div>
        </div>
      </div>

      <div className="relative sm:row-start-3 sm:row-span-2 sm:col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={caps}
          alt="Caps"
          className="h-full sm:h-[220px]  w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
            HEADWEAR
          </p>
        </div>
      </div>

      <div className="relative sm:row-start-5 sm:row-span-2 sm:col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={books}
          alt="Books"
          className="h-full sm:h-full object-cover w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
            VALUE BOOKS
          </p>
        </div>
      </div>

      <div className="relative sm:row-span-6 sm:col-start-3 sm:col-span-1 rounded-lg h-full inline-flex justify-end items-end">
        <img
          src={pot}
          alt="Pot"
          className="object-cover h-full w-full sm:h-[550px] rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6 uppercase">
            Accessories
          </p>
        </div>
      </div>

      <div className="relative sm:col-start-4 sm:row-span-3 rounded-lg h-full  inline-flex justify-end items-end">
        <img
          src={tShirt}
          alt="T-Shirt"
          className="rounded-lg h-full sm:h-[350px] w-full "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6 uppercase">
            The Future Looks Bright Collection
          </p>
        </div>
      </div>

      <div className="relative sm:col-start-4 sm:row-span-3 rounded-lg h-full inline-flex">
        <img
          src={tShirt2}
          alt="T-Shirt 2"
          className="rounded-lg h-full sm:h-[350px]  w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6 uppercase">
            tops
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
