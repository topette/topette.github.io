import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import { TopetteLogo } from "../assets/TopetteLogo";
import { GiHamburgerMenu } from "react-icons/gi";

export const Menu = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-2 sticky top-0 bg-topettefondo z-50 w-full backdrop-blur-md bg-opacity-80">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <Link spy smooth to={"header"} offset={-100} onClick={showMenu}>
          <TopetteLogo className="cursor-pointer ml-12" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={showMenu}
          className="duration-300 text-white flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className="">
          <ul
            className={
              !active
                ? "hidden lg:block lg:flex-grow text-white duration-300"
                : "block lg:flex-grow text-white duration-300"
            }
          >
            <Link
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to={"header"}
              onClick={showMenu}
            >
              <li className="menutopette">Top</li>
            </Link>
            <Link spy smooth to={"proyectos"} onClick={showMenu}>
              <li className={click ? "" : "menutopette"}>Projects</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to={"estudios"}
              onClick={showMenu}
            >
              <li className="menutopette">Education</li>
            </Link>
            <Link
              spy
              smooth
              offset={-50}
              duration={500}
              to={"experiencia"}
              onClick={showMenu}
            >
              <li className="menutopette">Experience</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to={"contacto"}
              onClick={showMenu}
            >
              <li className="menutopette">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
