import React from "react";
import { Link } from "react-router-dom";
import CDlogo from "../../images/CDlogo.png";

export default function CDbutton() {
  return (
    <Link to="/projects/cd">
      <button className="p-6 m-8 rounded-lg bg-yellow-300 border-green-400 border-2">
        <img className="h-24 rounded-full" src={CDlogo} alt="Code Display" />
      </button>
    </Link>
  );
}
