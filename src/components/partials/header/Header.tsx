"use client"
import "./header.css";
import {
  FaFacebook,
  FaGithub,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { IoChatboxSharp } from "react-icons/io5";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import MobileNav from "./MobileNav";
// import AiChat from "./AiChat";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav(!openNav);
  }
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Projects", path: "/projects" },
    { name: "Case Studies", path: "/case-studies" },
  ];
  return (
    <header className="text-slate-50 p-4">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2 items-center border-2 px-4 py-1 rounded border-white">
            <FaReact size={20} className="font-extrabold animate-spin" />
            <h1 className="font-bold text-[14px] ">NDERITU</h1>
          </div>
        </Link>
        <ul className="navLinks md:flex gap-6 hidden">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-slate-300">
              <Link to={link.path} className="relative  text-blue-400 font-bold transition-colors duration-300 hover:text-white
                         after:content-[''] after:absolute after:left-0 after:bottom-0
                         after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300
                         hover:after:w-full">{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="text-white gap-4 md:flex hidden">
          <div>
            <FaGithub size={20} className="hover:text-gray-400" />
          </div>
          <div>
            <FaTwitter size={20} className="hover:text-slate-600" />
          </div>
          <div>
            <FaFacebook size={20} className="hover:text-blue-500" />
          </div>
          <div>
            <IoIosChatboxes size={20} className="hover:text-blue-500" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white relative text-slate-900  py-0.51 px-4 rounded flex items-center gap-4">
            Let Talk
            <IoChatboxSharp />
            {/* <AiChat/> */}
          </button>

          <HiOutlineBars3BottomRight onClick={handleClick} size={40} className="md:hidden" />
          {/* {
            !openNav &&
            // <MobileNav />
          } */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
