import React, { useState } from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";

const nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between text-xl p-5 fixed top-0 left-0 right-0 z-50 bg-background/100 backdrop-blur-md border-b border-border">
        <div className="font-extrabold text-2xl">Zaid</div>
        <div
          className={`flex flex-col md:flex-row md:items-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row gap-5">
            <div className="flex hover:underline underline-offset-2">
              <span className="text-[25px]">
                <AiOutlineHome />
              </span>
              <Link to={"/"}>Home</Link>
            </div>
            <div className="flex hover:underline underline-offset-2">
              <span className="text-[25px]">
                <AiOutlineUser />
              </span>
              <Link to={"/about"}>About</Link>
            </div>
            <div className="flex hover:underline underline-offset-2">
              <span className="text-[25px]">
                <AiOutlineFundProjectionScreen />
              </span>
              <Link to={"/project"}>Projects</Link>
            </div>
            <div className="flex hover:underline underline-offset-2">
              <span className="text-[25px]">
                <CgFileDocument />
              </span>
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </ul>
        </div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default nav;
