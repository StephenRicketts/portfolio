import React from "react";

export default function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="text-green-200 hover:bg-green-400 hover:text-gray-900 py-2 px-4 border-2 border-green-200"
    >
      {props.children}
    </button>
  );
}
