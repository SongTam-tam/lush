import React, { useRef, useState } from "react";
import { IoPause } from "react-icons/io5";
import { HiMiniPlay } from "react-icons/hi2";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hairData from "../../../../../assets/api/dataComponents/shopHairData";
import { HairListStyle } from "./style";
import HairItem from "./HairItem";
const HairList = () => {
  const data = hairData.slice(0, 6);
  const swiperRef = useRef();
  const [currentPlay, setCurrentPlay] = useState(false);
  const onPlay = () => {
    if (!currentPlay) {
      swiperRef.current.autoplay.stop();
      setCurrentPlay(true);
    } else {
      swiperRef.current.autoplay.start();
      setCurrentPlay(false);
    }
  };
  return (
    <HairListStyle>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <HairItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="btn" onClick={onPlay}>
        <button className="pause">
          {currentPlay ? <HiMiniPlay /> : <IoPause />}
        </button>
      </p>
    </HairListStyle>
  );
};

export default HairList;
