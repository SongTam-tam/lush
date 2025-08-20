import React, { useRef, useState } from "react";
import { FragrancesListStyle } from "./style";
import perfumeData from "../../../../../assets/api/dataComponents/shopPerfumeData";
import { IoPause } from "react-icons/io5";
import { HiMiniPlay } from "react-icons/hi2";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FragrancesItem from "./FragrancesItem";

const FragrancesList = () => {
  const data = perfumeData.slice(0, 6);
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
    <FragrancesListStyle>
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
            <FragrancesItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="btn" onClick={onPlay}>
        <button className="pause">
          {currentPlay ? <HiMiniPlay /> : <IoPause />}
        </button>
      </p>
    </FragrancesListStyle>
  );
};

export default FragrancesList;
