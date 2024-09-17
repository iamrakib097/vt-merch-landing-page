import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroCard from "../ui/HeroCard";
// Hero Component
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
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
      image: "src/assets/img/img(9).png",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 2,
      image: "src/assets/img/img(10).png",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 3,
      image: "src/assets/img/img(11).png",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 4,
      image: "src/assets/img/img(11).jpeg",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 5,
      image: "src/assets/img/img(9).png",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
    {
      id: 6,
      image: "src/assets/img/img(10).png",
      title: "Army Green Active Short Sleeve",
      price: "$34.95",
      originalPrice: "$34.95",
    },
  ];

  return (
    <div className="relative mt-32 text-center ">
      <h1 className="absolute inset-0 z-0 font-ActOfRejection text-white text-[34px] md:text-[90px] text-opacity-30 uppercase tracking-wider sm:-top-32 lg:-top-10">
        future looks bright!
      </h1>

      <div className="relative flex md:justify-end justify-center items-center overflow-hidden ">
        <div className="w-full lg:max-w-screen-[740px] md:max-w-screen-[780px] xl:max-w-screen-[1220px]">
          <Slider {...settings} className="w-full pb-10 md: mx-10 lg:mx-40">
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
    </div>
  );
};

export default Hero;
