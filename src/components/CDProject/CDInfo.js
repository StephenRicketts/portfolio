import React from "react";

export default function WGinfo() {
  return (
    <div className="h-4/5 w-4/5 mx-auto my-20 bg-gray-900 border-green-200 border-2 text-green-200">
      <h1 className="pt-4 text-center text-indigo-400 text-3xl">
        Code Display
      </h1>
      <div className="pt-4 w-1/3 mx-auto">
        <h2>Technologies:</h2>
      </div>
      <p className="py-8 px-14 mx-auto">
        Code display is a command-line interface for a browser based interactive
        coding envirnment.
        <br />
        It uses ESbuild to bundle, execute, and display JavaScript code you have
        written in the browser.
      </p>
      <h2>Try it out on the command line by running:</h2>
      <h2>npx codedisplay serve</h2>
      <h2 className="text-center pb-4">
        View the github repository{" "}
        <a href="https://github.com/StephenRicketts/codedisplay">
          <u className="text-blue-600">here.</u>
        </a>{" "}
      </h2>
    </div>
  );
}
