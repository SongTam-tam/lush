import { Reviewsstyle } from "./style";
import ReviewLeft from "./ReviewLeft";
import ReviewRight from "./ReviewRight";
import Recommend from "../best/Recommend";

const DetailReview = () => {
  return (
    <>
      <Reviewsstyle className="reviewWrap">
        <div className="rating-box"></div>

        <ReviewLeft />
        <ReviewRight />
      </Reviewsstyle>
        <Recommend />
    </>
  );
};
export default DetailReview;
