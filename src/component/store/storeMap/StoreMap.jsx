import React, { useEffect, useRef, useState } from 'react';
import { APIMapStyle, MapStyle } from './style';
import mapData from '../../../assets/api/mapData';
import Region from './lushRegion/Region';
import regionData from '../../../assets/api/regionData';
// const { kakao } = window;
const StoreMap = () => {
    const mapRef = useRef([]);
    const [reg, setReg] = useState(regionData);
    const [mapL, setMapL] = useState(null);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(36.5, 127.8),
            level: 13,
        };
        const markerImg = '/images/store/map_pin.png';
        const markerSize = new kakao.maps.Size(42, 50);
        const imageOption = { offset: new kakao.maps.Point(27, 69) };
        const markerImage = new kakao.maps.MarkerImage(markerImg, markerSize, imageOption);
        const map = new kakao.maps.Map(container, options);
        const maxLevel = map.getLevel();
        map.setMaxLevel(maxLevel);

        kakao.maps.event.addListener(map, 'zoom_changed', () => {
            const level = map.getLevel();
            map.setDraggable(level <= 11);
        });

        map.setDraggable(map.getLevel() <= 8);

        mapRef.current = mapData.map((data, idx) => {
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(data.lat, data.lng),
                title: data.title,
                image: markerImage,
            });
            kakao.maps.event.addListener(marker, 'click', () => {
                const position = new kakao.maps.LatLng(data.lat, data.lng);
                map.setCenter(position);
                map.setLevel(6);
                setMapL(idx);
            });
            return marker;
        });
    }, []);
    const onRegion = (x) => {
        const marker = mapRef.current[x];
        const data = mapData[x];
        const map = marker.getMap();
        const position = new kakao.maps.LatLng(data.lat, data.lng);
        map.setCenter(position);
        map.setLevel(6);
        setMapL(x);
    };
    return (
        <APIMapStyle>
            <div className="left">
                <div className="mapTop">
                    <ul className="mapList">
                        {mapData.map((map, idx) => (
                            <li
                                className={mapL === idx ? 'on' : ''}
                                key={map.id}
                                onClick={() => onRegion(idx)}
                            >
                                {map.region}
                            </li>
                        ))}
                    </ul>
                </div>
                <MapStyle id="map"></MapStyle>
            </div>
            <div className="right">
                <div className="pic">
                    <img src="./images/store/img2.png" alt="" />
                </div>
                <h2>가까운 매장을 찾아 향기로운 러쉬를 만나보세요!</h2>
                <p>손을 씻고 싶을 때 언제든 러쉬 매장을 들려주세요.</p>
                <div className="rightBig"></div>
            </div>
            <div className={`rightRegion ${mapL !== null ? 'on' : ''}`}>
                {reg.map((item, idx) => (
                    <Region key={item.id} item={item} mapL={mapL} idx={idx} />
                ))}
            </div>
        </APIMapStyle>
    );
};

export default StoreMap;
