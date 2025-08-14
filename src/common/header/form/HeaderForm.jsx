import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormStyle, IconStyle } from './style';
const HeaderForm = () => {
    return (
        <>
            <IconStyle>
                <FiSearch />
            </IconStyle>
            <FormStyle>
                <input type="text" name="" id="" placeholder="무엇을 찾고 계십니까?" />
            </FormStyle>
        </>
    );
};

export default HeaderForm;
