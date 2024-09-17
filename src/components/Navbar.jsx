import logo from "../assets/Logo/Valuetainment.svg";
import menu from "../assets/icon/hamburger.svg";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex gap-2 justify-center items-center ">
        <img src={logo} alt="" className="w-[34px] h-[34px]" />
        <h1 className="font-montserrat font-bold text-[32px] tracking-widest text-white">
          VTMERCH
        </h1>
      </div>
      <div className="">
        <img src={menu} alt="" className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};

export default Navbar;
