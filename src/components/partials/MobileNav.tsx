import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <header className="text-slate-50 p-4 z-50 bg-slate-950 h-screen w-full fixed top-0 left-0">
      <nav className="">
        <div className="flex justify-between p-4">
          <div className="flex gap-2 items-center">
            <h1 className="font-semibold">NTONGAI.DEV</h1>
            <IoIosArrowDown size={20} className="font-extrabold" />
          </div>
          <MdOutlineCancelPresentation size={40} />
        </div>
        <ul className="my-4">
          <li>
            <Link to="/about">Process</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about">Blog</Link>
          </li>
        </ul>
        <div className="text-white  flex gap-4 my-4">
          <div>
            <FaLinkedin size={25} className="hover:text-blue-700" />
          </div>
          <div>
            <FaGithub size={25} className="hover:text-gray-400" />
          </div>
          <div>
            <FaTwitter size={25} className="hover:text-slate-600" />
          </div>
          <div>
            <FaYoutube size={25} className="hover:text-red-600" />
          </div>
          <div>
            <FaFacebook size={25} className="hover:text-blue-500" />
          </div>
          <div>
            <IoIosChatboxes size={25} className="hover:text-blue-500" />
          </div>
        </div>
        <button className="bg-white w-100% text-slate-900 py-1 px-4 rounded">
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default MobileNav;
