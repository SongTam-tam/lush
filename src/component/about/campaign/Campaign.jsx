import React, { useEffect, useRef } from 'react';
import { CampaignStyle } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
const Campaign = () => {
    const titleRef1 = useRef();
    const titleRef2 = useRef();
    const titleRef3 = useRef();
    const titleRef4 = useRef();
    const imgRef1 = useRef();
    const imgRef2 = useRef();
    const imgRef3 = useRef();
    const imgRef4 = useRef();
    useGSAP(
        () => {
            gsap.fromTo(
                titleRef1.current,
                {
                    x: '-100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: titleRef1.current,
                        start: 'top +=500',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                imgRef1.current,
                {
                    x: '-100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: imgRef1.current,
                        start: 'top +=700',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                titleRef2.current,
                {
                    x: '100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: titleRef2.current,
                        start: 'top +=500',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                imgRef2.current,
                {
                    x: '100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: imgRef2.current,
                        start: 'top +=700',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                titleRef3.current,
                {
                    x: '-100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: titleRef3.current,
                        start: 'top +=500',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                imgRef3.current,
                {
                    x: '-100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: imgRef3.current,
                        start: 'top +=700',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                titleRef4.current,
                {
                    x: '100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: titleRef4.current,
                        start: 'top +=500',
                        end: 'bottom bottom',
                    },
                }
            );
            gsap.fromTo(
                imgRef4.current,
                {
                    x: '100px',
                    opacity: 0,
                },
                {
                    x: '0',
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: imgRef4.current,
                        start: 'top +=700',
                        end: 'bottom bottom',
                    },
                }
            );
        },

        {
            scope: titleRef1,
            scope: titleRef2,
            scope: titleRef3,
            scope: titleRef4,
            scope: imgRef1,
            scope: imgRef2,
            scope: imgRef3,
            scope: imgRef4,
        }
    );
    return (
        <CampaignStyle>
            <div className="con1">
                <h2 ref={titleRef1}>handmade</h2>
                <img src="./images/about/img2.png" alt="" ref={imgRef1} />
                <div className="textBox">
                    <strong>동물실험 반대 캠페인</strong>
                    <p>{`러쉬는 어떤 이유에서도 제품을 동물실험 하지
않고, 동물실험을 거친 원재료조차 사용하지 않습니다.`}</p>
                    <span>{`직접 구매팀을 운영하며, 엄격한 기준을 바탕으로 윤리적인 공정 여부를 
확인합니다. 믿을 수 있는 생산자로부터 직거래를 원칙으로 합니다.`}</span>
                </div>
            </div>
            <div className="con2">
                <div className="textBox">
                    <strong>핸드메이드</strong>
                    <p>{`러쉬는 배쓰 밤, 샤워 젤리, 고체 샴푸와
같은 기발하고 혁신적인 제품을 선보입니다.`}</p>
                    <span>{`불필요한 포장을 없앤 고체 형태의 다양한 '네이키드'
제품을  개발하며 화장품 산업에서 혁명을 일으켜 왔습니다.`}</span>
                </div>
                <img src="./images/about/img3.png" alt="" ref={imgRef2} />
                <h2 ref={titleRef2}>frechness</h2>
            </div>
            <div className="con3">
                <h2 ref={titleRef3}>Cruelty-Free</h2>
                <img src="./images/about/img4.png" alt="" ref={imgRef3} />
                <div className="textBox">
                    <strong>신선한 원료</strong>
                    <p>{`신선함은 러쉬 철학의 핵심입니다.`}</p>
                    <span>{`신선한 과일, 채소, 에센셜 오일, 최소한의 보존제와 안전한 인공 성분을 사용하여 제
                    품을 선보입니다. 러쉬의 모든 제품은 베지테리언(Vegetarian)이며, 그 중 약 90%
                    는 식물성 원료로만 만든 비건(Vegan)입니다.`}</span>
                </div>
            </div>
            <div className="con2">
                <div className="textBox">
                    <strong>러쉬의 진심 & 신념</strong>
                    <p>{`이 모든 것은 ‘고객은 항상 옳다’는 믿음과 러쉬의
핵심 가치인 직원들의 진심이 모여 얻은 결실입니다.`}</p>
                    <span>{`앞으로도 러쉬는 현시대에 필요한 제품과 서비스를 제공할 
것입니다. 환경 보호를 위해 고민하고, 동물과 자연 그리고 
사람이 조화로운 세상을 만들기 위한 도전과 혁신에 앞장섭니다.`}</span>
                </div>
                <img src="./images/about/img5.png" alt="" ref={imgRef4} />
                <h2 ref={titleRef4}>sincerty</h2>
            </div>
        </CampaignStyle>
    );
};

export default Campaign;
