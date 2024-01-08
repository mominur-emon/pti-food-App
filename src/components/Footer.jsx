import { BsArrowRight } from "react-icons/bs";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-amber-500 w-full h-[320px] flex items-center justify-center relative">
      <div className="bg-slate-50 shadow rounded-md py-3 px-6 flex top-[40px] absolute">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-slate-50 outline-none text-sm w-full"
        />
        <div className="flex items-center text-red-400 font-bold text-sm ">
          <button className="mr-1 ">Subscribe</button>
          <BsArrowRight />
        </div>
      </div>
      <div className="flex items-center justify-center absolute top-[120px] ">
        <Link
          to="#"
          className="bg-orange-600 text-white p-2 text-[14px] rounded-full   "
        >
          <FaGoogle />
        </Link>
        <Link
          to="#"
          className="bg-orange-600 text-white p-2 text-[14px] rounded-full  mx-1"
        >
          <FaTwitter />
        </Link>
        <Link
          to="#"
          className="bg-orange-600 text-white p-2 text-[14px] rounded-full  "
        >
          <FaInstagram />
        </Link>
      </div>

      <div className="absolute bottom-[100px] ">
        <h1 className="text-[28px] font-bold  ">
          pti<span className="text-red-500 text-[28px] font-bold">.</span>
        </h1>
      </div>
      <div className="absolute bottom-[60px]">
        <p className="font-bold text-[14px]">
          Copyright&#169;Tripp.All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
