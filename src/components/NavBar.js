import React, { Fragment } from "react";

function NavBar(props) {
  return (
    <nav className="z-10 justify-center p-5 text-gray-200 bg-gray-800 content-center">
      <ul className="flex flex-row justify-center">
        <li className="px-4 hover:text-green-200 cursor-pointer">Home</li>
        <li className=" px-4 hover:text-green-200 cursor-pointer">Projects</li>
        <li className="px-4 hover:text-green-200 cursor-pointer">Resume</li>
      </ul>
    </nav>
  );
}

export default NavBar;
