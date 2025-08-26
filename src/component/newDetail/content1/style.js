import styled from "styled-components";

export const ShopDetailTopstyle = styled.div`
  display: flex;
  .p_left {
    width: 800px;
    height: 900px;
    padding: 150px 100px;
    .swiper {
      width: 600px;
      height: 600px;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #000;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      display: block;
      width: 600px;
      height: 600px;
      object-fit: cover;
    }
  }
  .p_right {
    .text {
      h3 {
        margin-top: 20px;
        color: var(--Main-Black, #000);
        font-size: 36px;
        font-weight: 600;
      }
      h4 {
        margin-top: 30px;
        color: var(--Main-DarkGray, #353535);
        font-size: 30px;
        font-weight: 400;
      }
    }
    .tag-list {
      width: 711px;
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      span {
        margin: 10px 10px 0 0;

        border-radius: 50px;
        border: 0.5px solid var(--GrayScale-1, #5b5b5b);
        display: inline-block;
        padding: 6px 20px;

        color: var(--GrayScale-1, #5b5b5b);
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        text-justify: center;
      }
    }
    .btn {
      margin-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        width: 320px;
        height: 50px;
        padding: 10px;

        color: #fff;
        background: #000;
      }
      .buy {
        background: var(--Sub-Lime, #b6d72a);
        margin-left: 50px;
      }
    }
    .rating {
      margin-top: 116px;
    }
    .item-description {
      width: 711px;
      border-top: 1px solid #999;
      margin-top: 20px;
      .description-box {
        width: 567px;
        margin: 30px 0;

        .product-detail-text {
          color: var(--GrayScale-0, #222);
          padding: 0 20px;

          font-size: 18px;
          font-weight: 500;
        }

        .desc-section {
          margin-top: 20px;
          padding: 0 20px;
          color: var(--GrayScale-1, #5b5b5b);
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
`;
