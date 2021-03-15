import React from "react";
import NavButton from "./NavButton";
function NavBar() {
  return (
    <nav className="fixed w-full justify-center text-gray-200 bg-gray-800 content-center">
      <ul className="flex flex-row justify-center">
        <li className="mx-1">
          <NavButton>Home</NavButton>
        </li>
        <li className="mx-1">
          <NavButton>Portfolio</NavButton>
        </li>
        <li className="mx-1">
          <NavButton>About</NavButton>
        </li>
        <li className="mx-1">
          <NavButton>Skills</NavButton>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
