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
    useEffect(() => {
        AOS.init();
    }, []);
    useGSAP(() => {
        const txt1 = textRef1.current;
        const txt2 = textRef2.current;
        const txt3 = textRef3.current;
        const title = titleRef.current;

        gsap.to(bgRef.current, {
            width: '100%',
            ease: 'ease-in',
            duration: 1,
        });
        gsap.fromTo(
            txt1,
            {
                x: -50,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 0.6,
                delay: 0.8,
            }
        );
        gsap.fromTo(
            txt2,
            {
                x: 80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 0.6,
                delay: 1.2,
            }
        );
        gsap.fromTo(
            txt3,
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 0.6,
                delay: 1.6,
            }
        );
        gsap.fromTo(
            title,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: 'ease-in',
                duration: 0.6,
                delay: 2,
            }
        );
    }, {});
    return (
        <VisualContent>
            <div className="visual_bg" ref={bgRef}>
                <img src="./images/main/visual_bg2.png" alt="" />
            </div>
            <h2 ref={titleRef}>LUSH</h2>
            <div className="visualText">
                <p ref={textRef1}>FRESH</p>
                <p ref={textRef2}>HANDMADE</p>
                <p ref={textRef3}>COSMETICE</p>
            </div>
        </VisualContent>
    );
};

export default VIsual;
