import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { logo } from "../Assets/images";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between py-3 px-6 border-b bg-white">
      {/* left side */}
      <div className="flex items-center gap-4">
        <IoMenuOutline className="w-7 h-7 text-gray-600" />
        <div className="w-12 h-[2rem] flex rounded-[0.5rem] ">
          <img
            src={logo.gmail}
            alt="gmail"
            className="object-cover w-full h-full rounded-lg"
          ></img>
        </div>
        <p className="text-xl font-semibold text-gray-600">Gmail</p>
      </div>
      {/* searchbar */}
      <div className="hidden lg:block w-full  ">
        <div className="flex items-center mx-auto max-w-[20rem] relative   ">
          <input
            type="search"
            className="bg-slate-200 py-1 rounded-full w-full  pl-5 outline-0"
            placeholder="Search"
          />
          <div className="bg-[#98d4fa] absolute right-0 p-2 rounded-r-full ">
            <FiSearch className=" mr-1" />
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex items-center  gap-3">
        <GrAppsRounded classN ame="w-6 h-6 text-[#98d4fa]" />{" "}
        <div className="flex items-center gap-3 border-2 rounded-full border-[#98d4fa]">
          <div className="w-[35px] h-[35px] flex p-[2px] bg-[#98d4fa] rounded-full">
            <img
              src={logo.profile}
              alt=""
              className="object-cover rounded-full"
            />
          </div>
          <p className="whitespace-nowrap font-semibold text-[18px] pr-2">
            Avinash 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
