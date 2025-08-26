import { GalleryWrap, ReviewLeftStyle } from "./style";
import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";
const ReviewLeft = () => {
  const images = [
    "/images/reviews/1.png",
    "/images/reviews/2.png",
    "/images/reviews/3.png",
    "/images/reviews/4.png",
    "/images/reviews/5.png",
  ];
  return (
    <ReviewLeftStyle>
      <div className="top">
        <h4>Reviews</h4>
      </div>
      <div className="rating">
        <p>상품 평점</p>
        <div className="rating-box">
          <p className="rating-average">
            <MdOutlineStar size={24} />
            4.47
          </p>
          <div className="review">
            <i>
              <MdOutlineStar size={16} color="#848484" />
            </i>
            <div className="rate">4.3</div>
            <span>“향이 좋아요”</span>
          </div>
          <div className="review">
            <i>
              <MdOutlineStar size={16} color="#848484" />
            </i>
            <div className="rate">4.3</div>
            <span>“향이 좋아요”</span>
          </div>
        </div>
      </div>
      <div className="review-img">
        <div>
          <GalleryWrap>
            {images.slice(0, 9).map((src, idx) => (
              <div className="item" key={idx}>
                <img src={src} alt={`gallery-${idx}`} />
              </div>
            ))}
            <div className="item more">more ➜</div>
          </GalleryWrap>
        </div>
      </div>
    </ReviewLeftStyle>
  );
};

export default ReviewLeft;
