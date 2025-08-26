import { Link } from "react-router-dom";
import { ButtonStyle } from "./style";

const Button = () => {
  return (
    <ButtonStyle>
      <Link to="/pay">
        <span>결제하기</span>
      </Link>
    </ButtonStyle>
  );
};

export default Button;
