import React from "react";
import Name from "./Name";
import Projects from "./Projects";
import ParticleContainer from "./ParticleContainer";

export default function MainPage() {
  return (
    <div className="font-mono pt-14">
      <ParticleContainer />
      <Name />
      <div className="text-gray-200 pt-10">
        <img
          className="h-36 m-auto cursor-pointer"
          src="/images/avatar.png"
          alt="avatar"
        />
        <h1 className="text-center text-2xl p-10">Welcome to my Portfolio.</h1>
        <p className="w-1/4 m-auto">
          I am a full-stack web developer with a unique background in social
          work and education. I am passionate about tech and people and that
          makes me an ideal candidate for any team.
        </p>
        <div className="py-36 text-center">
          <Projects />
        </div>
      </div>
    </div>
  );
}
