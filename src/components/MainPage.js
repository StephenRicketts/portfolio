import React from "react";
import Name from "./Name";
import Projects from "./Projects";
import ParticleContainer from "./ParticleContainer";
import SkillsList from "./SkillsList";
import About from "./About";
import avatar from "../images/avatar.png";

export default function MainPage() {
  return (
    <div className="font-mono pt-14">
      <ParticleContainer />
      <Name />
      <div className="text-gray-200 pt-20">
        <img className="h-36 m-auto cursor-pointer" src={avatar} alt="avatar" />
        <h1 className="text-center text-2xl p-10">Welcome to my Portfolio.</h1>
        <p className="md:w-2/4 lg:w-1/4 px-4 m-auto text-justify">
          I am a full-stack web developer with a unique background in social
          work and education. I am passionate about tech and people and that
          makes me an ideal candidate for any team.
        </p>
        <div className="py-36 text-center">
          <Projects />
          <SkillsList />
          <About />
        </div>
      </div>
    </div>
  );
}
