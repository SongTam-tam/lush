import { CartListStyle } from "./style";

const CartList = () => {
  return (
    <CartListStyle>
      <ul className="listCategory">
        <li>상품명</li>
        <li>가격</li>
        <li>수량</li>
        <li>총수량</li>
        <li>삭제</li>
      </ul>
    </CartListStyle>
  );
};

export default CartList;
