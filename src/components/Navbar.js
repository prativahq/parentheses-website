import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="container mx-auto overflow-hidden">
        <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <Link to="/">
                  <img
                    src="images/Parentheses-Logo-png-1704447778153.webp"
                    alt=""
                  />
                </Link>
              </div>
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-16">
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <Link to="/aisolutionsdraft">AI Solutions</Link>
                  </li>
                  <li className="mr-9 font-medium hover:text-gray-700">
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  {/* <li className="font-medium hover:text-gray-700">
                    <a href="#Team">Team</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <a
                    href="#Contact"
                    className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-pink-300 bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-200"
                  >
                    <button type="button">Contact us</button>
                  </a>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(!open)} className="w-auto lg:hidden">
              <svg
                className="navbar-burger text-indigo-600"
                width={51}
                height={51}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={28} fill="currentColor" />
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* navbar-menu */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img
                      src="images/Parentheses-Logo-png-1704447778153.webp"
                      alt=""
                    />
                  </a>
                </div>
                <button onClick={() => setOpen(!open)} className="w-auto p-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#111827"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                <li className="mb-12">
                  <Link
                    className="font-medium hover:text-gray-700"
                    to={"/services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-12">
                  <Link
                    className="font-medium hover:text-gray-700"
                    to={"/aisolutionsdraft"}
                  >
                    AI Solutions
                  </Link>
                </li>
                <li className="mb-12">
                  <Link className="font-medium hover:text-gray-700" to="/blogs">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="block">
                    <button
                      className="py-2.5 px-4 text-base w-full font-medium border border-gray-400 hover:border-gray-500 rounded-xl focus:ring focus:ring-gray-50 bg-white hover:bg-gray-50 transition ease-in-out duration-200"
                      type="button"
                    >
                      Join free for 30 days
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
