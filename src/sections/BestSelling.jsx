import { useRef } from "react";
import Products from "../components/Products";
import { section } from "framer-motion/client";

const styles = {
  heading: {
    color: "black",
    WebkitTextFillColor: "white", // Will override color
    WebkitTextStroke: "1px black",
  },
};
const BestSelling = () => {
  return (
    <Products>
      <div>
        <h1 className="text-3xl sm:text-6xl uppercase font-bold tracking-wider leading-snug sm:leading-32 font-mono">
          Buy 1 get 1 Free <br />
          on <span style={styles.heading}>best selling products</span>
        </h1>
      </div>
    </Products>
  );
};

export default BestSelling;
