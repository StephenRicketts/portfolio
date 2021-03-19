import React from "react";
import CDbutton from "./CDProject/CDbutton";
import WGbutton from "./WGProject/WGbutton";

export default function Projects() {
  return (
    <div>
      <h1
        id="portfolio"
        className="text-grey-200 text-center w-3/5 md:w-1/5  m-auto text-3xl border-gray-200 border-b-2"
      >
        Recent Projects
      </h1>
      <div>
        <WGbutton />
        <CDbutton />
      </div>
      <p className="px-2">
        An exhaustive list of my projects can be found on my{" "}
        <a
          className="text-green-400"
          href="https://github.com/StephenRicketts?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repositories Page.
        </a>
      </p>
    </div>
  );
}
