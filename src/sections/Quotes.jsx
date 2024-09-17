import figureImage from "../assets/img/img(5).png";
import quotesImage from "../assets/Icon/quotes.svg";
const Quotes = () => {
  return (
    <section className="flex relative px-20 py-20 font-montserrat uppercase bg-gradient-to-bl from-[#BB1117] to-[#EC3339]">
      <div>
        <div className="text-white text-4xl space-y-2">
          <p>Our mission is to enlighten, entertain</p>
          <p>and empower current and future </p>
          <p>leaders around the world.</p>
        </div>
      </div>
      <img
        src={quotesImage}
        alt=""
        className="absolute -top-2 left-2"
        width={150}
      />
      <img
        src={figureImage}
        alt=""
        className="absolute right-20 -top-[84px]"
        width={300}
      />
    </section>
  );
};

export default Quotes;
