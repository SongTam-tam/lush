// CartItem.tsx
import { CartRow, ImageCell, InfoCell, QtyCell, PriceCell } from './style';

const CartItem = ({ cart }) => {
    const { title, img, category, itemtotal, quantity } = cart;

    return (
        <CartRow>
            <ImageCell>
                <img src={img} alt={title} />
            </ImageCell>

            <InfoCell>
                <div className="item-info">
                    <h3 className="item-name">{title}</h3>
                    <p className="item-category">{category}</p>
                </div>
            </InfoCell>

            <QtyCell>
                <div className="item-quantity">
                    <span>{quantity}</span>
                </div>
            </QtyCell>

            <PriceCell>₩ {itemtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</PriceCell>
        </CartRow>
    );
};

export default CartItem;
