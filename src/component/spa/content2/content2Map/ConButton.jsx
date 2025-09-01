import React from 'react';

const ConButton = ({ item, isOn }) => {
    const { isChk, id, shoose, title } = item;
    return (
        <>
            <div className={`cocon ${isChk ? 'on' : ''}`} onClick={() => isOn(id)}>
                <span></span>
                <strong>{shoose}</strong>
                <p>{title}</p>
            </div>
        </>
    );
};

export default ConButton;
