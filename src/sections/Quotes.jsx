import figureImage from "../assets/img/img(5).png";
import quotesImage from "../assets/Icon/quotes.svg";

const Quotes = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-20 pt-10 sm:pt-20 flex flex-col sm:flex-row relative px-4 sm:px-20 py-10 sm:py-20 font-montserrat uppercase bg-gradient-to-bl from-[#BB1117] to-[#EC3339]">
      <div className="text-center sm:text-left">
        <div className="text-white text-xl sm:3xl  lg:text-3xl xl:5xl  space-y-2 sm:space-y-2">
          <p className="text-start lg:w-[900px] ">
            Our mission is to enlighten, entertain <br /> and empower current
            and future <br /> leaders around the world.
          </p>
        </div>
      </div>
      <img
        src={quotesImage}
        alt=""
        className="absolute top-2 left-2 sm:-top-2 sm:left-2"
        width={100}
        sm-width={150}
      />
      <img
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        src={figureImage}
        alt=""
        className="hidden sm:block absolute md:right-10 lg:right-4 sm:right-12 xl:right-[100px] -top-[84px]"
        width={300}
      />
    </section>
  );
};

export default Quotes;
