import React from 'react';
import { SpaStyle } from './style';
import SpaVisual from '../../component/spa/visual/SpaVisual';
import Content1 from '../../component/spa/content1/Content1';
import Content2 from '../../component/spa/content2/Content2';

const SPA = () => {
    return (
        <SpaStyle>
            <SpaVisual />
            <Content1 />
            <Content2 />
        </SpaStyle>
    );
};

export default SPA;
