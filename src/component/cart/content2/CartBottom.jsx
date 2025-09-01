import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../store/modules/CartSlice';
import { useEffect } from 'react';
import { CartBottomstyle } from './style';
import Button from './Button';

const CartBottom = ({ cart }) => {
    const dispatch = useDispatch();
    const { priceTotal, deliveryFee, totalPrice } = useSelector((state) => state.cart);
    useEffect(() => {
        dispatch(cartActions.totalCart());
        dispatch(cartActions.cartTotal());
    }, [cart, dispatch]);

    // const deliveryFee = priceTotal > 50000 ? 0 : 3000;
    // const totalPrice = priceTotal + deliveryFee;
    return (
        <CartBottomstyle>
            <div className="item-totalprice">
                <p>상품 금액</p>
                <p>{priceTotal.toLocaleString()}</p>
            </div>
            <div className="delivery-fee">
                <p>배송비</p>
                <p>{deliveryFee}</p>
            </div>
            <div className="total-price">
                <p>총 결제 금액</p>
                <p>{totalPrice.toLocaleString()}</p>
            </div>
            <Button className="btn" />
        </CartBottomstyle>
    );
};

export default CartBottom;
