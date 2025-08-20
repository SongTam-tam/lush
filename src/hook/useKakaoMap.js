import { useEffect } from 'react';

export const useKakaoMap = (mapId, options) => {
    useEffect(() => {
        const initMap = () => {
            if (!window.kakao || !window.kakao.maps) return;
            const container = document.getElementById(mapId);
            if (!container) return;
            new window.kakao.maps.Map(container, options);
        };

        // 이미 kakao.maps 객체가 준비돼 있으면 바로 초기화
        if (window.kakao && window.kakao.maps) {
            initMap();
            return;
        }

        // Kakao 스크립트가 없으면 동적 로드
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false';
        script.async = true;
        script.onload = () => {
            // maps 객체가 완전히 준비될 때까지 load() 사용
            window.kakao.maps.load(initMap);
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [mapId, options]);
};
