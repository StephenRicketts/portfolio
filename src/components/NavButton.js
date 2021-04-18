import React from "react";

export default function NavButton(props) {
  return (
    <button className="p-4  border-b-2 border-gray-800 hover:text-green-300 hover:border-green-300 focus:border-green-300 focus:text-green-300 cursor-pointer focus:outline-none transition duration-150 ease-in-out">
      {props.children}
    </button>
  );
}
