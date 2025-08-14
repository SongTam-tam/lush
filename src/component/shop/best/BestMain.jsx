import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BestStyle } from "./style";
import shopBestData from "../../../assets/api/shopBestData.js";
import BestDetail from "./BestDetail";

const BestMain = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <BestStyle>
      <div className="inner">
        <h2 className="besth2">BEST SELLERS</h2>

        {/* 커스텀 네비게이션 (Swiper 바깥) */}
        <button
          className="swiper-button-prev custom-prev"
          aria-label="previous"
          type="button"
        />
        <button
          className="swiper-button-next custom-next"
          aria-label="next"
          type="button"
        />

        <ul className="best5">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView="auto"
            centeredSlides={false}
            spaceBetween={50}
            modules={[Navigation]}
            loop={true}
            // 커스텀 버튼 연결
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            // Swiper React 버전별 안전하게 연결 (권장)
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".custom-prev";
              swiper.params.navigation.nextEl = ".custom-next";
            }}
          >
            {shopBestData.map((data) => (
              <SwiperSlide key={data.id}>
                <BestDetail {...data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </BestStyle>
  );
};

export default BestMain;
