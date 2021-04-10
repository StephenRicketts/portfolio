import React from "react";

export default function ResumePage() {
  return (
    <div className="text-center text-gray-300">
      <h1 className="pt-14 pb-2 text-2xl">Stephen Ricketts</h1>
      <h2 className="text-xl text-green-300">Full Stack Developer</h2>
      <h1 className="my-24 mx-auto py-2 w-1/5 text-5xl font-thin">Resume</h1>
      <h2 className="text-3xl pb-10  mx-auto  w-1/5 border-b-2 border-green-300">
        Employment
      </h2>
      <h3 className="py-10 text-3xl">Freelance</h3>
      <p className="text-xl">Full-stack web development | App development</p>
      <div className="pt-2 mb-24 mx-auto md:w-1/2 lg:w-1/3 text-justify space-y-4">
        <p>
          I am currently working a 2 month contract for a small start-up called
          SeonVision. This project entails building a web site and hooking it up
          to a React admin panel template and then doing the necessary
          customizations to the template. I am using React, tailwindCSS for
          styling, and for the back end we are using Firebase.
        </p>
        <p>
          {" "}
          While I am enjoying my work as a freelancer, it is my goal to land a
          junior position with a larger team. I have a lot to offer as an
          employee and I am looking forward to learning and continuing to grow
          as a developer.
        </p>
      </div>
      <h2 className="text-3xl pb-10  mx-auto  w-1/5 border-b-2 border-green-300">
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
          I am a quick learner and I love picking up new skills so I an open to
          learning any language or framework. Being a good Dev means constantly
          learning, so I am currently working on courses in AWS and Next js.
        </p>
      </div>
      <h2 className="text-3xl pb-10  mx-auto  w-1/5 border-b-2 border-green-300">
        Education
      </h2>
    </div>
  );
}
