import React from 'react';
import { StoreStyle } from './style';
import StoreVIsual from '../../component/store/visual/StoreVIsual';
import StoreMap from '../../component/store/storeMap/StoreMap';

const Store = () => {
    return (
        <StoreStyle>
            <StoreVIsual></StoreVIsual>
            <StoreMap></StoreMap>
        </StoreStyle>
    );
};

export default Store;
