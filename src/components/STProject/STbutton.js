import React from "react";
import { Link } from "react-router-dom";

export default function STbutton() {
  return (
    <Link to="/projects/st">
      <button className="p-6 m-8 rounded-lg bg-red-500 border-green-400 border-2">
        <div className="h-24 w-24 flex items-center justify-center">
          <p className="text-white text-5xl">S|T</p>
        </div>
      </button>
    </Link>
  );
}
