import React, { useEffect, useRef } from 'react';
import MainHaraList from './mainharalist/MainHaraList';
import { MainHaraStyle } from './style';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const MainHara = () => {
    const scrollRef = useRef();
    const upRef = useRef();
    const downRef = useRef();
    const whiteTextRef = useRef();
    const limeTextRef = useRef();
    const imgRef = useRef();
    const imgBigRef = useRef();
    const bigTextRef = useRef();
    const autoRef = useRef();
    useGSAP(
        () => {
            gsap.fromTo(
                scrollRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 100%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'top 110%',
                        end: 'top 0%',

                        // scrub: true,
                        scrub: 3,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                upRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 100%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'top bottom',
                        end: 'top 0%',

                        // scrub: true,
                        scrub: 3,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                downRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 100%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'bottom 70%',
                        end: 'top 0%',

                        // scrub: true,
                        scrub: 3,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                whiteTextRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 100%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'bottom 40%',
                        end: 'bottom 0%',

                        // scrub: true,
                        scrub: 6,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.fromTo(
                limeTextRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 100%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'bottom 10%',
                        end: 'bottom -35%',

                        // scrub: true,
                        scrub: 1,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
            gsap.to(imgRef.current, {
                height: '82px',
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'bottom 20%',
                    end: 'bottom -30%',

                    // scrub: true,
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                },
            });
            gsap.to(imgBigRef.current, {
                height: '82px',
                scrollTrigger: {
                    trigger: scrollRef.current,
                    start: 'bottom 30%',
                    end: 'bottom -30%',

                    // scrub: true,
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                },
            });
            gsap.fromTo(
                bigTextRef.current,
                { backgroundSize: '100% 0%' },
                {
                    backgroundSize: '100% 150%',
                    scrollTrigger: {
                        trigger: scrollRef.current,
                        start: 'bottom 5%',
                        end: 'bottom -35%',

                        // scrub: true,
                        scrub: 1,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        },
        {
            scope: limeTextRef,
            scope: whiteTextRef,
            scope: scrollRef,
            scope: upRef,
            scope: downRef,
            scope: imgRef,
            scope: bigTextRef,
            scope: imgBigRef,
        }
    );
    useGSAP(
        () => {
            const clone1 = autoRef.current.cloneNode(true);
            autoRef.current.append(clone1);

            ScrollTrigger.create({
                trigger: '.content',
                start: 'top-=1000 top',
                onEnter: () => {
                    gsap.to(autoRef.current, {
                        x: '-70%',
                        ease: 'linear',
                        duration: 30,
                        repeat: -1,
                    });
                },
            });
        },
        { scope: autoRef }
    );
    return (
        <MainHaraStyle className="content">
            {/* 타이틀 */}
            <strong className="up" ref={upRef}>
                “
            </strong>
            <h2 className="contentTitle" ref={scrollRef}>{`몸을 위한 케어는 많은데
      마음은 누가 돌봐줄까?`}</h2>
            <strong className="down" ref={downRef}>
                ”
            </strong>
            {/* 버튼 */}
            <div className="btnBox">
                <img src="/images/hara_strok.png" alt="" className="logo-off" />
                <img src="/images/hara_color.png" alt="" className="logo-on" />
                <p>알아보기</p>
            </div>
            {/* 하라 이미지 */}
            <h3 className="haralogo">
                <img src="./images/hara_strok.png" alt="" />
            </h3>
            <h3 className="haralogo2" ref={imgRef}>
                <img src="./images/hara_color.png" alt="" />
            </h3>
            <h3 className="haralogobig">
                <img src="./images/hara_strok.png" alt="" />
            </h3>
            <h3 className="haralogobig2" ref={imgBigRef}>
                <img src="./images/hara_color.png" alt="" />
            </h3>
            <strong className="bigText" ref={bigTextRef}>
                A MOMENT FOR ME
            </strong>
            {/* 텍스트박스 */}
            <div className="textBox">
                <p className="whiteText" ref={whiteTextRef}>
                    {`아무 일도 없지만 마음이 무거운 날,
이유 없이 예민한 날,
위로 받고 싶은 날이 있죠.
\n`}
                    {/* 스팬 */}
                    <span>는 자연에서 온 순수한 재료로</span>
                    <span>지친 감정을 다독이는 감성 루틴을 제안합니다.</span>
                </p>
                {/* 라임색 텍스트 */}

                {/* 큰 텍스트 */}
                <span className="limeText" ref={limeTextRef}>
                    자연이 만든 레시피로 나를 돌보는 시간
                </span>
            </div>
            {/* 백그라운드 이미지 */}
            <img src="./images/main/HARA_2.png" alt="" className="bgimg" />
            <div className="slideImg">
                <MainHaraList autoRef={autoRef} />
            </div>
        </MainHaraStyle>
    );
};

export default MainHara;
