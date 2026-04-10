import useTheme from "@/hooks/useTheme";
import ScrollVelocity from "../ScrollVelocity";

const Footer = () => {
  const {theme} = useTheme()
  const Velocity = 20
  return (
    <footer className="relative bg-slate-900 min-h-[50vh] text-white  py-4">
      <div className="mx-4 flex justify-between items-start">
        <div className="text-start">
          <img
            src="passport-logo.svg"
            alt="Logo"
            className="min-h-30 min-w-30 rounded bg-slate-800"
          />
          <h1>JEREMIAH NDIRITU</h1>
          <p>BSC. SOFTWARE ENGINEERING</p>
          <p>KIRINYAGA UNIVERSITY</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div>
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme={theme}
              data-type="VERTICAL"
              data-vanity="jeremiah-ndiritu"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://ke.linkedin.com/in/jeremiah-ndiritu?trk=profile-badge"
              >
                Jeremiah Ndiritu
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollVelocity
        texts={["", "JEREMIAH - NDIRITU - FULLSTACK - DEVELOPER"]}
        velocity={Velocity}
        className=" text-slate-500"
      />
      <h1 className="text-slate-50 m-2 bottom-18 right-2 text-[clamp(0.51em,5vw,1.5em)] absolute text-end">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <a href="http://arribion.com" target="arribion.com">
          ARRIBION TECHNOLOGIES
        </a>{" "}
        (with Jeff M. Ntongai)
      </h1>
    </footer>
  );
};

export default Footer;
