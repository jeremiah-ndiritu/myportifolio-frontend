import useTheme from "@/hooks/useTheme";
import ScrollVelocity from "../ScrollVelocity";

const Footer = () => {
  const { theme } = useTheme();
  const Velocity = 20;
  return (
    <footer className="relative min-h-[50vh] bg-surface-raised py-4 text-fg">
      <div className="mx-4 flex items-start justify-between">
        <div className="text-start">
          <img
            src="passport-logo.svg"
            alt="Logo"
            className="min-h-30 min-w-30 rounded bg-surface"
          />
          <h1 className="mt-2 text-fg">JEREMIAH NDIRITU</h1>
          <p className="text-muted">BSC. SOFTWARE ENGINEERING</p>
          <p className="text-muted">KIRINYAGA UNIVERSITY</p>
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
        className="text-muted"
      />
      <h1 className="absolute bottom-18 right-2 m-2 text-end text-[clamp(0.51em,5vw,1.5em)] text-fg">
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
