import React from "react";
import SkillsListItem from "./SkillsListItem";

export default function SkillsList() {
  return (
    <div className="text-gray-200 w-4/5 md:w-3/5 m-auto">
      <h1
        id="skills"
        className="md:w-1/5 pt-32 pb-8 mx-auto text-center text-3xl border-gray-200 border-b-2"
      >
        Skills
      </h1>

      <div className="p-8 mt-8 flex flex-col md:grid md:grid-rows-6 grid-flow-col gap-4 bg-gray-700 border-green-300 border-2 rounded-lg">
        <SkillsListItem
          skillName="React/React Native"
          skillSvgPath="/images/skills-icons/react.svg"
        />
        <SkillsListItem
          skillName="JavaScript"
          skillSvgPath="/images/skills-icons/javascript.svg"
        />
        <SkillsListItem
          skillName="CSS-3"
          skillSvgPath="/images/skills-icons/css-3.svg"
        />
        <SkillsListItem
          skillName="Firebase"
          skillSvgPath="/images/skills-icons/firebase.svg"
        />
        <SkillsListItem
          skillName="MongoDB"
          skillSvgPath="/images/skills-icons/mongodb.svg"
        />
        <SkillsListItem
          skillName="node.js"
          skillSvgPath="/images/skills-icons/nodejs.svg"
        />
        <SkillsListItem
          skillName="React Router"
          skillSvgPath="/images/skills-icons/react-router.svg"
        />
        <SkillsListItem
          skillName="Redux"
          skillSvgPath="/images/skills-icons/redux.svg"
        />
        <SkillsListItem
          skillName="Tailwind CSS"
          skillSvgPath="/images/skills-icons/tailwindcss.svg"
        />
        <SkillsListItem
          skillName="TypeScript"
          skillSvgPath="/images/skills-icons/typescript.svg"
        />
        <SkillsListItem
          skillName="JavaScript"
          skillSvgPath="/images/skills-icons/javascript.svg"
        />
        <SkillsListItem
          skillName="Vue js"
          skillSvgPath="/images/skills-icons/vue.svg"
        />
      </div>
      <p className="pt-4  text-justify">
        Like any good developer I am constantly picking up new skills. Right now
        I am working on courses in AWS and nextJS.
      </p>
    </div>
  );
}
