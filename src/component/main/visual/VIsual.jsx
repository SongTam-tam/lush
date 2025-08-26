import React, { useEffect, useRef } from 'react';
import { VisualContent } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const VIsual = () => {
    const bgRef = useRef();
    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const titleRef = useRef();
    const bgRef2 = useRef();
    useEffect(() => {
        AOS.init();
    }, []);
    useGSAP(() => {
        const txt1 = textRef1.current;
        const txt2 = textRef2.current;
        const txt3 = textRef3.current;
        const title = titleRef.current;
        const bg = bgRef2.current;
        gsap.to(bgRef.current, {
            width: 1150,
            ease: 'ease-out',
            duration: 1,
        });
        gsap.fromTo(
            txt1,
            {
                x: -400,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 1,
                delay: 0.8,
            }
        );
        gsap.fromTo(
            txt2,
            {
                x: -400,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 1,
                delay: 0.8,
            }
        );
        gsap.fromTo(
            txt3,
            {
                x: 400,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 1,
                delay: 0.8,
            }
        );
        // gsap.fromTo(
        //     title,
        //     {
        //         y: -100,
        //         opacity: 0,
        //     },
        //     {
        //         y: 0,
        //         opacity: 1,
        //         ease: 'ease-in',
        //         duration: 0.6,
        //         delay: 1.3,
        //     }
        // );
    }, {});
    return (
        <VisualContent>
            <div className="bigbg" ref={bgRef2}>
                <div className="visual_bg" ref={bgRef}>
                    <img src="./images/main/visual_bg2.png" alt="" />
                </div>
                {/* <h2 ref={titleRef}>LUSH</h2> */}
                <div className="visualText">
                    <p ref={textRef1}>FRESH</p>
                    <p ref={textRef2}>COSMETICE</p>
                    <p ref={textRef3}>HANDMADE</p>
                </div>
            </div>
        </VisualContent>
    );
};

export default VIsual;
