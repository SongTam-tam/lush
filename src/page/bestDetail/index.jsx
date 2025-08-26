import ShopDetailTop from "../../component/bestDetail/content1/ShopDetailTop";
import DetailReview from "../../component/bestDetail/content2/DetailReview";
import { ShopDetailstyle } from "./style";

const BestDetail = () => {
  return (
    <ShopDetailstyle>
      <div className="inner">
        <ShopDetailTop />
        <DetailReview />
      </div>
    </ShopDetailstyle>
  );
};

export default BestDetail;
