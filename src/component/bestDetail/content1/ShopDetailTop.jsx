// component/bestDetail/content1/ShopDetailTop.jsx
import { ShopDetailTopstyle } from "./style";
import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/modules/CartSlice";
import { Link, useNavigate } from "react-router-dom";

const ShopDetailTop = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) {
    return (
      <div style={{ padding: 24 }}>
        상품을 찾을 수 없습니다.
        <button style={{ marginLeft: 12 }} onClick={() => navigate(-1)}>
          이전으로
        </button>
      </div>
    );
  }

  const images = [product.img, product.img2].filter(Boolean);

  return (
    <ShopDetailTopstyle className="wrap">
      <div className="p_left">
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={product.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p_right">
        <div className="text">
          <p>{product.category2?.toUpperCase()}</p>
          <h3>{product.title}</h3>
          <h4>₩ {product.price2}</h4>
        </div>

        <div className="tag-list">
          <span># 나에게 집중하기</span>
          <span># 집에서홈스파</span>
          <span># 나시간</span>
          <span># 휴식</span>
        </div>

        <div className="btn">
          <button
            className="cart"
            onClick={() => dispatch(cartActions.addCart(product))}
          >
            장바구니
          </button>

          <Link to="/cart">
            <button
              className="buy"
              onClick={() => {
                dispatch(cartActions.addCart(product));
              }}
            >
              구매하기
            </button>
          </Link>
        </div>

        <div className="rating">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdStarHalf />
          <MdOutlineStarBorder />
        </div>

        <div className="item-description">
          <div className="description-box">
            <p className="product-detail-text">제품설명</p>
            <div className="desc-section">
              복숭아와 시트러스 오일이 조화를 이루어 달콤하고 상큼한 향을 전하는
              배쓰밤...
            </div>
          </div>
        </div>

        <div className="item-description">
          <div className="description-box">
            <p className="product-detail-text">사용 방법</p>
            <div className="desc-section">
              따뜻한 물과 함께 포근한 거품과 은은한 향기로 편안한 휴식을
              제공합니다.
            </div>
          </div>
        </div>

        <div className="item-description">
          <div className="description-box">
            <p className="product-detail-text">사용 시 주의사항</p>
            <div className="desc-section">
              어린이 손에 닿지 않게 보관하고, 사용 후 욕조를 깨끗이 헹구세요.
            </div>
          </div>
        </div>
      </div>
    </ShopDetailTopstyle>
  );
};

export default ShopDetailTop;
