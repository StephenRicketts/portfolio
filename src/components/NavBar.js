import React from "react";
import NavButton from "./NavButton";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
function NavBar() {
  const portfolioScrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const skillsScrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = 40;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full justify-center z-10 text-gray-200 bg-gray-800 content-center">
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
            scroll={(el) => portfolioScrollWidthOffset(el)}
          >
            <NavButton>Portfolio</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <HashLink
            smooth
            to="/#skills"
            scroll={(el) => skillsScrollWidthOffset(el)}
          >
            <NavButton>Skills</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <HashLink smooth to="/#about">
            <NavButton>About</NavButton>
          </HashLink>
        </li>
        <li className="mx-1">
          <Link to="/resume">
            <NavButton>Resume</NavButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
