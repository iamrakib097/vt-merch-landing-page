import BestSellingCard from "../ui/BestSellingCard";
import cap1 from "../assets/img/img(4).jpeg";
import cap2 from "../assets/img/img(6).jpeg";
import cap3 from "../assets/img/img(7).jpeg";
import cap4 from "../assets/img/img(10).jpeg";
const caps = [
  {
    id: 1,
    image: cap1,
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 2,
    image: cap2,
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 3,
    image: cap3,
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
  {
    id: 4,
    image: cap4,
    title: "Army Green Active Short Sleeve",
    price: "$34.95",
    originalPrice: "$34.95",
  },
];

const Products = ({ children }) => {
  return (
    <section className="bg-[#F6F5F5] max-w-[1440px] mx-auto px-4 sm:px-20 pt-10 sm:pt-20">
      <div className="flex flex-col justify-start text-start py-10">
        {children}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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

export default Products;
