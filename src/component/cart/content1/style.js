import styled from "styled-components";

export const Visualstyle = styled.div`
  width: 100%;
  position: relative;
  h2 {
    position: absolute;
    font-family: "Lush Handwritten WLat";
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
export const CartListStyle = styled.div`
  margin-top: 210px;
  .cart-header {
    width: 1600px;
    height: 70px;
    padding: 24px 0;

    th {
      color: #353535;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      vertical-align: middle;
      /* border: 1px solid #000; */
    }
  }
`;
export const CartItemStyle = styled.tr`
  height: 190px;
  padding: 30px 20px;
  border-top: 1px solid #dbdbdb;

  td {
    text-align: center;
    vertical-align: middle;
  }
  .item-image-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item-checkbox {
    margin-right: 16px;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
  /* border: 1px solid #000; */
  .item-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item-name {
      font-size: 20px;
      font-weight: 500;
    }
    .item-category {
      font-size: 18px;
      font-weight: 500;
      color: #848484;
    }
  }
  .item-price {
    font-size: 20px;
    font-weight: 500;
  }
  .item-quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 115px;
    button {
      width: 24px;
      height: 24px;
      font: 24px;
      border: none;
      cursor: pointer;
      background: transparent;
    }
    input {
      width: 50px;
      height: 30px;
      text-align: center;
      margin: 0 10px;
    }
  }
  .item-total {
    font-size: 20px;
    font-weight: 500;
  }
  .item-remove {
    background: transparent;
  }
`;
