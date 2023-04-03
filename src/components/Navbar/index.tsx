import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex fixed items-center w-full z-20 text-lg bg-primary/50 hover:bg-primary/100 transition text-white py-5 px-6">
      <div className="flex flex-1 px-28 max-md:px-0">
        <div className="flex-1 flex gap-2">
          Mantas.dev
          <a
            href="https://github.com/MantasValentin"
            target="_blank"
            className="flex items-center gap-4 hover:cursor-pointer"
          >
            <FaGithub className="text-xl button" />
          </a>
        </div>
        <ul className="flex flex-1 justify-end max-xs:hidden gap-4">
          <li className="button">
            <a href="#Hero" className="">
              Home
            </a>
          </li>
          <li className="button">
            <a href="#About" className="">
              About
            </a>
          </li>
          <li className="button">
            <a href="#Projects" className="">
              Projects
            </a>
          </li>
          <li className="button">
            <a href="#Contact" className="">
              Contact
            </a>
          </li>
        </ul>
        <div className="xs:hidden flex flex-1 justify-end items-center">
          <BiMenuAltRight
            className="text-2xl button z-20"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed z-10 top-[72px] right-0 p-4 bg-primary rounded-bl-md`}
          >
            <ul className="flex flex-1 justify-end items-start flex-col gap-4">
              <li className="button">
                <a href="#Hero" className="">
                  Home
                </a>
              </li>
              <li className="button">
                <a href="#About" className="">
                  About
                </a>
              </li>
              <li className="button">
                <a href="#Projects" className="">
                  Projects
                </a>
              </li>
              <li className="button">
                <a href="#Contact" className="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
