import React from "react";

function NavBar(props) {
  return (
    <div className="flex flex-row justify-around p-6 text-green-300 bg-gray-900 border-green-300 border-solid border-2 content-center">
      <h1 className="hover:text-white cursor-pointer">Stephen Ricketts</h1>
      <h1 className="hover:text-white cursor-pointer">Projects</h1>
    </div>
  );
}

export default NavBar;
