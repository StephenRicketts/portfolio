import React from "react";
import Gallery from "../Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function STinfo() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" mt-32 py-16 w-4/5 md:w-3/5 lg:w-1/3 m-auto text-gray-200 bg-gray-700 border-green-300 border-2 rounded-lg">
        <h1 className=" text-center text-indigo-400 text-3xl">Code Display</h1>
        <div className="pt-4 w-1/2 mx-auto">
          <h2 className="text-center">
            Technologies:
            <br /> <span className=" text-blue-300">React</span>,{" "}
            <span className="text-purple-300">Bulma</span>,{" "}
            <span className="text-red-400">ESBuild</span>,{" "}
            <span className="text-indigo-400">Lerna</span>,{" "}
            <span className="text-yellow-400">Commander</span>
          </h2>
        </div>
        <div className="text-center">
          <p className="py-8 px-14 text-justify mx-auto">
            Code display is a command-line interface for a browser based
            interactive coding environment. It uses ESbuild to bundle, execute,
            and display JavaScript code you have written in the browser. There
            is also a built in text editor that allows the user to document
            their code while they write it.
          </p>
          <h2>Try it out on the command line by running:</h2>
          <h2 className="text-green-300 py-4">npx codedisplay serve</h2>
          <h2 className="text-center pb-4">
            View the github repository{" "}
            <a href="https://github.com/StephenRicketts/codedisplay">
              <u className="text-blue-600">here.</u>
            </a>{" "}
          </h2>
        </div>
        <div className="text-center lg:hidden">
          <p className="pb-4">Check out some screenshots below</p>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 my-20 mx-auto">
        <Gallery project="CD" />
      </div>
    </div>
  );
}
