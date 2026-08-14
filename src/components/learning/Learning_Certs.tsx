import plp_cert from "@/assets/certs/plp-cert.png";
import simplilearn_cert from "@/assets/certs/simplilearn.png";
const Learning_Certs = () => {
  return (
    <section className="mx-4 my-20 min-h-screen px-4">
      <h1 className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-fg">
        LEARNING CERTIFICATIONS
      </h1>
      <p className="my-4 text-center text-muted">
        Discover the latest certifications and learning achievements.
      </p>
      <div className="flex justify-center">
        {/* Certification items will go here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
            <div className="w-full flex items-center justify-center p-2 bg-white/0 rounded">
              <img
                src={simplilearn_cert}
                alt="Simplilearn certificate"
                loading="lazy"
                className="w-full h-auto "
              />
            </div>

            <div className="w-full flex items-center justify-center p-2 bg-white/0 rounded">
              <img
                src={plp_cert}
                alt="PLP certificate"
                loading="lazy"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning_Certs;
