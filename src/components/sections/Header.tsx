import "@css/header.css";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoChatboxSharp } from "react-icons/io5";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import useAIChatDialogue from "../../hooks/useAIChatDialogue";
import ThemeToggle from "../ui/ThemeToggle";
import { Home } from "lucide-react";
import Button from "../ui/Button";

type ExtLink = {
  href: string;
  target?: "_blank" | "_self" | `jeremiah-ndiritu-${string}` | (string & {});
  icon: ReactNode;
  title: string;
};

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
];

const socialLinks: ExtLink[] = [
  {
    href: "https://github.com/jeremiah-ndiritu",
    target: "jeremiah-ndiritu-github",
    icon: <FaGithub size={20} />,
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/jeremiah-ndiritu",
    target: "jeremiah-ndiritu-lnkdin",
    icon: <FaLinkedin size={20} />,
    title: "LinkedIn",
  },
  {
    href: "https://facebook.com",
    target: "jeremiah-ndiritu-fb",
    icon: <FaFacebook size={20} />,
    title: "Facebook",
  },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav(!openNav);
  const { setIsOpen } = useAIChatDialogue();

  return (
    <header className="sticky top-0 z-30 w-full text-primary p-4 bg-bg/70 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <div className="flex gap-2 items-center border-2 px-4 py-1 rounded border-white">
            <h1 className="font-bold text-[14px] tracking-tight">
              <Home size={20} />
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="relative text-muted font-medium transition-colors duration-300 hover:text-fg
                         after:content-[''] after:absolute after:left-0 after:-bottom-1
                         after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />

        {/* Social Icons & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target={social.target}
                title={social.title}
                className="hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => setIsOpen((p) => !p)}
              type="button"
              variant="primary"
              size="sm"
              className="rounded-full px-5"
            >
              <span>Let's Talk</span>
              <IoChatboxSharp />
            </Button>

            {/* Mobile Toggle */}
            <HiOutlineBars3BottomRight
              onClick={toggleNav}
              size={32}
              className="md:hidden cursor-pointer hover:text-primary transition-colors"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Placeholder (Example Implementation) */}
      {openNav && (
        <div className="absolute top-full left-0 w-full bg-surface-raised p-6 flex flex-col gap-4 md:hidden border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpenNav(false)}
              className="text-lg font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
