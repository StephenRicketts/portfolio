import React from "react";

export default function WGInfo() {
  return (
    <div>
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
    </div>
  );
}
