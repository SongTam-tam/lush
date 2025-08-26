import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import shopBestData from "../../../assets/api/shopBestData.js";
import RecommendDetail from "./RecommendDetail.jsx";
import { BestStyle } from "./style.js";

const Recommend = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <BestStyle>
      <div className="inner">
        <h2 className="besth2">지금 인기 있는 조합</h2>
      </div>
      <ul className="best5">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView="auto"
          centeredSlides={false}
          spaceBetween={50}
          modules={[Navigation]}
          loop={true}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".custom-prev";
            swiper.params.navigation.nextEl = ".custom-next";
          }}
        >
          {shopBestData.map((data) => (
            <SwiperSlide key={data.id}>
              <RecommendDetail {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </BestStyle>
  );
};

export default Recommend;
