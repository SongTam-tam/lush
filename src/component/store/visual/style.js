import styled from 'styled-components';

export const StoreVisualStyle = styled.div`
    width: 100%;
    background-size: cover;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-image: url(./images/store/store-visual.png);
    height: 600px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    h2 {
        color: var(--Main-white, #fff);
        text-align: center;
        font-family: 'Lush Handwritten WLat Bold', sans-serif;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;
