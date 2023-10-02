//import Sidebar from "./Sidebar";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
//sidebar
import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const iconItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorite" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
    { icon: <AiFillTag size={25} className="mr-4" />, text: "Promotion" },
    { icon: <BsFillSaveFill size={25} className="mr-4" />, text: "Best One" },
    {
      icon: <FaUserFriends size={25} className="mr-4" />,
      text: "Invite Friends",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center ">
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Amazing <span className="font-bold">Eats</span>
      </h1>

      <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
        <p className="bg-black text-white rounded-full p-2">Delivery</p>
        <p className="p-2">Pickup</p>
      </div>

      {/*Search Input*/}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/*Cart Button*/}
      <button className="bg-black text-white hidden md:flex items-center px-3 py-3 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/*sidebar content*/}
      <div>
        {/*Overlays */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Amazing <span className="font-bold">Eats</span>
          </h2>
          <nav>
            <ui className="flex flex-col p-4 text-gray-800">
              {iconItems.map((item, index) => (
                <li className="text-xl flex py-4" key={index}>
                  {item.icon} {item.text}
                </li>
              ))}
            </ui>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
