import React from "react";
import SkillsListItem from "./SkillsListItem";
import css3 from "../images/skills-icons/css-3.svg";
import firebase from "../images/skills-icons/firebase.svg";
import htmlLogo from "../images/skills-icons/html-5.svg";
import javascript from "../images/skills-icons/javascript.svg";
import mongodb from "../images/skills-icons/mongodb.svg";
import nodejs from "../images/skills-icons/nodejs.svg";
import reactRouter from "../images/skills-icons/react-router.svg";
import reactLogo from "../images/skills-icons/react.svg";
import reduxLogo from "../images/skills-icons/redux.svg";
import tailwindcssLogo from "../images/skills-icons/tailwindcss.svg";
import typescriptLogo from "../images/skills-icons/typescript.svg";
import vue from "../images/skills-icons/vue.svg";

export default function SkillsList() {
  return (
    <div className="text-gray-200 w-4/5 md:w-3/5 m-auto">
      <h1
        id="skills"
        className="md:w-1/5 pt-32 pb-8 mx-auto text-center text-3xl border-gray-200 border-b-2"
      >
        Skills
      </h1>

      <div className="p-8 mt-8 flex flex-col md:grid md:grid-rows-6 grid-flow-col gap-4 bg-gray-700 items-center border-green-300 border-2 rounded-lg">
        <SkillsListItem
          skillName="React/React Native"
          skillSvgPath={reactLogo}
        />
        <SkillsListItem skillName="JavaScript" skillSvgPath={javascript} />
        <SkillsListItem skillName="CSS-3" skillSvgPath={css3} />
        <SkillsListItem skillName="HTML-5" skillSvgPath={htmlLogo} />

        <SkillsListItem skillName="MongoDB" skillSvgPath={mongodb} />
        <SkillsListItem skillName="node.js" skillSvgPath={nodejs} />
        <SkillsListItem skillName="React Router" skillSvgPath={reactRouter} />
        <SkillsListItem skillName="Redux" skillSvgPath={reduxLogo} />
        <SkillsListItem
          skillName="Tailwind CSS"
          skillSvgPath={tailwindcssLogo}
        />
        <SkillsListItem skillName="TypeScript" skillSvgPath={typescriptLogo} />
        <SkillsListItem skillName="Vue js" skillSvgPath={vue} />
        <SkillsListItem skillName="Firebase" skillSvgPath={firebase} />
      </div>
      <p className="pt-4  text-justify">
        Like any good developer I am constantly picking up new skills. Right now
        I am working on courses in AWS and nextJS.
      </p>
    </div>
  );
}
