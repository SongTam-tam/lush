import styled from "styled-components";

export const BestStyle = styled.section`
  --swiper-navigation-size: 24px;
  .inner {
    width: 100%;
    h2 {
      /* border: 1px solid #000; */
    }
    .best5 {
      margin-top: 120px;
      display: flex;
      overflow: hidden;
      .best5list {
        box-sizing: border-box;
        h3 {
          font-size: 24px;
          font-weight: 500;
          margin-top: 30px;
        }
        h4 {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 200;
        }
      }
    }
    .swiper {
      width: 100%;
      height: 100%;
      margin-top: 85px;
    }
    .swiper-wrapper {
      align-items: flex-start;
    }
    .swiper-slide {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
    }

    .swiper-slide img {
      display: block;
      width: 280px;
      height: 280px;
      object-fit: cover;
      border: 1px solid #dbdbdb;
      padding: 10px;
    }

    .inner {
      position: relative; /* 버튼 absolute 기준점 */
    }

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      top: 480px;
      z-index: 99 !important;
      color: black;
      background: transparent;
      /* transform: translateY(-50%); */
    }
    .swiper-button-prev {
      left: 1620px;
    }
    .swiper-button-next {
      right: 154px;
    }
    .swiper-slide-next img {
      width: 500px;
      height: 500px;
    }
    .swiper-slide-next {
      width: 600px;
      height: 750px;
      display: flex;
      top: 0;
      left: 0;
      transform: translateY(-60px);
    }
  }
`;
