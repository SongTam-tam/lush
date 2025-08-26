import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";
import { ReviewRightStyle } from "./style";
import ReviewList from "./ReviewList";

const ReviewRight = () => {
  return (
    <ReviewRightStyle className="ReviewRight">
      <strong>view all</strong>

      <ReviewList />
      <ReviewList />
    </ReviewRightStyle>
  );
};

export default ReviewRight;
