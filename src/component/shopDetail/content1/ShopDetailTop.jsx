import { ShopDetailTopstyle } from "./style";
import { MdOutlineStarBorder, MdStarHalf, MdOutlineStar } from "react-icons/md";
import { useParams, useNavigate, Link } from "react-router-dom";
import shopData from "../../../assets/api/shopData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/modules/CartSlice";
const ShopDetailTop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const product = shopData.find((p) => String(p.id) === String(id));

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
  return (
    <ShopDetailTopstyle className="wrap">
      <div className="p_left">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={product.img} alt={product.title} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.img2} alt={product.title} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p_right">
        <div className="text">
          <p>{product.category2.toUpperCase()}</p>
          <h3>{product.title}</h3>
          <h4>₩ {product.price2}</h4>
        </div>
        <div className="tag-list">
          <span># 나에게 집중하기</span>
          <span># 집에서홈스파</span>
          <span># 나시간</span>
          <span># 나에게 집중하기 가장 좋은 시간</span>
          <span># 나에게 집중하기 가장 좋은 시간</span>
          <span># 나에게 집중하기 가장 좋은 시간</span>
        </div>
        <div className="btn">
          <button
            className="cart"
            onClick={() => {
              dispatch(cartActions.addCart(product));
            }}
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
              배쓰밤 과즙이 터지듯 퍼지는 풍부한 향과 부드러운 거품이 온몸을
              감싸며 기분 좋은 릴렉싱을 선사합니다 사랑스러운 복숭아 컬러가
              욕조를 물들이며 눈과 후각 모두를 만족시키는 입욕 아이템
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
