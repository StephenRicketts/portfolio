import React from "react";
import NavButton from "./NavButton";
import { HashLink } from "react-router-hash-link";
function NavBar() {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full justify-center text-gray-200 bg-gray-800 content-center">
      <ul className="flex flex-row justify-center">
        <li className="mx-1">
          <HashLink smooth to="/#top">
            <NavButton>Home</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <HashLink
            smooth
            to="/#portfolio"
            scroll={(el) => scrollWidthOffset(el)}
          >
            <NavButton>Portfolio</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <HashLink smooth to="/#skills">
            <NavButton>Skills</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <NavButton>About</NavButton>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
