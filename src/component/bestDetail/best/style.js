import styled from "styled-components";

export const BestStyle = styled.section`
  margin-bottom: 257px;
  .inner {
    width: 1600px;

    h2 {
      color: #353535;
      font-size: 36px;
      font-weight: 600;
    }
  }
  .best5 {
    margin-top: 120px;
    display: flex;
    overflow: hidden;
    .best5list {
      box-sizing: border-box;
      h3 {
        font-size: 20px;
        font-weight: 500;
        margin-top: 30px;
      }
      h4 {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 200;
        margin-bottom: 40px;
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
    border-bottom: 1px solid var(--GrayScale-3, #aaa);
    &:hover {
      border-bottom: 3px solid var(--Sub-Lime, #b6d72a);
    }
  }

  .swiper-slide img {
    display: block;
    width: 388px;
    height: 388px;
  }
`;
