import { Link } from "react-router-dom";
import ScrollVelocity from "../ScrollVelocity";
 const navLinks = [
   { name: "Process", path: "/process" },
   { name: "Projects", path: "/projects" },
   { name: "About", path: "/about" },
   { name: "Blog", path: "/blogs" },
   { name: "Case Studies", path: "/case-studies" },
 ];
const Footer = () => {
  const Velocity = 20
  return (
    <footer className="relative bg-slate-900 min-h-[50vh] text-white  py-4">
      <div className="mx-4 flex justify-between items-start">
        <div className="text-start">
          <img
            src=""
            alt=""
            className="min-h-30 min-w-30 rounded bg-slate-800"
          />
          <h1>JEREMIAH NDERITU</h1>
          <p>BSC. SOFTWARE ENGINEERING</p>
          <p>KIRINYAGA UNIVERSITY</p>
        </div>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-slate-300">
              <Link
                to={link.path}
                className="relative  text-slate-600 font-bold transition-colors duration-300 hover:text-white
                       ">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ScrollVelocity
        texts={["", "JEREMIAH - NDERITU - BACKEND - DEVELOPER"]}
        velocity={Velocity}
        className=" text-slate-500"
      />
      <h1 className="text-slate-50 m-2 bottom-18 right-2 text-[clamp(0.51em,5vw,1.5em)] absolute text-end">
        copyright &copy; {new Date().getFullYear()} JEFF M NTONGAI. ARRIBION
        TECHNOLOGIES. CODNIFY.DEV
      </h1>
    </footer>
  );
};

export default Footer;
