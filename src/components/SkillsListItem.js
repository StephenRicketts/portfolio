import React from "react";

export default function SkillsListItem(props) {
  return (
    <div className="w-3/5 flex justify-between items-center">
      <h2 className="p-4 text-right">{props.skillName}</h2>
      <img className="h-8" src={props.skillSvgPath} alt={props.skillName} />
    </div>
  );
}
