import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SwiperSlideItem(props) {
  return (
    <div>
      <figcaption className="p-6 text-green-200 text-center">
        {props.caption}
        <FontAwesomeIcon icon={faAngleDown} />
      </figcaption>
      <img className="w-3/5 h-100 mx-auto" src={props.imgSrc} alt={props.alt} />
    </div>
  );
}
