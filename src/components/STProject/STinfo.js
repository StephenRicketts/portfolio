import React from "react";
import Gallery from "../Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function STinfo() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" mt-32 py-32 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-gray-200 bg-gray-700 border-green-300 border-2 rounded-lg">
        <h1 className=" text-center text-indigo-400 text-3xl">
          SeonTaste Website
        </h1>
        <div className="pt-4 w-1/2 mx-auto">
          <h2 className="text-center">
            Technologies:
            <br /> <span className=" text-blue-300">React</span>,{" "}
            <span className="text-indigo-300">Tailwind CSS</span>,{" "}
            <span className="text-yellow-300">Figma</span>{" "}
          </h2>
        </div>
        <div className="text-center">
          <p className="pb-8 pt-24 px-14 text-justify mx-auto">
            This project is part of a freelance contract with a start-up called
            SeonVision. I was hired to code the front-end of their website to
            React using a Figma mock-up.
          </p>
        </div>
        <div className="text-center lg:hidden">
          <p className="pb-4">Check out some screenshots below</p>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-20 mx-auto">
        <Gallery project="ST" />
      </div>
    </div>
  );
}
