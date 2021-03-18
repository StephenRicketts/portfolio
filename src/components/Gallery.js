import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import React from "react";

const images = [
  {
    original: "/images/WGlanding.png",
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: "/images/WGstacks.png",
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: "/images/WGread.png",
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: "/images/WGwrite.png",
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: "/images/WGprofile.png",
    description: "This is the landing page for Writer's Guild",
  },
  {
    original: "/images/WGlanding.png",
    description: "This is the landing page for Writer's Guild",
  },
];

export default class Gallery extends React.Component {
  render() {
    return <ImageGallery showPlayButton={false} items={images} />;
  }
}
