import Visual from '../../component/cart/content1/Visual';
import CartList from '../../component/cart/content1/CartList';
import { useSelector } from 'react-redux';
import CartBottom from '../../component/cart/content2/CartBottom';
import { CartInnerStyle } from './style';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { carts } = useSelector((state) => state.cart);
    const nav = useNavigate();
    return (
        <div>
            <Visual />
            {carts.length > 0 ? (
                <div className="inner">
                    <CartList carts={carts} />
                    <CartBottom carts={carts} />
                </div>
            ) : (
                <CartInnerStyle>
                    <h2>장바구니가 비어있습니다</h2>
                    <button onClick={() => nav('/shop')}>
                        <p>쇼핑하러가기</p>
                    </button>
                    <div className="bg"></div>
                </CartInnerStyle>
            )}
        </div>
    );
};

export default Cart;
