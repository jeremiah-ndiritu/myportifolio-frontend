
import testimonials from "../../constants/testimonials";
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom";
// import "./testimonial.css"
const Testimonials = () => {
  return (
    <section className="my-20 px-4 min-h-[55vh] ">
      <h1 className="text-center text-slate-800 text-[clamp(1em,4vw,2.5em)] ">
        WHAT PEOPLE SAY ABOUT ME
      </h1>
      <p className="text-center text-slate-700"></p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mt-12">

          {
            testimonials.map((test) => (
                <div key={test.id} className=" border hover:text-purple-500 relative hover:shadow-2xl hover:shadow-purple-950/70 border-slate-700 min-h-[10em] rounded p-2 max-w-200 text-slate-500">
                <Link to="#" className="group hover:text-purple-500">
                  <h1 className="font-semibold"> {test.name} </h1>
                </Link>
                <p className="text-slate-800">{ test.occuption }</p>
                  <div className="flex gap-4 mt-6 absolute bottom-2">
                    <FaStar color="white" className=""/>
                    <FaStar color="white" className=""/>
                    <FaStar color="white" className=""/>
                    <FaStar color="white" className=""/>
                    <FaStar color="white" className=""/>
                  </div>
                </div>
            ))
          }
      </div>
    </section>
  );
}

export default Testimonials
