import React from "react";
import Gallery from "../Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function WGInfo() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" mt-32 py-16 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-gray-200 bg-gray-700 border-green-300 border-2 rounded-lg">
        <h1 className=" text-center text-indigo-400 text-3xl">
          Writer's Guild
        </h1>
        <div className="pt-4 w-1/2 mx-auto">
          <h2 className="text-center">
            Technologies:
            <br /> <span className=" text-blue-300">React</span>,{" "}
            <span className="text-purple-300">TailwindCSS</span>,{" "}
            <span className="text-red-400">Firebase</span>
          </h2>
        </div>
        <p className="py-8 px-14 mx-auto">
          Writer's Guild is a React App I built to be used in the browser.
          Writer's Guild provides amateur authors with a space to write, share
          their work, and allows feedback from other writers. The backend and
          user authentication is built using Firebase. Styling is done with
          Tailwind css. Writer's guild includes an embedded text editor called
          TinyMCE that allows for easy and convenient creation of spell checked
          and formatted text documents.
        </p>
        <h2 className="text-center pb-4">
          View the github repository{" "}
          <a href="https://github.com/StephenRicketts/writers-guild-production">
            <u className="text-blue-600">here.</u>
          </a>{" "}
        </h2>
        <h2 className="text-center pb-4">
          Writer's Guild is hosted{" "}
          <a href="https://writers-guild.ca/">
            <u className="text-blue-600">here.</u>
          </a>
        </h2>
        <div className="text-center lg:hidden">
          <p className="pb-4">Check out some screenshots below</p>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-20 mx-auto">
        <Gallery project="WG" />
      </div>
    </div>
  );
}
