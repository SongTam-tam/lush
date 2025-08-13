import ShopDetailTop from "../../component/shopDetail/content1/ShopDetailTop";
import DetailReview from "../../component/shopDetail/content2/DetailReview";
import { ShopDetailstyle } from "./style";

const ShopDetail = () => {
  return (
    <ShopDetailstyle>
      <div className="inner">
        <ShopDetailTop />
        <DetailReview />
      </div>
    </ShopDetailstyle>
  );
};

export default ShopDetail;
