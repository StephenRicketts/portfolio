import React from "react";

export default function SkillsListItem(props) {
  return (
    <div className="flex space-x-2 items-center">
      <img className="h-8" src={props.skillSvgPath} alt={props.skillName} />
      <h2 className="p-4 text-right">{props.skillName}</h2>
    </div>
  );
}
