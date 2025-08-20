import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormStyle, IconStyle } from './style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderForm = () => {
    const nav = useNavigate();
    const { search } = useSelector((state) => state.search);
    const [text, setText] = useState();
    const nextSearch = () => {
        nav('./search');
        useEffect(() => {}, []);
    };
    return (
        <>
            <FormStyle>
                <input type="text" name="" id="" placeholder="무엇을 찾고 계십니까?" />
                <IconStyle>
                    <i>
                        <FiSearch />
                    </i>
                </IconStyle>
            </FormStyle>
        </>
    );
};

export default HeaderForm;
