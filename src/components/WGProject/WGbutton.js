import React from "react";
import { Link } from "react-router-dom";
import WGlogo from "../../images/WGlogo.png";

export default function WGbutton() {
  return (
    <Link to="/projects/wg">
      <button className="p-6 m-8 rounded-lg bg-blue-400 border-green-300 border-2">
        <img className="h-24 " src={WGlogo} alt="Writer's Guild" />
      </button>
    </Link>
  );
}
