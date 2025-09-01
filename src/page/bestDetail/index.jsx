import { useParams } from 'react-router-dom';
import ShopDetailTop from '../../component/bestDetail/content1/ShopDetailTop';
import DetailReview from '../../component/bestDetail/content2/DetailReview';
import { ShopDetailstyle } from './style';
import shopBestData from '../../assets/api/shopBestData';

const BestDetail = () => {
    const { id } = useParams(); // URL의 :id
    const numericId = Number(id); // 데이터 id가 숫자면 변환
    const product = shopBestData.find((p) => p.id === numericId);

    return (
        <ShopDetailstyle>
            <div className="inner">
                <ShopDetailTop product={product} />
                <DetailReview product={product} />
            </div>
        </ShopDetailstyle>
    );
};

export default BestDetail;
