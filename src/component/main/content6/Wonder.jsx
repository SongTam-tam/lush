import React from 'react';
import { WonderStyle } from './style';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
const Wonder = () => {
    const titleRef1 = useRef();
    const titleRef2 = useRef();

    useGSAP(
        () => {
            gsap.fromTo(
                titleRef2.current,
                {
                    x: '-80%',
                },
                {
                    x: '60%',
                    scrollTrigger: {
                        trigger: '.contentWonder',
                        start: '+=10000',
                        end: 'bottom bottom',
                        scrub: 1,
                        // markers: true,
                    },
                }
            );
        },
        {
            scope: titleRef2,
        }
    );

    useGSAP(
        () => {
            gsap.fromTo(
                titleRef1.current,
                {
                    x: '70%',
                },
                {
                    x: '-70%',
                    scrollTrigger: {
                        trigger: '.contentWonder',
                        start: '+=10000',
                        end: 'bottom bottom',
                        scrub: 1,
                        // markers: true,
                    },
                }
            );
        },
        {
            scope: titleRef1,
        }
    );
    return (
        <WonderStyle className="contentWonder">
            <h2 className="scrollTitle" ref={titleRef1}>
                <strong>최고의 신선함</strong>과 <strong>윤리적 아름다움</strong>으로 세상을
                변화시킨다
            </h2>
            <h2 className="scrollTitle2" ref={titleRef2}>
                Hello gorgeous… welcome to the <strong>wonderful world of Lush</strong>
            </h2>
            <div className="textBox">
                <p>
                    러쉬는 자연에서 얻은<strong>신선한 재료</strong>와
                </p>
                <p>
                    동물실험을 하지 않는<strong>정직한 재료</strong>를 사용하여
                </p>
                <p>
                    모든 제품을 <strong>손으로 만듭니다.</strong>
                </p>
                <span>
                    더불어 공정 거래, 인권 보호, 포장 최소화 등 다양한 캠페인 활동을 통해 기업
                    윤리와 신념을 알리고 있습니다.
                </span>
            </div>
        </WonderStyle>
    );
};

export default Wonder;
