import React, { useEffect, useRef } from 'react';
import { BarStyle, FreshStyle } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const Fresh = () => {
    const imgRef = useRef();
    const wrap = useRef();
    useGSAP(
        () => {
            // const scaleX = window.innerWidth / 280;
            // const scaleY = window.innerHeight / 280;
            // const scale = Math.max(scaleX, scaleY);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrap.current,
                    start: 'top top',
                    end: '+=3000', // 원하는 스크롤 길이
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(imgRef.current, {
                width: innerWidth,
                height: '1750px',
                borderRadius: 0,
                ease: 'none',
                duration: 0.4,
                transformOrigin: 'center center',
            });
        },
        {
            scope: imgRef,
        }
    );
    // useEffect(() => {
    //     const tag = imgRef.current;
    //     const scrollImg = gsap.timeline({
    //         scrollTrigger
    //     });
    //     const scaleX = window.innerWidth / 280;
    //     const scaleY = window.innerHeight / 280;
    //     const scale = Math.max(scaleX, scaleY);

    //     scrollImg.to(tag, {
    //         borderRadius: 0,
    //         scale: scale,
    //         ease: 'none',
    //         transformOrigin: 'center center',
    //     });

    //     ScrollTrigger.create({
    //         trigger: wrap.current,
    //         start: 'top top',
    //         end: '+=3000',
    //         animation: scrollImg,
    //         pin: true,
    //         scrub: true,
    //         markers: true,
    //     });
    // }, []);
    return (
        <>
            <BarStyle>
                <li className="on">러쉬소개</li>
                <li>러쉬역사</li>
                <li>이념·가치</li>
                <li>브랜드 정책</li>
            </BarStyle>
            <FreshStyle>
                <div className="circle" ref={wrap}>
                    <h2>FRESH HANDMADE COSMETICE</h2>
                    <div className="textBox">
                        <p>
                            러쉬는 자연에서 얻은 <span>신선한 재료</span>와
                        </p>
                        <p>
                            동물실험을 하지 않는<span>정직한 재료</span>를 사용하여
                        </p>
                        <p>
                            모든 제품을 <span>손</span>으로 만듭니다.
                        </p>
                    </div>
                    <div className="textBox2">
                        <p>{`더불어 공정 거래, 인권 보호, 포장 최소화 등 
다양한 캠페인 활동을 통해 기업 윤리와 신념을 알리고 있습니다.`}</p>
                    </div>
                    <div className="size-circle" ref={imgRef}>
                        <div className="picbg"></div>
                    </div>
                </div>
            </FreshStyle>
        </>
    );
};

export default Fresh;
