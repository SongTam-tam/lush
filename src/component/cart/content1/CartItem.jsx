import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/modules/CartSlice";
import { CartItemStyle } from "./style";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { id, title, img, category, itemtotal, price2, quantity } = cart;
  return (
    <CartItemStyle as="tr" className="cart-item">
      {/* 상품 이미지 */}
      <td className="item-image-cell">
        <input type="checkbox" className="item-checkbox" />
        <img src={img} alt={title} className="item-image" />
      </td>
      {/* 상품명 */}
      <td>
        <div className="item-info">
          <h3 className="item-name">{title}</h3>
          <p className="item-category">{category}</p>
        </div>
      </td>

      {/* 가격 */}
      <td className="item-price">₩ {price2}</td>

      {/* 수량 */}
      <td>
        <div className="item-quantity">
          <button
            type="button"
            aria-label="수량 감소"
            onClick={() => {
              dispatch(cartActions.decreaseQuantity(id));
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            aria-label="수량 증가"
            onClick={() => {
              dispatch(cartActions.increaseQuantity(id));
            }}
          >
            +
          </button>
        </div>
      </td>

      {/* 총금액 */}
      <td className="item-total">
        ₩ {itemtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </td>

      {/* 삭제 */}
      <td>
        <button
          type="button"
          className="item-remove"
          onClick={() => dispatch(cartActions.removeCart(id))}
          aria-label={`${title} 삭제`}
        >
          X
        </button>
      </td>
    </CartItemStyle>
  );
};

export default CartItem;
