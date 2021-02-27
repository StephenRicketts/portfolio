import React from "react";

export default function MainButton(props) {
  return (
    <button className="text-green-200 py-2 px-4 border-2 border-green-200">
      {props.children}
    </button>
  );
}
