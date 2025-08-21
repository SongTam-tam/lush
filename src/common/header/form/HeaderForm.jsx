import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormStyle, IconStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../../../store/modules/SearchSlice';
const HeaderForm = ({ searchRef, setInpOn }) => {
    const nav = useNavigate();
    const { search } = useSelector((state) => state.search);
    const [text, setText] = useState();
    const dispatch = useDispatch();
    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };
    const nextSearch = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        nav('./search');
        setTimeout(() => {
            dispatch(searchActions.onSearch(text));
            setInpOn(true);
        }, 200);
    };
    dispatch(searchActions.searchText(text));
    return (
        <>
            <FormStyle onSubmit={nextSearch}>
                <input
                    type="text"
                    name=""
                    id="text"
                    value={text}
                    onChange={changeInput}
                    placeholder="무엇을 찾고 계십니까?"
                    ref={searchRef}
                />
                <IconStyle type="submit">
                    <i>
                        <FiSearch />
                    </i>
                </IconStyle>
            </FormStyle>
        </>
    );
};

export default HeaderForm;
