import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/modules/CartSlice';
import { useNavigate } from 'react-router-dom';
const SearchItem = ({ search }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
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
        <li onClick={() => nav(`/shop/shopDetail/${id}`)}>
            <div className="pic">
                <img src={img} alt="" />
            </div>
            <p className="title">{title}</p>
            <span>₩{price}</span>
            <p className="ic">
                <i>
                    <CiHeart />
                </i>
                <i onClick={() => dispatch(cartActions.addCart(id))}>
                    <IoMdAdd />
                </i>
            </p>
        </li>
    );
};

export default SearchItem;
