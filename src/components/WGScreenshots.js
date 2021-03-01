import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function WGScreenshots() {
  return (
    <div className="space-y-2">
      <h1 className="text-indigo-400 text-2xl text-center">Screenshot Tour</h1>
      <figcaption className="text-green-200 text-center">
        The landing page for Writer's Guild
        <br />
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img
        className="w-3/5 h-100 mx-auto"
        src="images/WGlanding.png"
        alt="writer's guild landing page"
      />
      <figcaption className="text-green-200 text-center">
        The stacks page for Writer's Guild, all published work show up here.
        <br />
        Clicking on the "bookspines" opens the publication.
        <br />
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img
        className="w-3/5 h-100 mx-auto"
        src="images/WGstacks.png"
        alt="writer's guild stacks page"
      />
      <figcaption className="text-green-200 text-center">
        This is an open publication. This allows users to read other's work,
        <br />
        endorse their work and/or leave a comment.
        <br />
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img
        className="w-3/5 h-100 mx-auto"
        src="images/WGread.png"
        alt="writer's guild read page"
      />
      <figcaption className="text-green-200 text-center">
        This in the TinyMCE text editor and UI for writing.
        <br />
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img
        className="w-3/5 h-100 mx-auto"
        src="images/WGwrite.png"
        alt="writer's guild write page"
      />
      <figcaption className="text-green-200 text-center">
        This is the profile page, where an author can view all the works in
        their "bookshelf",
        <br />
        and choose to publish their work to the stacks when ready.
        <br />
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img
        className="w-3/5 h-100 mx-auto"
        src="images/WGprofile.png"
        alt="writer's guild write page"
      />
    </div>
  );
}
