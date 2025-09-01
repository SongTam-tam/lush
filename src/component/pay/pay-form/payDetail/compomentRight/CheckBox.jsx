import { CheckBoxStyle } from "./style";
const CheckBox = () => {
  return (
    <CheckBoxStyle>
      <div>
        <input type="checkbox" id="agree1" />
        <label htmlFor="agree1">개인정보 제공 동의</label>
      </div>
      <div>
        <input type="checkbox" id="agree2" />
        <label htmlFor="agree2">주문내용 확인 및 결제 동의</label>
      </div>
    </CheckBoxStyle>
  );
};

export default CheckBox;
