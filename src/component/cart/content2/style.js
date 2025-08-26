import styled from "styled-components";

export const CartBottomstyle = styled.div`
  border-top: 1px solid #353535;
  padding-top: 100px;
  margin-bottom: 150px;
  width: 1600px;
  display: flex;
  flex-direction: column;
  position: relative;
  div {
    display: flex;
    justify-content: space-between;
    color: var(--Main-DarkGray, #353535);

    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .delivery-fee {
    margin-bottom: 80px;
  }
  .total-price {
    color: #000;

    font-size: 30px;
    font-weight: 600;
  }
`;
export const ButtonStyle = styled.div`
  a {
    margin-top: 150px;
    background: #000;
    width: 320px;
    height: 50px;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    display: inline-block;
  }
`;
