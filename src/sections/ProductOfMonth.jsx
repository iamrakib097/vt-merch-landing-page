import topArrow from "../assets/Icon/topArrow.svg";
import downArrow from "../assets/Icon/downArrow.svg";
import bagClose from "../assets/img/bag_white_back.png";
import bagTopOpen from "../assets/img/img(6).png";
import bagSideOpen from "../assets/img/img(12).png";
import bagSideView from "../assets/img/img(4).png";
import ButtonLong from "../ui/ButtonLong";
import FacebookIcon from "../ui/FacebookIcon";
import InstagramIcon from "../ui/InstagramIcon";
import TwitterIcon from "../ui/TwitterIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

const styles = {
  heading: {
    color: "black",
    WebkitTextFillColor: "white", // Will override color
    WebkitTextStroke: "1px black",
  },
};

const ProductOfMonth = () => {
  return (
    <section className="flex flex-col px-10 items-center pb-10 gap-6 max-w-[1440px] mx-auto sm:px-20 pt-10 sm:pt-20 bg-[#F6F5F5]">
      <div>
        <h1 className="text-4xl sm:text-6xl font-mono tracking-wide uppercase">
          Product of <span style={styles.heading}>the month</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center xl:flex-row gap-4 w-full">
        <div className="flex  items-center sm:flex-row gap-6 w-full sm:w-auto">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src={topArrow}
              alt="Top Arrow"
              width={20}
              className="sm:w-auto"
            />
            <img
              src={bagClose}
              alt="Bag Close"
              width={100}
              className="bg-white rounded-lg"
            />
            <img
              src={bagTopOpen}
              alt="Bag Top Open"
              width={100}
              className="bg-white rounded-lg"
            />
            <img
              src={bagSideOpen}
              alt="Bag Side Open"
              width={100}
              className="bg-white rounded-lg"
            />
            <img
              src={bagSideView}
              alt="Bag Side View"
              width={100}
              className="bg-white rounded-lg"
            />
            <img
              src={downArrow}
              alt="Down Arrow"
              width={20}
              className="sm:w-auto"
            />
          </div>
          <div className="w-full sm:w-[527px]">
            <img src={bagClose} alt="Bag Close Large" width="100%" />
          </div>
        </div>
        <div className="font-montserrat max-w-[600px] text-[#060606] space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Premium Valuetainment Leather Backpack
          </h3>
          <p className="text-sm">
            The attention to detail is evident in every aspect of this backpack.
            From the sturdy hardware and reinforced stitching to the smooth
            zippers and luxurious lining, no detail has been overlooked.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-[#272312]">
            Price:<span className="text-[#EA2127]">$199.95</span>
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-4">
            <p>Size:</p>
            <div className="border-[1px] border-black flex flex-wrap">
              <button className="py-1 px-2 border-r-[1px] border-black">
                S
              </button>
              <button className="py-1 px-2 border-r-[1px] border-black">
                M
              </button>
              <button className="py-1 px-2 border-r-[1px] border-black">
                L
              </button>
              <button className="py-1 px-2 border-r-[1px] border-black">
                XL
              </button>
              <button className="py-1 px-2 border-black">XXL</button>
            </div>
          </div>
          <div className="space-y-2">
            <div>Quantity:</div>
            <div className="border-[1px] border-black inline-flex">
              <div className="px-3 py-1 border-r-[1px] border-black">-</div>
              <div className="px-3 py-1 border-r-[1px] border-black">1</div>
              <div className="px-3 py-1">+</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonLong
              bg="transparent"
              bd={true}
              fc="black"
              text="Add to Cart"
            />
            <ButtonLong bg="black" bd={false} fc="white" text="buy it now" />
          </div>
          <div className="inline-flex justify-center items-center gap-2">
            <p>Share:</p>
            <div className="flex gap-2">
              <button>
                <FacebookIcon color="#060606" />
              </button>
              <button>
                <TwitterIcon color="#060606" />
              </button>
              <button>
                <LinkedinIcon color="#060606" />
              </button>
              <button>
                <InstagramIcon color="#060606" />
              </button>
            </div>
          </div>
          <div className="text-start">
            <div className="py-1 border-b-[1px] border-black inline-block">
              <a href="#">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOfMonth;
