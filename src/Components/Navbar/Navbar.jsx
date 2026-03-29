import React from "react";
import ShoppingCartIMG from "../../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm md:px-10 items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="hover:bg-primary hover:text-white font-semibold">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white font-semibold">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white font-semibold">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white font-semibold">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white font-semibold">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <h1 className="font-semibold text-3xl md:text-[3rem] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="hover:bg-primary hover:text-white font-semibold">
                Products
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white font-semibold">
                Features
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white font-semibold">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white font-semibold">
                Testimonials
              </a>
            </li>
            <li>
              <a className="hover:bg-primary hover:text-white font-semibold">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex justify-right items-center gap-3">
          <div className="relative">
            <img
              className="cursor-pointer w-5 h-5"
              src={ShoppingCartIMG}
              alt=""
            />
            <h3 className="text-white text-[10px] font-bold bg-red-600 p-1 px-2 rounded-full absolute -top-3 -right-2">
              0
            </h3>
          </div>
          <h1 className="font-semibold cursor-pointer">Login</h1>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  rounded-full">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
