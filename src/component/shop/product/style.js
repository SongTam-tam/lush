import styled from "styled-components";

export const ProductStyle = styled.section`
  h2 {
    color: #000;
    font-family: "Lush Handwritten WLat Bold";
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    margin: auto;
    text-align: center;
    /* border: 1px solid #000; */
  }
`;
export const ProductTypeStyle = styled.div`
  .product-type {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 150px;
    .img_wrap {
      width: 320px;
      height: 440px;
      position: relative;
      display: block;

      img {
        width: 320px;
        height: 440px;
        object-fit: cover;
        display: block;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 36px;
        font-weight: 600;
        color: #fff;
        /* color: red; */
      }
    }
  }
`;
export const ProductListStyle = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  li {
    width: 330px;
    height: 490px;
    display: block;
    margin-bottom: 60px;
    .product_img {
      width: 330px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #cacaca;
      img {
        width: 300px;
        height: 300px;
        display: block;
      }
    }
    .title {
      margin-top: 30px;

      a {
        h3 {
          color: var(--Main-DarkGray, #353535);
          text-align: center;
          font-size: 20px;
          font-weight: 600;
        }
        h4 {
          color: var(--Main-DarkGray, #353535);
          text-align: center;

          font-size: 18px;
          font-weight: 500;

          margin-top: 15px;
        }
      }
    }
  }
`;
