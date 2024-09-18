import logo from "../assets/Icon/logo.svg";
import ButtonLong from "../ui/ButtonLong";
import telephone from "../assets/Icon/telephone.svg";
import email from "../assets/Icon/email.svg";
import americalExpress from "../assets/Icon/american-express.svg";
import amex from "../assets/Icon/amex.svg";
import applePay from "../assets/Icon/apple-pay.svg";
import dinersClub from "../assets/Icon/diners_club.svg";
import paypal from "../assets/Icon/paypal.svg";
import visa1 from "../assets/Icon/visa1.svg";
import visa2 from "../assets/Icon/visa2.svg";
import FacebookIcon from "../ui/FacebookIcon";
import TwitterIcon from "../ui/TwitterIcon";
import InstagramIcon from "../ui/InstagramIcon";
import LinkedinIcon from "../ui/TwitterIcon";
const Footer = () => {
  return (
    <footer className="flex flex-col max-w-[1440px] mx-auto  pt-10 sm:pt-20 px-5 md:px-20 bg-black text-white gap-10">
      <div className="flex items-center border-b-[1px] border-white pb-10 space-x-4 ">
        <img src={logo} alt="" className="w-[50px] md:w-[112px]" />
        <h1 className="text-5xl md:text-8xl font-semibold tracking-wide font-montserrat">
          VTMERCH
        </h1>
      </div>
      <div className="flex flex-col justify-evenly gap-10 lg:flex-row">
        <div className="flex flex-col flex-1 space-y-6">
          <p className="font-montserrat">
            Subscribe and be the first to receive notifications about our
            upcoming releases and the latest news.{" "}
          </p>
          <input
            type="text"
            name="text"
            placeholder="Enter you email"
            className=" text-center bg-transparent px-20 border-[1px] border-white border-opacity-50 rounded-lg py-2 outline-none"
          />
          <ButtonLong text="Subscribe" bg="white" />
        </div>
        <div className="flex-1 flex flex-col gap-4 font-inter">
          <p className="text-xl">Customer Services</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Search</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Refund policy</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4 font-inter">
          <p className="text-xl">Products</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#">Featured products</a>
            </li>
            <li>
              <a href="#">Bestseller</a>
            </li>
            <li>
              <a href="#">Latest product</a>
            </li>
            <li>
              <a href="#">All collections</a>
            </li>
            <li>
              <a href="#">All products</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-4 font-inter">
          <p className="text-xl">Contact Us</p>
          <ul className="space-y-4 text-sm">
            <li>
              <p>
                Available between 8AM to 8PM. Ready to answer your questions.
              </p>
            </li>
            <li className="flex gap-2">
              <img src={telephone} alt="" />
              <p>013456789</p>
            </li>
            <li className="flex gap-2">
              <img src={email} alt="" />
              <p>store@valuetainment.com</p>
            </li>
            <li>
              <div className="flex gap-2">
                <FacebookIcon color="white" />
                <TwitterIcon color="white" />
                <LinkedinIcon color="white" />
                <InstagramIcon color="white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center mt-20 py-5">
        <p>© 2024 Valuetainment Store. All rights reserved.</p>
        <div className="flex gap-2">
          <img src={visa1} alt="" />
          <img src={applePay} alt="" />
          <img src={dinersClub} alt="" />
          <img src={visa2} alt="" />
          <img src={amex} alt="" />
          <img src={paypal} alt="" />
          <img src={americalExpress} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
