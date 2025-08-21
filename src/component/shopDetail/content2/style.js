import styled from "styled-components";

export const Reviewsstyle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ReviewLeftStyle = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
    h4 {
      color: var(--Main-DarkGray, #353535);
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 60px;
    }
  }
  .rating {
    p {
      margin-bottom: 40px;
      font-size: 20px;
      font-weight: 600;
      color: #5b5b5b;
    }
    .rating-box {
      width: 420px;
      padding: 40px 50px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      background-color: #f7f7f7;
      .rating-average {
        width: 100%;
        color: #353535;
        font-size: 20px;
        font-weight: 500;

        display: flex;
        align-items: center;
        text-align: center;
        svg {
          margin-right: 10px;
        }
      }
      .review {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #848484;
        margin-bottom: 20px;
        .rate {
          margin-right: 30px;
        }
      }
    }
  }
  .review-img {
    margin-top: 57px;
    img {
      width: 102px;
      height: 106px;
      flex-shrink: 0;
    }
  }
`;
export const ReviewRightStyle = styled.div`
  width: 865px;
  strong {
    display: flex;
    justify-content: flex-end;

    color: var(--GrayScale-2, #848484);
    font-size: 15px;
    font-weight: 400;
    position: relative;

    margin-bottom: 131px;
    &::after {
      content: "";
      position: absolute;
      background: #848484;
      width: 53px;
      height: 2px;
      top: 26px;
      right: -3px;

      position: absolute;
      background: #848484;
    }
  }
`;
export const ReviewListstyle = styled.div`
  border-bottom: 1px solid #999;
  margin-bottom: 20px;
  .usertop {
    display: flex;
    width: 865px;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 24px;
    img {
      width: 72px;
      height: 72px;
      margin-right: 28px;
    }
    .userRate {
      display: flex;
      width: 90px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      flex-shrink: 0;
      color: #999;

      font-size: 14px;
      font-weight: 500;

      text-align: center;
      .rate {
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .review_wrap {
    margin-left: 20px;
    .product-name {
      color: #999;

      font-size: 16px;
      font-weight: 500;
      margin-bottom: 15px;
    }
    .review-text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;

      p {
        width: 600px;
        color: #353535;

        font-size: 16px;
        font-weight: 500;
        img {
          width: 151px;
          height: 164px;
        }
      }
    }
  }
`;
export const GalleryWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 4칸 */
  gap: 5px;
  width: 400px; /* 원하는 크기 조정 */

  .item {
    width: 100%;
    aspect-ratio: 1/1; /* 정사각형 유지 */
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6f6f6;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;
