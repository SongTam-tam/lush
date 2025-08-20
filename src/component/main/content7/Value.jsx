import React from "react";
import { ValueStyle } from "./style";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ValueList from "./valueList/ValueList";
const Value = () => {
  return (
    <ValueStyle className="mainValue">
      <ValueList />
    </ValueStyle>
  );
};

export default Value;
