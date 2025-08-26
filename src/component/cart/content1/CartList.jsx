import CartItem from './CartItem';
import { CartListStyle } from './style';

const CartList = ({ carts }) => {
    return (
        <CartListStyle>
            <table className="cart-table">
                <colgroup>
                    <col style={{ width: '200px' }} /> {/* 이미지 */}
                    <col style={{ width: '550px' }} /> {/* 상품명 */}
                    <col style={{ width: '250px' }} /> {/* 가격 */}
                    <col style={{ width: '200px' }} /> {/* 수량 */}
                    <col style={{ width: '200px' }} /> {/* 총수량 */}
                    <col style={{ width: '150px' }} /> {/* 삭제 */}
                </colgroup>
                <thead>
                    <tr className="cart-header">
                        <th scope="col">상품명</th>
                        <th scope="col"></th>
                        <th scope="col">가격</th>
                        <th scope="col">수량</th>
                        <th scope="col">총수량</th>
                        <th scope="col">삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                </tbody>
            </table>
        </CartListStyle>
    );
};

export default CartList;
