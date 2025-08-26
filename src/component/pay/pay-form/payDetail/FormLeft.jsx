import Orderer from "./compomentLeft/Orderer";
import Delivery from "./compomentLeft/Delivery";
import { FormLeftStyle } from "./style";
import Button from "./compomentLeft/button/Button";

const FormLeft = () => {
  return (
    <FormLeftStyle>
      <Orderer />
      <Delivery />
      <Button />
    </FormLeftStyle>
  );
};

export default FormLeft;
