import React from 'react';

const ConMapItem = ({ item }) => {
    const { id, title, desc, level, levelText, time, timeDelay, shoose, isChk } = item;
    return (
        <>
            <div className={`MapBox ${isChk ? 'on' : ''}`}>
                <h2 className="mapTitle">{title}</h2>
                <p>{desc}</p>
                <div className="con left">
                    <span>{level}</span>
                    <strong>{levelText}</strong>
                </div>
                <div className="con right">
                    <span>{time}</span>
                    <strong>{timeDelay}</strong>
                </div>
            </div>
        </>
    );
};

export default ConMapItem;
