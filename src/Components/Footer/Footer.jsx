import React from "react";
import FacebookIMG from "../../assets/facebook.png"
import InstagramIMG from "../../assets/instagram.png"
import TwitterIMG from "../../assets/twitter.png"

const Footer = () => {
  return (
    <div className="max-w-400 mx-auto bg-[#101727] text-white p-10">
      {/* Upper */}
      <div className="max-w-300 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-center md:text-start">
        <div>
          <h1 className="text-4xl font-bold">DigiTools</h1>
          <p className="text-[14px] font-light opacity-80 mt-4 ">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div>
            <h1 className="font-semibold text-2xl">Products</h1>
            <ul className="font-light space-y-3 mt-2">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integration</li>
            </ul>
        </div>
        <div>
            <h1 className="font-semibold text-2xl">Company</h1>
            <ul className="font-light space-y-3 mt-2">
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Press</a></li>
            </ul>
        </div>
        <div>
            <h1 className="font-semibold text-2xl">Resources</h1>
            <ul className="font-light space-y-3 mt-2">
                <li><a href="">Documentation</a></li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Community</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div>
            <h1 className="font-semibold text-2xl">Social Links</h1>
            <div className="flex gap-3 items-center justify-start mt-4">
                <img className="cursor-pointer" src={InstagramIMG} alt="" />
                <img className="cursor-pointer" src={FacebookIMG} alt="" />
                <img className="cursor-pointer" src={TwitterIMG} alt="" />
            </div>
        </div>
      </div>
      {/* Lower */}
      <div className="max-w-300 mx-auto text-[#FAFAFA] opacity-60 flex justify-between mt-15 border-t border-gray-300 pt-4">
        <h4>© 2026 Digitools. All rights reserved.</h4>
        <ul className="flex items-center justify-center gap-5">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
            <li><a href="">Cookies</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
