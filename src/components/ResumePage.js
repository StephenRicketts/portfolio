import React, { useState } from "react";

import FadeInAnimation from "./animations/FadeIn";
import diploma from "../images/diploma.jpg";

export default function ResumePage() {
  const [diplomaToggle, setDiplomaToggle] = useState(false);

  return (
    <div className="mx-10  text-center  text-gray-300">
      <h1 className="pt-14 pb-2 text-2xl">
        Stephen Ricketts, Full Stack Developer
      </h1>
      <div className="flex mx-auto ">
        <div className="flex mx-auto space-x-6">
          <h2 className="pb-8 text-xl text-green-300">
            stephen.ricketts12@gmail.com
          </h2>
          <h2 className="pb-8 text-xl text-green-300">514-233-4794</h2>
        </div>
      </div>
      <h1 className="my-12 mx-auto py-2 w-3/5 md:w-1/5 text-5xl font-thin">
        Resume
      </h1>
      <h2 className="text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300">
        Employment
      </h2>
      <h3 className="py-10 text-3xl">Freelance</h3>
      <p className="text-xl">Full-stack web development | App development</p>
      <div className="pt-2 mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4">
        <p>
          I am currently working a 2 month contract for a small start-up called
          SeonVision. This project entails building a website and hooking it up
          to a React admin panel template and then doing the necessary
          customizations to the template. I am using React, tailwindCSS, and
          Firebase for the back end.
        </p>
        <p>
          {" "}
          While I am enjoying my work as a freelancer, it is my goal to land a
          junior position with a larger team. I have a lot to offer as an
          employee and think that joining a larger team would allow me to learn
          from more experienced developers.
        </p>
      </div>
      <h2 className="text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300">
        Skills
      </h2>
      <div className="pt-12 mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4">
        <p>
          I use React and tailwindCSS every day, so I try to keep up with the
          latest features in both. As React is currently my favorite framework,
          I've written a lot of JavaScript so I like to think I've gotten pretty
          good with it. I've worked with other styling frameworks (Sass and
          Bulma) and I am always open to learning new ways of doing things. I
          also have experience working with React Native, TypeScript, Vue.js,
          MongoDB, Firebase, and Node.js.
        </p>
        <p>
          I am a quick learner and I love picking up new skills so I am open to
          learning any language or framework. Being a good Dev means constantly
          learning, so I am currently working on courses in AWS and Next js.
        </p>
      </div>
      <h2 className="text-3xl pb-10  mx-auto  w-3/5 md:w-1/5 border-b-2 border-green-300">
        Education
      </h2>
      <h2 className="text-2xl py-8">
        Diploma in Full-Stack Development - Concordia University 2019
      </h2>
      <div className=" mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4">
        <p>
          Completed 480+ hours of intensive full-stack web development course
          focused on programming fundamentals including test-driven development,
          object-oriented programming, MVC, SCRUM, Agile methodologies,
          pair-programming, algorithms and databases, etc.
        </p>
        <div className="text-center">
          <button
            onClick={() => {
              setDiplomaToggle(!diplomaToggle);
            }}
            className="my-8 py-2 px-4 border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-black transition duration-150 ease-in-out"
          >
            View Diploma
          </button>
          {diplomaToggle && (
            <FadeInAnimation
              direction="left"
              className="py-8 px-4"
              distance={100}
            >
              <img className="mx-auto" src={diploma} alt="diploma" />
            </FadeInAnimation>
          )}
        </div>
        <div>
          <h2 className="text-2xl text-center">
            React Native - The Practical Guide <br /> [2020 edition]
          </h2>
          <p>
            This course covers using React Native to build native iOS and
            Android Apps - incl. Push Notifications, Hooks, Redux. (32 hours of
            lectures, 4 projects)
          </p>
          <p className="pt-6">
            View Certificate{" "}
            <a
              className=" text-green-300 underline"
              href="https://www.udemy.com/certificate/UC-c5e16da5-af95-4246-a4e6-f89131bb84a3/ "
            >
              here
            </a>
          </p>
        </div>
        <div className="pt-12">
          <h2 className="pb-6 text-2xl text-center">
            React and TypeScript: Build a Portfolio Project
          </h2>
          <p>
            This course covers using React and TypeScript to build a complex
            application. The project uses other tools such as Commander and
            ESbuild to build an interactive web-based coding environment much
            like CodePen. (29.5 hours of lectures)
          </p>
          <p className="pt-6">
            View Certificate{" "}
            <a
              className=" text-green-300 underline"
              href="https://www.udemy.com/certificate/UC-f89a249f-1af7-4f45-b3a8-dd85a0e8581c/"
            >
              here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
