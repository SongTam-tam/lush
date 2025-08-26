// style.ts
import styled from "styled-components";

export const CheckBoxStyle = styled.div`
  label {
    font-size: 14px;
    color: #848484;
  }
`;
export const Ordered = styled.div`
  .table-wrap {
    border-top: 2px solid #353535;
    padding: 100px 0;
  }
`;
export const CartRow = styled.tr``;

export const Cell = styled.td`
  padding: 30px 10px;
  vertical-align: middle;
  color: #aaa;
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

export const ImageCell = styled(Cell)`
  width: 150px;
  text-align: left;
  margin-right: 20px;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    display: block;
  }
`;

export const InfoCell = styled(Cell)`
  width: 365px;
  text-align: left;
  color: #aaa;
  .item-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item-name {
    font-size: 18px;
    font-weight: 400;

    margin-bottom: 15px;
  }
  .item-category {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const QtyCell = styled(Cell)`
  width: 80px;
  text-align: center;
  .item-quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 18px;
  }
  input {
    width: 50px;
    height: 30px;
    text-align: center;
  }
`;

export const PriceCell = styled(Cell)`
  width: 120px;
  text-align: right;
  font-size: 18px;
  font-weight: 500;
`;
export const CartBottomstyle = styled.div`
  border-top: 2px solid #353535;
  border-bottom: 2px solid #353535;
  padding-top: 100px;
  margin-bottom: 150px;
  width: 655px;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 24px;
  div {
    display: flex;
    justify-content: space-between;
    color: var(--Main-DarkGray, #848484);

    font-weight: 500;
    margin-bottom: 40px;
  }
  .Benefits {
    margin-bottom: 80px;
  }
  .total-price {
    color: #b6d72a;

    font-weight: 600;
  }
`;
