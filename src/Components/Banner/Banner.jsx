import React from "react";
import PlayIMG from "../../assets/Play.png";
import BannerIMG from "../../assets/banner.png";
import CircleIMG from "../../assets/circle.png";

const Banner = () => {
  return (
    <div className="max-w-300 mx-auto flex gap-10 flex-col-reverse md:flex-row justify-between items-center mt-10 md:mt-21.25 p-4">
      {/* Banner Left */}
      <div className=" space-y-4">
        <div className="flex items-center justify-center md:justify-start">
          <h3 className="inline-flex gap-2 items-center text-[#7724f8] bg-[#7724f830] px-4 py-2 rounded-full font-medium">
            {" "}
            <img src={CircleIMG} />
            New: AI-Powered Tools Available
          </h3>
        </div>
        <h1 className="text-center md:text-left font-extrabold text-4xl  md:text-[4.5rem]">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-[#627382] text-[1.125rem] text-center md:text-left">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br />
          Explore Products
        </p>
        <div className="flex gap-3 items-center justify-center md:justify-start">
          <button className="btn btn-primary rounded-full">
            Explore Products
          </button>
          <button class="btn btn-outline btn-primary border-2 rounded-full">
            {" "}
            <img src={PlayIMG} alt="" /> Watch Demo
          </button>
        </div>
      </div>
      {/* Banner Right */}
      <div>
        <img
          className="max-w-75 md:max-w-100 lg:max-w-125 max-h-147.5 shadow-lg"
          src={BannerIMG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
