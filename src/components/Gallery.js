import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import React from "react";

import WGlanding from "../images/WGlanding.png";
import WGstacks from "../images/WGstacks.png";
import WGread from "../images/WGread.png";
import WGwrite from "../images/WGwrite.png";
import WGprofile from "../images/WGprofile.png";
import CDshow from "../images/CDshow.png";
import CDbulma from "../images/CDbulma.png";

const WGimages = [
  {
    original: WGlanding,
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: WGstacks,
    description:
      "This is the stacks page, where works that have been written and published by other authors will show up. Clicking on one of these 'bookspines' will open up the publication and allow the user to read the publication.",
  },
  {
    original: WGread,
    description:
      "This is an open publication. A user can read the work and then endorse it or leave a comment for the author.",
  },
  {
    original: WGwrite,
    description:
      "This is the writing section of the application. The text editor is called TinyMCE, it is a WYSIWYG HTML editor which means it stores saved content as HTML to account for font and formatting specifics. The saved content is stored in a Firebase firestore.",
  },
  {
    original: WGprofile,
    description:
      "This is the profile page, where all of your current works are stored in your 'bookshelf'. Here you can choose to publish your work when it is done and it will be added to the stacks page.",
  },
];

const CDimages = [
  {
    original: CDshow,
    description:
      "The built-in 'show' function allows the javascript code to be displayed.",
  },
  {
    original: CDbulma,
    description:
      "Outside libraries can be imported and used within the environment. There is also a text editor that allows you to document the code you are writing.",
  },
];

export default function Gallery(props) {
  var images;
  if (props.project === "WG") {
    images = WGimages;
  }
  if (props.project === "CD") {
    images = CDimages;
  }
  return <ImageGallery showPlayButton={false} items={images} />;
}
