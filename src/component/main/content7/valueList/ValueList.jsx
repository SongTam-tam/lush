import { ValueListStyle } from "./style";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import ValueItem from "./ValueItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ValueList = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const swiperRef = useRef();
  const pageRef = useRef();
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { value } = useSelector((state) => state.value);
  useEffect(() => {
    if (swiperRef.current && pageRef.current) {
      swiperRef.current.params.pagination.el = pageRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, [pageRef.current]);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;

    const animateActiveBullet = () => {
      // 현재 활성화된 bullet에만 애니메이션
      gsap.to(
        " .pagenation-gage",

        { scaleX: 1, duration: 2.5, ease: "none" }
      );
    };

    animateActiveBullet();

    swiper.on("slideChange", () => {
      animateActiveBullet();
    });

    return () => {
      swiper.off("slideChange");
    };
  }, [pageRef]);
  useGSAP(() => {}, {});
  return (
    <ValueListStyle>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: pageRef.current,
          renderBullet: (index, className) => {
            return `<span class="${className}">
              <span class="pagenation-gage"></span>
            </span>`;
          },
        }}
        onBeforeInit={(swiper) => {
          // 초기화 전에 el 연결
          swiper.params.pagination.el = pageRef.current;
          swiper.pagination.el = pageRef.current;
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {value.map((value) => (
          <SwiperSlide key={value.id}>
            <ValueItem
              value={value}
              progressContent={progressContent}
              progressCircle={progressCircle}
            />
          </SwiperSlide>
        ))}
        <div className="custom-pagenation" ref={pageRef}></div>
      </Swiper>
    </ValueListStyle>
  );
};

export default ValueList;
