import ProductList from './ProductList';
import shopData from '../../../../assets/api/shopData';
import { ItemLi, ProductListStyle } from './style';
import { useState, useMemo } from 'react';
import HoverDetail from './HoverDetail';
import Pagination from '../../../../common/pagination/Pagination';

const normalize = (v) =>
    String(v ?? '')
        .trim()
        .toLowerCase();

const ProductDetail = ({ selected }) => {
    const [hoverId, setHoverId] = useState(null);

    // selected 없으면 "bath" 기본
    const active = normalize(selected || 'bath');

    const filteredData = useMemo(() => {
        return shopData.filter((item) => item.category2 === selected);
    }, [selected]);

    return (
        <div>
            <h2>{active.toUpperCase()}</h2>

            <ProductListStyle className="product_list">
                {filteredData.map((item) => (
                    <ItemLi
                        key={item.id}
                        onMouseEnter={() => setHoverId(item.id)}
                        onMouseLeave={() => setHoverId(null)}
                    >
                        {hoverId === item.id ? (
                            <HoverDetail item={item} />
                        ) : (
                            <ProductList {...item} />
                        )}
                    </ItemLi>
                ))}
                <Pagination />
            </ProductListStyle>
        </div>
    );
};

export default ProductDetail;
