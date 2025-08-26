import Visual from '../../component/cart/content1/Visual';
import CartList from '../../component/cart/content1/CartList';
import { useSelector } from 'react-redux';
import CartBottom from '../../component/cart/content2/CartBottom';

const Cart = () => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <div>
            <Visual />
            <div className="inner">
                <CartList carts={carts} />
                <CartBottom carts={carts} />
            </div>
        </div>
    );
};

export default Cart;
