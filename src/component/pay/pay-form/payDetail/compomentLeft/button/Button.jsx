import { Link } from "react-router-dom";
import { ButtonStyle, Buttons } from "./style";

const Button = () => {
  const buttons = ["신용카드", "간편결제", "계좌이체", "휴대폰결제"];

  return (
    <Buttons>
      {buttons.map((text, index) => (
        <ButtonStyle key={index}>
          <Link to="/pay">
            <p>{text}</p>
          </Link>
        </ButtonStyle>
      ))}
    </Buttons>
  );
};

export default Button;
