import Shopheader from '../shopheader/Shopheader';
import ProductDetail from './detail/ProductDetail';
import ProductType from './ProductType';
import { ProductStyle } from './style';
import { useEffect, useRef, useState } from 'react';

const ProductMain = () => {
    const [selected, setSelected] = useState('bath');

    return (
        <ProductStyle>
            <h2>OUR PRODUCT</h2>

            <ProductType selected={selected} onSelect={setSelected} />
            <Shopheader selected={selected} onSelect={setSelected} />
            <div className="inner">
                <ProductDetail selected={selected} />
            </div>
        </ProductStyle>
    );
};

export default ProductMain;
