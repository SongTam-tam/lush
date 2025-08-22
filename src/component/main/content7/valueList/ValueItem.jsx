import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ValueItem = ({
    value,
    progressCircle,
    progressContent,
    iconRef,
    textRef,
    miniTextRef,
    detailRef,
}) => {
    const { id, img, onClass, desc, subtitle, em, icons } = value;
    return (
        <li>
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <div className="iconss" ref={iconRef}>
                <img src={icons} alt="" />
            </div>
            <div className="valueTextBox">
                <strong ref={textRef}>{desc}</strong>
                <p ref={miniTextRef}>{subtitle}</p>
                <span ref={detailRef}>{em}</span>
            </div>
            <div className="autoplay-progress" slot="container-end">
                <div className="progress-bar" ref={progressCircle}></div>
                <span ref={progressContent}></span>
            </div>
        </li>
    );
};

export default ValueItem;
