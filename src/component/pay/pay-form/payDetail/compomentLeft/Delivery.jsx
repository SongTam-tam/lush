import DropDown from "./DropDown";
import PayMethod from "./PayMethod";
import { PayFormStyle } from "./style";

const deliveryMessages = [
  "문 앞에 놔주세요",
  "부재시 경비실에 맡겨주세요",
  "부재시 문 앞에 놔주세요",
  "직접 받을게요",
  "배송 전에 연락주세요",
  "직접입력...",
];

const Delivery = () => {
  return (
    <PayFormStyle className="pay-form">
      <h3>배송 정보</h3>

      <div className="form-col">
        <div className="row-group">
          <div className="form-row short">
            <label>이름</label>
            <input type="text" placeholder="홍길동" />
          </div>
          <div className="form-col">
            <div className="form-row short">
              <label>휴대전화번호</label>
              <input type="text" placeholder="010 -" />
            </div>
          </div>
        </div>
        <div className="row-group">
          <div className="form-col">
            <div className="form-row short">
              <label>주소</label>
              <input type="text" placeholder="도로명 주소 검색" />
            </div>
          </div>
          <div className="form-col">
            <div className="form-row short">
              <label>상세주소</label>
              <input type="text" placeholder="303동 2005호" />
            </div>
          </div>
        </div>
      </div>
      <DropDown />
      <h3>선물하기</h3>
      <div className="gift-row">
        <label className="gift-label">
          <input type="checkbox" />
          <span>기프트 포장</span>
        </label>
      </div>
      <div className="form-row">
        <label className="card-label">메세지 카드</label>
        <textarea
          className="card-message"
          placeholder="카드 메세지 작성"
          rows={3}
          maxLength={100}
        />
        <div className="card-hint">미입력시 카드만 발송됩니다.</div>
      </div>
      <PayMethod />
    </PayFormStyle>
  );
};

export default Delivery;
