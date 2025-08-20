import { ValueListStyle } from './style';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import ValueItem from './ValueItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ValueList = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const swiperRef = useRef();
    const pageRef = useRef();
    const iconRef = useRef();
    const textRef = useRef();
    const miniTextRef = useRef();
    const detailRef = useRef();
    const colorRef = useRef();
    colorRef.current = [];

    const { value } = useSelector((state) => state.value);
    useEffect(() => {
        if (!swiperRef.current) return;
        const swiper = swiperRef.current;

        const updateActiveLi = () => {
            const activeIndex = swiper.realIndex; // loop가 있을 경우 realIndex 사용
            colorRef.current.forEach((li, idx) => {
                if (!li) return;
                if (idx === activeIndex) {
                    li.style.color = '#fff'; // 활성색
                    li.classList.add('active'); // 클래스 추가
                } else {
                    li.style.color = 'rgba(170, 170, 170, 0.3)'; // 비활성색
                    li.classList.remove('active');
                }
            });
        };
        updateActiveLi(); // 초기 실행
        swiper.on('slideChange', updateActiveLi);

        return () => {
            swiper.off('slideChange', updateActiveLi);
        };
    }, []);

    useEffect(() => {
        if (swiperRef.current && pageRef.current) {
            swiperRef.current.params.pagination.el = pageRef.current;
            swiperRef.current.pagination.init();
            swiperRef.current.pagination.render();
            swiperRef.current.pagination.update();
        }
        if (!swiperRef.current) return;

        const swiper = swiperRef.current;

        const animateActiveBullet = () => {
            gsap.killTweensOf('.pagenation-gage');
            gsap.set('.pagenation-gage', { scaleX: 0 });
            gsap.to(' .pagenation-gage', { scaleX: 1, duration: 2.5, ease: 'none' });
            gsap.to(iconRef.current, { top: 0, duration: 0.5, ease: 'none' });
        };
        animateActiveBullet();
        swiper.on('slideChangeTransitionStart', animateActiveBullet);
        swiper.on('slideChange', animateActiveBullet);
        return () => {
            swiper.off('slideChangeTransitionStart', animateActiveBullet);
            swiper.off('slideChange');
        };
    }, [pageRef.current]);
    useEffect(() => {
        if (!swiperRef.current) return;
        const swiper = swiperRef.current;

        const animateSlide = () => {
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (!activeSlide) return;

            const icon = activeSlide.querySelector('.icon');
            const text = activeSlide.querySelector('.valueTextBox strong');
            const miniText = activeSlide.querySelector('.valueTextBox p');
            const detail = activeSlide.querySelector('.valueTextBox span');
            const bgimg = activeSlide.querySelector('.pic img');
            const colorText = activeSlide.querySelector('.valueList li');
            // 초기 상태 세팅
            gsap.set([icon, text, miniText, detail], { opacity: 0, y: 50 });
            gsap.set(bgimg, { scale: 1.2 });
            gsap.set(colorText, { color: 'rgba(170, 170, 170, 0.3)' });

            // 순차 애니메이션
            gsap.to(colorText, {
                color: '#fff',
                ease: 'none',
            });
            gsap.to(icon, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.5,
                ease: 'power2.out',
            });
            gsap.to(text, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.7,
                ease: 'power2.out',
            });
            gsap.to(miniText, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.9,
                ease: 'power2.out',
            });
            gsap.to(detail, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 1.1,
                ease: 'power2.out',
            });
            gsap.to(bgimg, {
                scale: 1,
                duration: 0.5,
                ease: 'ease-out',
            });
        };

        animateSlide(); // 초기 실행
        swiper.on('slideChangeTransitionStart', animateSlide);

        return () => {
            swiper.off('slideChangeTransitionStart', animateSlide);
        };
    }, []);

    return (
        <ValueListStyle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect={'fade'}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                    delay: 1000000,
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
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {value.map((value) => (
                    <SwiperSlide key={value.id}>
                        <ValueItem
                            value={value}
                            progressContent={progressContent}
                            progressCircle={progressCircle}
                            iconRef={iconRef}
                            textRef={textRef}
                            miniTextRef={miniTextRef}
                            detailRef={detailRef}
                        />
                    </SwiperSlide>
                ))}

                <div className="custom-pagenation" ref={pageRef}></div>
                <ul className="valueList">
                    {value.map((item) => (
                        <li
                            key={item.id}
                            ref={(el) => {
                                if (el && !colorRef.current.includes(el)) colorRef.current.push(el);
                            }}
                        >
                            {item.desc}
                        </li>
                    ))}
                </ul>
            </Swiper>
        </ValueListStyle>
    );
};
// const iconRef = useRef();
// const textRef = useRef();
// const miniTextRef = useRef();
// const detailRef = useRef();
export default ValueList;
