import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideItem from "./SwiperSlideItem";

import "swiper/swiper.scss";

const captionObj = {
  landing: "The landing page for Writer's Guild",
  stacks:
    "The stacks page for Writer's Guild, all published work show up here.",
  read: `This is an open publication. This allows users to read other's work,
  endorse their work, and/or leave a comment.`,
  write: "This in the TinyMCE text editor and UI for writing.",
  profile: `This is the profile page, where an author can view all the works in their "bookshelf",
    and choose to publish their work to the stacks when ready.`,
};

const altObj = {
  landing: "The landing page for Writer's Guild",
  stacks: "writer's guild stacks page",
  read: "writer's guild read page",
  write: "writer's guild write page",
  profile: "writer's guild profile page",
};

const TourSwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        \
        <SwiperSlideItem
          caption={captionObj.landing}
          alt={altObj.landing}
          imgSrc="images/WGlanding.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideItem
          caption={captionObj.stacks}
          alt={altObj.stacks}
          imgSrc="images/WGstacks.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideItem
          caption={captionObj.read}
          alt={altObj.read}
          imgSrc="images/WGread.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideItem
          catpion={captionObj.write}
          alt={altObj.write}
          imgSrc="images/WGwrite.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideItem
          catpion={captionObj.profile}
          alt={altObj.profile}
          imgSrc="images/WGprofile.png"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default TourSwiper;
