import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";

export default function ProjectsPage() {
  return (
    <div className="h-4/5 w-4/5 border-2 border-green-200">
      <h1>Recent Projects</h1>
      <Link to="/projects/wg">
        <MainButton>Writer's Guild</MainButton>
      </Link>
      <Link to="/projects/cd">
        <MainButton>Code Display</MainButton>
      </Link>
    </div>
  );
}
