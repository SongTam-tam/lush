import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormStyle, FormStyle2, IconStyle, IconStyle2 } from './style';
const HeaderForm2 = ({ setInpOn }) => {
    return (
        <>
            <IconStyle2 onClick={() => setInpOn(false)}>
                <i>
                    <FiSearch />
                </i>
            </IconStyle2>
            <FormStyle2 onClick={() => setInpOn(false)}>
                <input type="text" name="" id="" placeholder="무엇을 찾고 계십니까?" />
            </FormStyle2>
        </>
    );
};

export default HeaderForm2;
