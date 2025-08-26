import { PayFormStyle } from "./style";

const Orderer = () => {
  return (
    <PayFormStyle className="pay-form">
      <h3>주문자 정보</h3>

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

        <div className="form-row">
          <label>이메일</label>
          <input type="email" placeholder="lushmall@gmail.com" />
        </div>
      </div>
    </PayFormStyle>
  );
};

export default Orderer;
