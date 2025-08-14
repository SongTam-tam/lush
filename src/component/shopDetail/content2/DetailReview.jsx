import { Reviewsstyle } from "./style";
import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";

const DetailReview = () => {
  return (
    <Reviewsstyle className="reviewWrap">
      <div className="top">
        <h4>Reviews</h4>
        <strong>view all</strong>
      </div>
      <div className="rating">
        <p>
          <i>
            <MdOutlineStar />
          </i>
          상품 평점
        </p>
        <div className="rating-box">
          <p>
            <MdOutlineStar />
            4.47
          </p>
        </div>
      </div>

      <div className="rating-box"></div>
    </Reviewsstyle>
  );
};

export default DetailReview;
