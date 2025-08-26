import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CartBottomstyle } from "./style";
import { cartActions } from "../../../../../store/modules/CartSlice";

const PayInformation = ({ cart }) => {
  const dispatch = useDispatch();
  const { priceTotal } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(cartActions.totalCart());
  }, [cart, dispatch]);

  const deliveryFee = priceTotal > 50000 ? 0 : 3000;
  const totalPrice = priceTotal + deliveryFee;
  return (
    <CartBottomstyle>
      <h3>결제정보</h3>
      <div className="item-totalprice">
        <p>합계</p>
        <p>₩ {priceTotal.toLocaleString()}</p>
      </div>
      <div className="delivery-fee">
        <p>배송비</p>
        <p>₩ {deliveryFee}</p>
      </div>
      <div className="Benefits">
        <p>혜택 적용</p>
        <p>₩ 0</p>
      </div>
      <div className="total-price">
        <p>총 결제 금액</p>
        <p>₩ {totalPrice.toLocaleString()}</p>
      </div>
    </CartBottomstyle>
  );
};

export default PayInformation;
