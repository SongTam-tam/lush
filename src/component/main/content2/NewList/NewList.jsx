import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import newData from "../../../../assets/api/shopNewData";
import NewItem from "./NewItem";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { NewListStyle } from "./style";
const NewList = () => {
  const [data, setData] = useState(newData);
  const [currentNextIndex, setcurrentNextIndex] = useState(null);
  const swiperRef = useRef();
  const currentRef = useRef();
  const lastActiveIndex = useRef(0);
  // const updateCurrentClass = () => {
  //   if (!swiperRef.current) return;

  //   const slides = swiperRef.current.querySelectorAll(".swiper-slide");
  //   slides.forEach((slide) => slide.classList.remove("on"));

  //   const swiperInstance = swiperRef.current.swiper;
  //   const activeIndex = swiperInstance.realIndex;
  //   const secondNextIndex = (activeIndex + 2) % data.length;

  //   const targetSlide = swiperInstance.slides.find(
  //     (slide) =>
  //       slide.getAttribute("data-swiper-slide-index") == secondNextIndex
  //   );

  //   if (targetSlide) {
  //     targetSlide.classList.add("on");
  //   }
  // };
  // useEffect(() => {
  //   updateCurrentClass();
  // }, []);
  return (
    <NewListStyle>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        // centeredSlides={true}
        // ref={swiperRef}
        // onSlideChange={() => {
        //   updateCurrentClass();
        // }}
        // onSlideChangeTransitionEnd={() => {
        //   updateCurrentClass();
        // }}
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper.el;
        //   lastActiveIndex.current = swiper.realIndex;
        //   updateCurrentClass();
        // }}

        // onSlideChangeTransitionStart={() => {
        //   updateCurrentClass();
        // }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <NewItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </NewListStyle>
  );
};

export default NewList;
