import React, { useState } from 'react';
import { MapStyle } from './style';
import MapData from '../../../../assets/api/spaContent2Data';
import ConMapItem from './ConMapItem';
import ConButton from './ConButton';

const ConMap = () => {
    const [mapD, setMapD] = useState(MapData);
    const isOn = (id) => {
        setMapD(
            mapD.map((item) =>
                item.id === id ? { ...item, isChk: true } : { ...item, isChk: false }
            )
        );
    };
    return (
        <MapStyle>
            {mapD.map((item) => (
                <ConMapItem key={item.id} item={item} />
            ))}
            <div className="btns">
                {mapD.map((item) => (
                    <ConButton key={item.id} item={item} isOn={isOn} />
                ))}
            </div>
            <div className="line"></div>
        </MapStyle>
    );
};

export default ConMap;
