import React from "react";
import github from "../images/social-media-icons/github.svg";
import linkedIn from "../images/social-media-icons/linkedIn.svg";

export default function Footer() {
  const email = "stephen.ricketts12@gmail.com";
  return (
    <footer
      style={{
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      }}
      className="bg-gray-700 text-green-300 p-6 w-full h-1/6 text-center z-10 border-t border-green-300"
    >
      <div className="p-4">
        <a
          className=" hover:text-green-200 hover:underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <p className="py-6">514-233-4793</p>
      </div>
      <div className="flex py-4 justify-center">
        <a href="https://github.com/StephenRicketts">
          <img className="mr-10" src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/stephenricketts5/">
          <img className="" src={linkedIn} alt="linkedIn" />
        </a>
      </div>
      <div className="text-center">
        <small>©2021 Stephen Ricketts</small>
      </div>
    </footer>
  );
}
