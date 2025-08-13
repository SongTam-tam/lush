import styled from 'styled-components';

export const BestSellerStyle = styled.section`
    width: 100%;
    overflow: hidden;
    position: relative;
    .inner {
        padding: 200px 0;
        height: 1363px;
        h2 {
            font-family: 'Lush Handwritten WLat Bold', sans-serif;
            font-size: 100px;
            /* font-weight: 700; */
            color: #000;
            text-align: center;
            margin-bottom: 80px;
        }
    }
    .right {
        display: flex;
    }
    .left {
        display: flex;
    }
    .content1 {
        position: absolute;
        left: 0;
        top: 423px;
    }
`;
