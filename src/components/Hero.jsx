import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/img/img(9).png";
import image2 from "../assets/img/img(10).png";
import image3 from "../assets/img/img(11).png";
import image4 from "../assets/img/img(11).jpeg";

import HeroCard from "../ui/HeroCard";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
// Hero Component
const Hero = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const settings = {
    dots: true,
    infinite: true,
    cssEase: "linear", // Ensures a smooth transition
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    prevArrow: <div className="slick-prev absolute left-2 z-10">←</div>,
    nextArrow: <div className="slick-next absolute right-2 z-10">→</div>,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      image: image1,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 2,
      image: image2,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 3,
      image: image3,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 4,
      image: image4,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 5,
      image: image1,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 6,
      image: image2,
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
  ];

  return (
    <section ref={titleRef} className="relative mt-32 text-center ">
      <motion.h1
        style={{
          translateY: translateY,
        }}
        className="absolute inset-0 z-0 font-ActOfRejection text-white text-[34px] md:text-[70px] lg:text-[90px] text-opacity-30 uppercase tracking-wider -top-16 sm:-top-20 md:top-0 lg:-top-14"
      >
        future looks bright!
      </motion.h1>

      <div className="relative flex md:justify-end justify-center items-center overflow-hidden ">
        <div className="w-full lg:max-w-screen-[740px] md:max-w-screen-[780px] xl:max-w-screen-[1220px]">
          <Slider {...settings} className="sm:w-full pb-10 md: mx-10 lg:mx-40">
            {products.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <HeroCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  originalPrice={item.originalPrice}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
