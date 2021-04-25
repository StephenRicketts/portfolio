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
import STlanding from "../images/STlanding.png";
import STapp from "../images/STapp.png";
import STinvestors from "../images/STinvestors.png";
import STcontact from "../images/STcontact.png";

const STimages = [
  {
    original: STlanding,
    description:
      "This is the landing page, it contains a couple custom images that I created using photoshop and a carousel for customer reviews.",
  },
  {
    original: STapp,
    description:
      "This page displays information about the mobile application this website was designed to promote. It contants an sticky image of an Iphone that displays different images as the user scrolls down the page.",
  },
  {
    original: STinvestors,
    description:
      "This is page is designed as a contact page for potential investors/partners. It contains a slide show at the top which displays a series of photos.",
  },
  {
    original: STcontact,
    description:
      "This is the general contact page, the drop down menu in the navbar can be seen in this image.",
  },
];

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
  if (props.project === "ST") {
    images = STimages;
  }

  return <ImageGallery showPlayButton={false} items={images} />;
}
