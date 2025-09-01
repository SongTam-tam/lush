import FormLeft from "./payDetail/FormLeft";
import FormRight from "./payDetail/FormRight";
import { PayFormStyle } from "./style";

const PayForm = () => {
  return (
    <PayFormStyle>
      <h2>Check out</h2>
      <div className="inner">
        <FormLeft />
        <FormRight />
      </div>
    </PayFormStyle>
  );
};

export default PayForm;
