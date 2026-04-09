// import plp_cert from "../../assets/certs/plp-cert.png"
// import simplilearn_cert from "../../assets/certs/simplilearn.png"
const Learning_Certs = () => {
  return (
    <section className="my-20 mx-4 px-4 min-h-screen">
      <h1 className="font-bold text-center text-slate-800 text-[clamp(1.5rem,4vw,2.5rem)]">
        LEARNING CERTIFICATIONS
      </h1>
      <p className="text-center text-slate-600 my-4">
        Discover the latest certifications and learning achievements.
      </p>
      <div className="flex justify-center">
        {/* Certification items will go here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
            <div className="w-full flex items-center justify-center p-2 bg-white/0 rounded">
              <img
                src={""}
                alt="Simplilearn certificate"
                loading="lazy"
                className="w-full h-auto "
              />
            </div>

            <div className="w-full flex items-center justify-center p-2 bg-white/0 rounded">
              <img
                src={""}
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
