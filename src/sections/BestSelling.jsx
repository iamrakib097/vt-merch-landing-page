import BestSellingCard from "../ui/BestSellingCard";

const styles = {
  heading: {
    color: "black",
    WebkitTextFillColor: "white", // Will override color
    WebkitTextStroke: "3px black",
  },
};
const caps = [
  {
    id: 1,
    image: "src/assets/img/img(4).jpeg",
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 2,
    image: "src/assets/img/img(6).jpeg",
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 3,
    image: "src/assets/img/img(7).jpeg",
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 4,
    image: "src/assets/img/img(10).jpeg",
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
];
const BestSelling = () => {
  return (
    <section className="bg-[#F6F5F5] max-w-[1440px] mx-auto px-20 pt-20">
      <div className="flex justify-start text-start h-screen flex-col">
        <h1 className="text-6xl uppercase font-bold tracking-wider leading-32 font-mono">
          Buy 1 get 1 Free <br />
          on <span style={styles.heading}>best selling products</span>
        </h1>
        <div className="sm:flex gap-4 mt-10">
          {caps.map((cap) => (
            <BestSellingCard
              key={cap.id}
              image={cap.image}
              title={cap.title}
              price={cap.price}
              originalPrice={cap.originalPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
