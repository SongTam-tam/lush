import ShopDetailTop from "../../component/newDetail/content1/ShopDetailTop";
import DetailReview from "../../component/newDetail/content2/DetailReview";
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
