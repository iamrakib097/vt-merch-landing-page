import tShirt from "../assets/img/img(2).jpeg";
import bag from "../assets/img/img(3).jpeg";
import caps from "../assets/img/img(7).png";
import pot from "../assets/img/img(8).jpeg";
import tShirt2 from "../assets/img/img(9).jpeg";
import books from "../assets/img/img(2).png";
import vGuard from "../assets/img/vGuard.png";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const styles = {
  heading: {
    color: "",
    WebkitTextFillColor: "transparent", // Will override color
    WebkitTextStroke: "1px white",
  },
};

const ShopCollection = () => {
  return (
    <section className="max-w-[1440px] mx-auto sm:px-20 pt-10 sm:pt-20 font-montserrat px-4 py-10 sm:py-20 grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 sm:grid-cols-3 sm:grid-rows-3 gap-4 grid-flow-dense relative bg-gradient-to-b from-[#2C2A2A] to-[#000000]">
      {/* Hero Section */}
      <div className="col-span-1 lg:col-span-2 lg:row-span-2 sm:col-span-3 sm:row-span-1 rounded-lg h-full">
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
      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className="relative sm:col-span-1 sm:row-span-1 lg:row-start-3 lg:row-span-4 lg:col-span-1 h-full w-full inline-flex justify-end items-end"
      >
        <div className="cursor-pointer">
          <img
            src={bag}
            alt="Bag"
            className="rounded-lg h-full lg:h-[400px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
            <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
              THE BOSS <br /> COLLECTION
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200, // Lower values make it slower
          damping: 20, // Higher values make it smoother
          duration: 0.3, // Specify duration if you want fixed timing
        }}
        className="relative cursor-pointer sm:col-span-1 sm:row-span-1 lg:row-start-3 lg:row-span-2 lg:col-span-1 rounded-lg h-full inline-flex justify-end items-end"
      >
        <img
          src={caps}
          alt="Caps"
          className="h-full lg:h-[220px]  w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
            HEADWEAR
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className="cursor-pointer relative sm:col-span-1 sm:row-span-1 lg:row-start-5 lg:row-span-2 lg:col-span-1 rounded-lg h-full inline-flex justify-end items-end"
      >
        <img
          src={books}
          alt="Books"
          className="h-full lg:h-full object-cover w-full rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6">
            VALUE BOOKS
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className="cursor-pointer relative sm:col-span-1 sm:row-span-1 lg:row-span-6 lg:col-start-3 lg:col-span-1 rounded-lg h-full inline-flex justify-end items-end"
      >
        <img
          src={pot}
          alt="Pot"
          className="object-cover h-full w-full lg:h-[550px] rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6 uppercase">
            Accessories
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className="cursor-pointer relative sm:col-span-1 sm:row-span-1 lg:col-start-4 lg:row-span-3 rounded-lg h-full  inline-flex justify-end items-end"
      >
        <img
          src={tShirt}
          alt="T-Shirt"
          className="rounded-lg h-full lg:h-[350px] w-full "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-lg lg:text-2xl bottom-6 left-6 uppercase">
            The Future Looks Bright Collection
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3,
        }}
        className="cursor-pointer relative sm:col-span-1 sm:row-span-1 lg:col-start-4 lg:row-span-3 rounded-lg h-full inline-flex"
      >
        <img
          src={tShirt2}
          alt="T-Shirt 2"
          className="rounded-lg h-full lg:h-[350px]  w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-40 rounded-lg">
          <p className="absolute text-white text-lg sm:text-2xl bottom-6 left-6 uppercase">
            tops
          </p>
        </div>
      </motion.div>
      <img src={vGuard} alt="" className="absolute -z-1" width={400} />
    </section>
  );
};

export default ShopCollection;
