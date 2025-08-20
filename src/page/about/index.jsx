import React from 'react';
import { AboutStyle } from './style';
import AboutVisual from '../../component/about/visual/AboutVisual';
import Fresh from '../../component/about/fresh/Fresh';
import Campaign from '../../component/about/campaign/Campaign';

const About = () => {
    return (
        <AboutStyle>
            <AboutVisual />
            <Fresh />
            <Campaign />
        </AboutStyle>
    );
};

export default About;
