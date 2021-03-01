import React, { useState } from "react";
import MainButton from "./MainButton";
import WGScreenshots from "./WGScreenshots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

export default function WGProject() {
  const [showScreenShots, setShowScreenShots] = useState(false);

  var buttonIcon = showScreenShots ? faAngleDoubleUp : faAngleDoubleDown;

  return (
    <div className="h-4/5 w-4/5 mx-auto my-20 bg-gray-900 border-green-200 border-2 text-green-200">
      <h1 className="pt-4 text-center text-indigo-400 text-3xl">
        Writer's Guild
      </h1>
      <div className="pt-4 w-1/3 mx-auto">
        <h2>
          Technologies: <span className="text-yellow-400">React</span>,{" "}
          <span className="text-purple-300">TailwindCSS</span>,{" "}
          <span className="text-red-400">Firebase</span>
        </h2>
      </div>
      <p className="py-8 px-14 mx-auto">
        Writer's Guild is a React App I built to be used in the browser. It
        allows amateur authors to write, share their work, and allows feedback
        from other writers. It's backend and user authentication is built using
        firebase. Styling is done with Tailwind css. Writer's guild includes an
        embedded text editor called TinyMCE that allows for easy and convenient
        creation of spell checked and formatted text documents.
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
      <div className="pb-6 pt-4 text-center">
        <MainButton
          onClick={() => setShowScreenShots(!showScreenShots)}
          className="m-auto"
        >
          Take the Screenshot Tour <FontAwesomeIcon icon={buttonIcon} />
        </MainButton>
      </div>
      {showScreenShots && <WGScreenshots />}
    </div>
  );
}
