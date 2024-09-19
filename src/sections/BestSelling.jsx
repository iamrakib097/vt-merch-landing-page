import { useRef } from "react";
import Products from "../components/Products";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
const styles = {
  heading: {
    color: "black",
    WebkitTextFillColor: "white", // Will override color
    WebkitTextStroke: "1px black",
  },
};
const BestSelling = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  return (
    <Products>
      <div ref={titleRef}>
        <h1
          // style={{
          //   translateY: translateY,
          // }}
          className="text-3xl sm:text-6xl uppercase font-bold tracking-wider leading-snug sm:leading-32 font-mono"
        >
          Buy 1 get 1 Free <br />
          on <span style={styles.heading}>best selling products</span>
        </h1>
      </div>
    </Products>
  );
};

export default BestSelling;
