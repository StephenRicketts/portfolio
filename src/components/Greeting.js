import React from "react";
import MainButton from "./MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

function Greeting(props) {
  return (
    <div className="flex flex-col content-between p-6 w-2/4 h-2/4 m-auto my-24 border-green-200 bg-gray-900 border-2">
      <div className="flex-1">
        <h1 className="p-4 text-2xl text-center text-green-200">
          Hello, I'm{" "}
          <span className="text-indigo-400 text-3xl">Stephen Ricketts.</span>
          <br />
          I'm a full-stack developer.
        </h1>
      </div>
      <div className="p-4 m-auto">
        <MainButton>
          View my work <FontAwesomeIcon icon={faAngleDoubleRight} />
        </MainButton>
      </div>
    </div>
  );
}

export default Greeting;
