import React from "react";

export default function About() {
  return (
    <div className="px-8">
      <h1
        id="about"
        className="w-3/5 md:w-1/5 pt-32 pb-8 m-auto text-3xl border-gray-200 border-b-2"
      >
        About
      </h1>
      <p className="lg:w-1/3 text-justify pt-8 mx-auto ">
        I currently live in Montréal, Quebec. In December 2019 I graduated from
        the Decode web development bootcamp through Concordia university. Since
        then, I have continued to improve my skills as a developer. I really
        enjoy programming and my main goal is to become as good at it as I can.
      </p>
      <p className="lg:w-1/3 text-justify pt-4 mx-auto ">
        My background is unique among other developers. Prior to 2019 I had an
        extensive career in social work and Education. I worked in high stress
        environments with a broad range of different people and always did my
        best to improve their lives in any way I could. Through this work I
        acquired patience and excellent people skills. In 5 or so years, once I
        have become very proficient in the technical side of things, I could see
        myself being a team lead to make use of my soft skills and technical
        skills.
      </p>
    </div>
  );
}
