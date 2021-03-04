import React from "react";
import { Link } from "react-router-dom";
import MainButton from "../MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import WGinfo from "./WGInfo";

export default function WGProject() {
  return (
    <div className="h-500 w-4/5 mx-auto my-20 bg-gray-900 border-green-200 border-2 text-green-200">
      <WGinfo />
      <div className="text-center my-10">
        <Link to="/projects/wgscreenshots">
          <MainButton>
            Take the screenshot tour{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </MainButton>
        </Link>
      </div>
    </div>
  );
}
