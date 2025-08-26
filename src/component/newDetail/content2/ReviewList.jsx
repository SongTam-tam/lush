import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";
import { ReviewListstyle } from "./style";
const ReviewList = () => {
  return (
    <ReviewListstyle>
      <div className="usertop">
        <img src="/images/shopDetail/detail_profile.png" alt="profile" />
        <div className="userRate">
          <div className="id">hama******</div>
          <div className="rate">
            <MdOutlineStar size={14} />
            <MdOutlineStar size={14} />
            <MdOutlineStar size={14} />
            <MdOutlineStar size={14} />
            <MdOutlineStar size={14} />
          </div>
          <div className="date">2025. 08. 04</div>
        </div>
      </div>
      <div className="review_wrap">
        <div class="product-name">핑크피치 170g</div>
        <div class="review-text">
          <p>
            복숭아 모양이 너무 귀여워서 구매했는데, 향까지 완벽해요. 따뜻한
            욕조에 넣는 순간 상큼한 복숭아 향이 퍼지면서 기분이 확 좋아져요.
            욕조 물이 연한 핑크빛으로 물들고, 피부에 닿는 촉감도 정말
            부드러워요. 향이 자극적이지 않고 은은해서 입욕 후에도 계속 기분 좋게
            남아있더라고요! 하루 피로가 정말 녹아내리는 느낌이었어요. 추천!!
          </p>
          <img
            class="review-image"
            src="/images/reviews/1.png"
            alt="제품 이미지"
          ></img>
        </div>
      </div>
    </ReviewListstyle>
  );
};

export default ReviewList;
