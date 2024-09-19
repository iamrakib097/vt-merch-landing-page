import tshirt from "../assets/img/img(1).jpeg";
import cap from "../assets/img/img(5).jpeg";
import FutureCard from "../ui/FutureCard";
const styles = {
  heading: {
    color: "black",
    WebkitTextFillColor: "white", // Will override color
    WebkitTextStroke: "1px black",
  },
};
const products = [
  {
    id: 1,
    image: tshirt,
    productName: "FLB Shirt-Prple",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 2,
    image: cap,
    productName: "FLB Hat-Purple",
    price: "$34.95",
    originalPrice: "$34.95",
  },
];

const FutureLooksBright = () => {
  return (
    <section className=" flex flex-col lg:flex-row justify-center items-center max-w-[1440px] mx-auto sm:px-20 pt-10 sm:pt-20 font-montserrat px-4 py-10 sm:py-20">
      <div
        className="space-y-4  py-4 flex-2 text-start lg:mr-40"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <h2 className="font-ActOfRejection text-4xl sm:text-6xl lg:text-4xl xl:text-6xl leading-[50px] tracking-widest">
          FUTURE LOOKS BRIGHT
        </h2>

        <p className="uppercase font-montserrat text-4xl lg:text-2xl xl:text-4xl leading-[50px]">
          <span className="text-[#7F1BCD]">purpple</span> & <br />
          <span className="text-[#E0A408]">GOLD </span>
          <span className="font-mono italic" style={styles.heading}>
            series
          </span>
        </p>
      </div>
      <div
        className="flex gap-4 flex-3"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        {products.map((prod) => (
          <FutureCard
            key={prod.id}
            title={prod.productName}
            price={prod.price}
            originalPrice={prod.originalPrice}
            image={prod.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FutureLooksBright;
