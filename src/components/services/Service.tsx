import React from "react";
import HoverCard from "./HoverCard";
import explore_img_1 from "../../assets/nature-laptop1.png";
import explore_img from "../../assets/nature-laptop2.png";

const ServiceGrid: React.FC = () => {
  return (
    <section className="my-24 md:my-40 flex justify-center relative px-4">
      {/* Decorative images: hide on small screens to avoid overflow */}
      <img
        src={explore_img}
        alt=""
        className=" -top-30 -right-[3em] absolute md:-top-48 md:right-8 w-[18em] md:w-120 pointer-events-none"
      />

      <div className="w-full max-w-7xl">
        {/* Responsive grid:
            - 1 column on mobile
            - 2 columns on md
            - 4 columns on lg
            Hero card spans 2 cols and 2 rows on md+ to keep it prominent.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 auto-rows-fr">
          {/* Hero Card */}
          <div
            className="md:col-span-2 lg:col-span-2 md:row-span-2"
            data-aos="zoom-in-right">
            <HoverCard
              title="Landing Page Development"
              description="Craft high-converting landing pages that blend sleek design with optimized user journeys. From engaging layouts to responsive performance, I build pages that capture attention and drive measurable results."
            />
          </div>

          {/* 2nd card */}
          <div className="md:col-span-1 lg:col-span-1" data-aos="zoom-out-up">
            <HoverCard
              title="Cross-Platform Mobile Development (Flutter / React Native)"
              description="Deliver seamless mobile experiences across iOS and Android. I create fast, scalable apps that feel native and keep users engaged everywhere."
            />
          </div>

          {/* 3rd card */}
          <div className="md:col-span-1 lg:col-span-1" data-aos="fade-up-left">
            <HoverCard
              title="Web Design"
              description="Design modern, responsive websites that balance aesthetics with usability."
            />
          </div>

          {/* 4th card */}
          <div className="md:col-span-2 lg:col-span-2" data-aos="fade-up-left">
            <HoverCard
              title="Software Design & Development With AI Integrations"
              description="Build intelligent software solutions powered by AI. From automation to predictive analytics, we integrate cutting-edge machine learning into your workflows to unlock efficiency and innovation."
            />
          </div>
        </div>
      </div>

      <img
        src={explore_img_1}
        alt=""
        className="hidden md:block absolute md:-bottom-48 md:left-8 w-40 md:w-120 pointer-events-none"
      />
    </section>
  );
};

export default ServiceGrid;
