import Button from "../ui/Button";
import signature from "../assets/img/pat-signature.png";
import redBook from "../assets/img/img(1).png";
import whiteBook from "../assets/img/img(8).png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
const Collection = () => {
  const collectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: collectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={collectionRef}
      className="max-w-[1440px] mx-auto  pt-10 sm:pt-20 bg-black px-4 sm:px-20 py-10 sm:py-20 font-montserrat flex flex-col sm:flex-row overflow-x-clip"
    >
      <div
        className="sm:w-1/2"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div className="text-white text-xl sm:text-3xl tracking-widest">
          Patrick Bet-David's
        </div>
        <div className="mt-4 sm:mt-6">
          <h2 className="text-white text-3xl sm:text-5xl font-bold leading-[40px] sm:leading-[60px] mt-4 sm:mt-6">
            <span className="bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] text-transparent bg-clip-text">
              Signed
            </span>
            <br />
            <span className="bg-gradient-to-b from-[#EF5256] to-[#DE2A2F] text-transparent bg-clip-text">
              Collection
            </span>
          </h2>
        </div>
        <div className="mt-4 sm:mt-6">
          <Button text="Shop now" />
        </div>
        <img src={signature} alt="" className="mt-6 w-40 sm:w-auto" />
      </div>

      <motion.div
        animate={{
          translateY: [-30, 30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
          ease: "easeInOut",
        }}
        className=" relative sm:w-1/2 flex justify-center  sm:-space-x-20 sm:justify-center items-center mt-10 sm:mt-0 "
      >
        <img
          src={redBook}
          alt=""
          className="w-[200px] sm:w-[280px] xl:w-[300px] max-w-screen-sm  -mr-6 sm:-mr-12 md:mr-10"
        />
        <img
          src={whiteBook}
          alt=""
          className="w-[180px]  sm:w-[210px] max-w-screen-sm "
        />
      </motion.div>
    </section>
  );
};

export default Collection;
