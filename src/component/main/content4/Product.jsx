import { ProductStyle } from './style';
import Bath from './bath/Bath';
import Hair from './hair/Hair';
import Fragrances from './fragrances/Fragrances';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const nav = useNavigate();
    return (
        <ProductStyle>
            <h2>OUR PRODUCT</h2>
            <p className="pabtn">
                <button onClick={() => nav('/shop')}>view all</button>
            </p>
            <Bath />
            <Hair />
            <Fragrances />
        </ProductStyle>
    );
};

export default Product;
