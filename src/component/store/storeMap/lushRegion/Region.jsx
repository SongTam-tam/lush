import React from 'react';
import { RegionStyle } from './style';
import RegionLUSH from './RegionLUSH';

const Region = ({ item, mapL, idx }) => {
    const { isOn, id, title, addr, regionImg, spot, tel } = item;
    return (
        <div className={`region-con ${mapL === idx ? 'on' : ''}`}>
            <h2>{title}</h2>
            <div className="pic">
                <img src={regionImg} alt="" />
            </div>
            <p className="addr">
                <strong>주소</strong>
                <span>{addr}</span>
            </p>
            <p className="tel">
                <strong>연락처</strong>
                <span>{tel}</span>
            </p>
            <ul>
                {spot.map((item, idx) => (
                    <RegionLUSH key={idx} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default Region;
