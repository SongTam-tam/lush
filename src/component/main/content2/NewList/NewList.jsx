import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import newData from '../../../../assets/api/shopNewData';
import NewItem from './NewItem';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { NewListStyle } from './style';
const NewList = () => {
    const [data, setData] = useState(newData);
    const prevRef = useRef();
    const nextRef = useRef();

    return (
        <NewListStyle>
            <div className="btns">
                <button className="custom-prev" ref={prevRef}></button>
                <button className="custom-next" ref={nextRef}></button>
            </div>
            <Swiper
                allowTouchMove={false}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                onBeforeInit={(swiper) => {
                    // Swiper 초기화 전에 버튼 연결
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="mySwiper"
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
