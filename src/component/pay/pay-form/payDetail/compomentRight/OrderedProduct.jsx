import CartItem from "./CartItem";
import { Ordered } from "./style";

const OrderedProduct = ({ carts }) => {
  return (
    <Ordered>
      <h3>주문 상품</h3>
      <div className="table-wrap">
        <table>
          <tbody>
            {carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </tbody>
        </table>
      </div>
    </Ordered>
  );
};

export default OrderedProduct;
