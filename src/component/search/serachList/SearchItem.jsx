import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
const SearchItem = ({ search }) => {
    const {
        id,
        title,
        price,
        price2,
        rate,
        quantity,
        category,
        category2,
        img,
        img2,
        incense,
        desc,
    } = search;
    return (
        <li>
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <p className="title">{title}</p>
            <span>₩{price}</span>
            <p className="ic">
                <i>
                    <CiHeart />
                </i>
                <i>
                    <IoMdAdd />
                </i>
            </p>
        </li>
    );
};

export default SearchItem;
