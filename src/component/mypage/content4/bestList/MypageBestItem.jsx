import React from 'react';

const MypageBestItem = ({ best }) => {
    const { id, title, price, price2, rate, itemtotal, category, img, img2, incense, desc } = best;
    return (
        <li>
            <div className="pic">
                <img src={img} alt="" />
            </div>

            <strong>{title}</strong>
            <span>{price}</span>
        </li>
    );
};

export default MypageBestItem;
